var __apiKeys = [
	'm176319-d0f704bfbda0046a3ed0785c',
];

var __language = null;

/**
 * An example of response of a uptime monitor
 */
var uptimeMonitor = {
	"id": "6732",
	"friendlyname": "Example monitor",
	"url": "http://example.com",
	"type": "2",
	"subtype": "",
	"keywordtype": "2",
	"keywordvalue": "preheated",
	"httpusername": "",
	"httppassword": "",
	"port": "",
	"status": "2",
	"alltimeuptimeratio": "98.25",
	"customuptimeratio": "100.00-99.79-98.89-99.29",
	"log": [{
		"type": "2",
		"datetime": "02/19/2014 07:56:44"
	}]
};

(function() {
	'use strict';

	describe('Translations', function() {
		before(function() {
			$('#server-container').html('');
		});
		
		it('should not throw errors if set null', function(done) {
			__language = null;
			myApp.dashboard.init();

			var interval = setInterval(function() {
				if ($('#server-container').html()) {
					clearInterval(interval);

					$('#server-container').html().match(176319).should.have.length(1);

					done();
				}
			}, 100);
		});

		it('should use default language if set', function(done) {
			__language = 'nl';
			myApp.dashboard.init();

			var interval = setInterval(function() {
				if ($('#server-container').html()) {
					clearInterval(interval);

					$('#server-container').html().match(176319).should.have.length(1);

					done();
				}
			}, 100);
		});

		it('should not throw errors if set false', function(done) {
			__language = false;
			myApp.dashboard.init();

			var interval = setInterval(function() {
				if ($('#server-container').html()) {
					clearInterval(interval);

					$('#server-container').html().match(176319).should.have.length(1);

					done();
				}
			}, 100);
		});
	});


	describe('Placing servers', function() {
		beforeEach(function() {
			__apiKeys = [];
			myApp.dashboard.init();
			$('#server-container').html('');
		});

		it('should show a gray question mark if server is not yet tested', function() {
			myApp.dashboard.placeServer($.extend(uptimeMonitor, {"status": 1}));

			assert.equal($('#server-container .label-default .icon-question').length, 1, 'gray question mark found');

		});

		it('should show a green tick if server is online', function() {
			myApp.dashboard.placeServer($.extend(uptimeMonitor, {"status": 2}));

			assert.ok($('#server-container .label-success .icon-ok').length, 'green tick found');

		});

		it('should show a orange cross if server seems down', function() {
			myApp.dashboard.placeServer($.extend(uptimeMonitor, {"status": 8}));

			assert.ok($('#server-container .label-warning .icon-remove').length, 'orange cross found');

		});

		xit('should show a red bolt if server is down', function() {
			myApp.dashboard.placeServer($.extend(uptimeMonitor, {"status": 9}));

			assert.ok($('#server-container .label-danger .icon-bolt').length, 'red bolt found');
			assert.ok($('#server-container .alert.alert-danger').length, 'server has red background');

		});


	});

})();