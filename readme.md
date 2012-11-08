Upscuits 
===============
_Short for crispy uptime-biscuits_

With Upscuits you have a nice overview of the uptime of your servers, and a page to share with your customers.

I've tried to depend on frameworks as much as possible, and I think I did pretty well...


Preparations:
---------------
_You can skip step 1 and 2 if you've already got a monitor at Uptime Robot_

1. Create a free account at [UptimeRobot](http://uptimerobot.com)
2. Add a new monitor
3. Go to [MySettings](http://www.uptimerobot.com/mySettings.asp) and create/write down the API key for the monitor.


Method:
---------------
1. Clone or copy the files to your server
2. Copy `js/config.example.js` to `js/config.js`
3. Paste one ore more API keys as an array in `config.js`


Ingredients:
---------------
* Cake:
	* [Bootstrap](http://twitter.github.com/bootstrap/) (2 lbs)
	* [UptimeRobot](http://www.uptimerobot.com) (6 oz.)
* Topping:
	* [Google Charts](https://developers.google.com/chart) (4 cups/server)
	* [Font Awesome](http://fortawesome.github.com/Font-Awesome/) (1/2 teaspoon)
	* [{{Mustaches}}](https://github.com/janl/mustache.js/) (1/3 lbs)

