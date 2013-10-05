/*

	Upscuits | short for uptime-biscuit
	A quick overview of your server's uptime served on a nice dinner-tray.
	
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	--

	@file		upsuits.js
	@date		Sat Oct 05 2013 14:25:28
	@author		Pixel Bakkerij

	Copyright (c) 2013 Pixel Bakkerij <http://pixelbakkerij.nl>

*/
window.myApp = window.myApp || {};
myApp.dashboard = (function($) {

	var _template = "",
		_loaded = 0,
		_intervalId = 0,
		_start = Date.now(),
		$_container = {},
		$_prograss = {},
		$_countdown = {},
		$_lastUpdate = {};

	function init() {
		_start = Date.now();
		_template = $('#server-template').html();
		$_container = $('#server-container').html('');
		$_prograss = $('.loading');
		$_countdown = $('.countdown');
		$_lastUpdate = $('#last-update');

		for (var i in __apiKeys) {
			getUptime(__apiKeys[i]);
		}

		attachListners($('html'));

		_intervalId = setInterval(countdown, 1000);
	}

	function attachListners($target) {
		$target.find('.tip').tooltip({
			placement: 'bottom'
		});
		$target.find('body').mouseup(function(event) {
			if ($('.popover-inner').length) {
				$('a.log').popover('hide');
			}
		});
	}

	/* load uptime variables from uptimerobot
	* this calls jsonUptimeRobotApi() when loaded  
	*/
	function getUptime(apikey) {
		var url = "http://api.uptimerobot.com/getMonitors?apiKey=" + apikey + "&customUptimeRatio=1-7-30-365&format=json&logs=1";
		$.ajax({
			url: url,
			context: document.body,
			dataType: 'jsonp'
		});
	}

	/* places the html on the page */
	function placeServer(data) {
		data.alert = "alert";
		switch (parseInt(data.status, 10)) {
			case 0:
				data.statustxt = "Up-Time paused";
				data.label = "inverse";
				break;
			case 1:
				data.statustxt = "Not checked yet";
				data.label = "default";
				break;
			case 2:
				data.statustxt = "Online";
				data.label = "success";
				data.alert = "";
				break;
			case 8:
				data.statustxt = "Seems offline";
				data.label = "warning";
				break;
			case 9:
				data.statustxt = "Offline";
				data.label = "important";
				data.alert = "alert alert-error";
				break;
		}

		//ony show last month of logs
		var lastMonth = Date.parse('-1month');
		for (var i in data.log) {
			var log = data.log[i],
				dateTime = Date.parse(log.datetime + " GMT+0300");

			if (dateTime < lastMonth) {
				data.log.splice(i, i + 1);
			} else {
				data.log[i].datetime = dateTime.toString("dd-MM-yyyy H:mm:ss");
			}
		}
		data.log = $.merge([], data.log); //make sure log is set

		// interface of log-stuf like icons
		data.typeicon = getLogIcon;
		data.labeltype = getLogType;
		
		//render the sh!t
		var $output = $(Mustache.render(_template, data));

		//attach popover listners
		$output.find('a.log').click(function() {
			$(this).tooltip('hide');
		}).popover({
			placement: 'bottom',
			html: true,
			content: $output.find('div.log' + data.id).html()
		});
		attachListners($output);

		//append it in the container
		$_container.append($output);

		//load/place the graphs
		var values = data.customuptimeratio.split("-");
		values.push(data.alltimeuptimeratio);
		placeCharts(values, data.id);


		updateProgressBar();
	}

	/* place the chart */
	function placeCharts(values, id) {
		var data = google.visualization.arrayToDataTable([
			['Label', 'Value'],
			['Last Day', parseFloat(values[0])],
			['Last Week', parseFloat(values[1])],
			['Last Month', parseFloat(values[2])],
			['Last year', parseFloat(values[3])],
			['All Time', parseFloat(values[4])]
		]),
			options = {
				width: 550,
				height: 140,
				min: 90,
				max: 100,
				redFrom: 90,
				redTo: 95,
				yellowFrom: 95,
				yellowTo: 99,
				greenFrom: 99,
				greenTo: 100,
				minorTicks: 5,
			};  
		var chart = new google.visualization.Gauge(document.getElementById('chart_' + id));
		chart.draw(data, options);
	}

	/* update progress bar of loaded servers */
	function updateProgressBar() {
		_loaded++;
		$_prograss.css('width', Math.round(_loaded / __apiKeys.length) * 100 + '%');
		if (_loaded >= __apiKeys.length) {
			$_prograss.parent().slideUp();
		}
	}

	/* count down till next refresh */
	function countdown() {
		var now = Date.now(),
			elapsed = parseInt((now - _start) / 1000, 10),
			mins = Math.floor((__refresh - elapsed) / 60),
			secs = __refresh - (mins * 60) - elapsed;

		secs = (secs < 10) ? "0" + secs : secs;

		$_countdown.width(100 - (elapsed * (100 / __refresh)) + '%');
		$_lastUpdate.html(mins + ':' + secs);

		if (elapsed > __refresh) {
			clearInterval(_intervalId);
			init();
		}
	}

	/* set the icon in front of every log-line */
	function getLogIcon() {
		switch (parseInt(this.type, 10)) {
			case 1:
				return "chevron-down";
			case 2:
				return "chevron-up";
			case 99:
				return "pause";
			case 98:
				return "play";
			default:
				return this.type;
		}
	}

	/* give the icon in front of log line a nice color */
	function getLogType() {
		switch (parseInt(this.type, 10)) {
			case 1:
				return "important";
			case 2:
				return "success";
			case 99:
				return "info";
			case 98:
				return "inverse";
			default:
				return this.type;
		}
	}

	//expose dashboard (PUBLIC API)
	return {
		init: init,
		placeServer: placeServer
	};
}(jQuery));
jQuery(document).ready(myApp.dashboard.init);

/* function called from the uptimerequest */
function jsonUptimeRobotApi(data) {
	for (var i in data.monitors.monitor) {
		myApp.dashboard.placeServer(data.monitors.monitor[i]);
	}
}
