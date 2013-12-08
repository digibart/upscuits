Upscuits 
===============
_Short for crispy uptime-biscuits_

With Upscuits you have a nice overview of the uptime of your servers, and a page to share with your customers.


Tools needed:
---------------
* A webserver capable of serving static files
* A free account at [Uptime Robot](http://uptimerobot.com)
* A oven or text-editor


Preparations:
---------------
_You can skip step 1 and 2 if you've already got a monitor at Uptime Robot_

1. Login at Uptime Robot.
2. Add a new monitor
3. Go to [MySettings](http://uptimerobot.com/dashboard.php#mySettings) ("Monitor-Specific API Keys" at bottom right) and create/write down the API key for the monitor.


Directions:
---------------
1. Clone or copy all files in `public` to your webserver/ shared hosting
2. Copy `public/js/config.example.js` to `public/js/config.js`
3. Paste one ore more API keys as an array in `config.js`


Your own flavor:
---------------
This project uses [Grunt](http://gruntjs.com/getting-started). You could edit the files in the `public` folder, but is advised to use Grunt to build the files in `public`-folder. Install Grunt with:

`$ npm install -g grunt-cli`

Next, install the required grunt plugins from `packages.json` by running:

`$ npm install`

Now modify the code in the folder `source` as it pleases you. While editing you can use this to build everytime you save a file: 

`$ grunt watch`

To only compile the less files, use `grunt css`, or to concat javascript files use `grunt js`. To make a new release, run:

`grunt`



Ingredients:
---------------
* Cake:
	* [Bootstrap](http://twitter.github.com/bootstrap/) (2 lbs)
	* [UptimeRobot](http://www.uptimerobot.com) (6 oz.)
    * [i18n](i18next.com) (1 cup per language)
* Topping:
	* [Gauge.js](http://bernii.github.io/gauge.js/) (4 cups per server)
	* [Font Awesome](http://fortawesome.github.com/Font-Awesome/) (1/2 teaspoon)
	* [{{Mustaches}}](https://github.com/janl/mustache.js/) (1/3 lbs)


License:
---------------
This work is licensed under [GPL-v3 license](https://github.com/digibart/upscuits/blob/master/license.md)

