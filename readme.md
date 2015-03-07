_In french / en français : [readme-fr.md](https://github.com/digibart/upscuits/blob/master/readme-fr.md)_

Upscuits 
===============
_Short for crispy uptime-biscuits_

With Upscuits you have a nice overview of the uptime of your servers, and a page to share with your customers.

[![Build Status](https://travis-ci.org/digibart/upscuits.png?branch=master)](https://travis-ci.org/digibart/upscuits)

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
1. Clone or copy all files in `public` to your disk
2. Copy `public/js/config.example.js` to `public/js/config.js`
3. Paste one ore more API keys as an array in `config.js`
4. Upload `public` to your webserver/ shared hosting, or host on Heroku as explained below:


### Deploying on Heroku:

Install the [Heroku Toolbelt](https://toolbelt.heroku.com/) to start, then follow their 'Getting Started' instructions, including logging in:

```
$ heroku login
Enter your Heroku credentials.
Email: youremail@example.com
Password (typing will be hidden): 
Authentication successful.
```

Make sure you've created a git repository, and that your work is committed.

Next, create a Heroku app:

```
$ heroku create myapp --buildpack https://github.com/heroku/heroku-buildpack-nodejs.git
Creating myapp... done, stack is cedar
BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs.git
http://myapp.herokuapp.com/ | git@heroku.com:myapp.git
```

Now you're ready to deploy to Heroku:

```
$ git push heroku yourbranch:master
```

If you get an `permission denied`-error, run `$ heroku keys:add ~/.ssh/id_rsa.pub` to copy your ssh key to Heroku.

If you make any changes to your app, just commit and push them as before:

```
$ git commit -am "Awesome crazy update"
$ git push heroku yourbranch:master
```



Your own flavor:
---------------
This project uses [Grunt](http://gruntjs.com/getting-started). You could edit the files in the `public` folder, but is advised to use Grunt to build the files in `public`-folder. Install Grunt with:

```
$ npm install -g grunt-cli
```

Next, install the required grunt plugins from `packages.json` by running:

```
$ npm install
```

Now modify the code in the folder `source` as it pleases you. While editing you can use this to build everytime you save a file: 

```
$ grunt watch
```

To serve the `public`-folder on [http://localhost:8000](http://localhost:8000) run:

```
$ grunt connect watch
```

To only compile the less files, use `grunt css`, or to concat javascript files use `grunt js`. To make a new release, run:

```
grunt
```


### Testing

For testing we use Mocha - the fun, simple, flexible JavaScript test framework. Specs are written in `test/spec/test.js`

Before runing tests, run [bower - A package manager for the web](http://bower.io) to install Mocha and his friends:

	$ cd test
	$ bower install

Now you can run the tests with:

```
$ grunt test
```

To run the tests in a browser:

```
$ grunt connect:test:keepalive
```

To just serve the `public` folder on [localhost:3000](http://localhost:3000/)

```
$ node app.js
```





Ingredients:
---------------
* Cake:
	* [Bootstrap](http://twitter.github.com/bootstrap/) (2 lbs)
	* [UptimeRobot](http://www.uptimerobot.com) (6 oz.)
    * [i18n](i18next.com) (1 cup per language)
    * [Express](http://expressjs.com) (just for your own flavor)
* Topping:
	* [Gauge.js](http://bernii.github.io/gauge.js/) (4 cups per server)
	* [Font Awesome](http://fortawesome.github.com/Font-Awesome/) (1/2 teaspoon)
	* [{{Mustaches}}](https://github.com/janl/mustache.js/) (1/3 lbs)


License:
---------------
This work is licensed under [GPL-v3 license](https://github.com/digibart/upscuits/blob/master/license.md)

