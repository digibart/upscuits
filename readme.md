Upscuits 
===============
_Short for crispy uptime-biscuits_

With Upscuits you have a nice overview of the uptime of your servers, and a page to share with your customers.

I've tried to depend on frameworks as much as possible, and I think I did pretty well...


Tools needed:
---------------
* A webserver
* A free account at [UptimeRobot](http://uptimerobot.com)
* A oven or text-editor


Preparations:
---------------
_You can skip step 1 and 2 if you've already got a monitor at Uptime Robot_

1. Login at UptimeRobot.
2. Add a new monitor
3. Go to [MySettings](http://www.uptimerobot.com/mySettings.asp) and create/write down the API key for the monitor.


Directions:
---------------
1. Clone or copy the files to your webserver/ shared hosting
2. Copy `js/config.example.js` to `js/config.js`
3. Paste one ore more API keys as an array in `config.js`


Variations:
---------------

__Use filename-based cache busting.__ Quote from [html5-boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/doc/htaccess.md#cache-busting):

> A first-time visitor to your page may have to make several HTTP requests, but by using the Expires header you make those components cacheable. This avoids unnecessary HTTP requests on subsequent page views. Expires headers are most often used with images, but they should be used on all components including scripts, stylesheets, etc.  
> Traditionally, if you use a far future Expires header you have to change the component's filename whenever the component changes. Or else the visitors browser will show an old cached version of the resource.

Upscuits `.htaccess` has built-in filename cache busting. So it will route all requests for `/path/filename.123.ext` to `/path/filename.ext`. To use this, just add a time-stamp number (or your own numbered versioning system) into your resource filenames in your HTML source whenever you update those resources. Example:

`<script src="/js/jquery.min.181.js"></script>`
 
__N.B. You do not have to rename the resource on the filesystem.__ All you have to do is add the timestamp number to the filename in your HTML source. The `.htaccess` directive will serve up the proper file.

You do have to edit you apache conf, put the following in the `directive` tag in you `httpd.conf` or  and restart apache:

`AllowOverride FileInfo Options`



Ingredients:
---------------
* Cake:
	* [Bootstrap](http://twitter.github.com/bootstrap/) (2 lbs)
	* [UptimeRobot](http://www.uptimerobot.com) (6 oz.)
* Topping:
	* [Google Charts](https://developers.google.com/chart) (4 cups/server)
	* [Font Awesome](http://fortawesome.github.com/Font-Awesome/) (1/2 teaspoon)
	* [{{Mustaches}}](https://github.com/janl/mustache.js/) (1/3 lbs)


License:
---------------
This work is licensed under [GPL-v3 license](https://github.com/digibart/upscuits/blob/master/license.md)

