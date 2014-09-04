Upscuits 
===============
_Court pour uptime-biscuits croustillants_

Avec Upscuits vous pouvez avoir un aperçu de la disponibilité de vos serveurs, et une page à partager avec vos clients.

J'ai essayé d'utiliser les languages de programmation les plus répendus, et je pense que ça donne vraiment bien...


Le matériel dont vous avez besoin:
---------------
* Un serveur web
* Un compte gratuit sur [Uptime Robot](http://uptimerobot.com)
* Un four ou un éditeur de texte


Préparations:
---------------
_Vous pouvez passer l'étape une et deux si vous avez déjà un moniteur sur Uptime Robot_

1. Connectez-vous sur Uptime Robot
2. Ajoutez un nouveau moniteur
3. Rendez-vous dans [MySettings](http://uptimerobot.com/dashboard.php#mySettings) ("Monitor-Specific API Keys" en bas à droite) et créez l'API correspondant à votre moniteur


Directions:
---------------
1. Clonez or copiez tous les fichiers du dossier `public` dans votre serveur / hébergement mutualisé
2. Copiez `public/js/config.example.js` vers `public/js/config.js`
3. Collez la clé API dans le fichier `config.js`


Votre propre saveur:
---------------
Ce projet utilise [Grunt](http://gruntjs.com/getting-started). Vous pouvez éditer les fichiers du dossier `public`, mais il est conseillé d'utiliser Grunt pour construire les fichiers du dossier `public`. Installez Grunt avec:

```
$ npm install -g grunt-cli
```

Ensuite, installez les plugins grunt requis à partir de `packages.json` en exécutant :

```
$ npm install
```

Maintenant modifiez le code du dossier `source` à votre guise. Lors de l'édition, vous pouvez l'utiliser pour construire chaque fois que vous enregistrez un fichier : 

```
$ grunt watch
```

Pour compiler seulement les fichiers "less", utilisez `grunt css`, pour concaténer les fichiers javascript utilisez `grunt js`. Pour faire une nouvelle version, exécutez :

```
grunt
```



Ingredients:
---------------
* Gâteau:
	* [Bootstrap](http://twitter.github.com/bootstrap/) (2 lbs)
	* [UptimeRobot](http://www.uptimerobot.com) (6 oz.)
* Garniture:
	* [Google Charts](https://developers.google.com/chart) (4 cups/server)
	* [Font Awesome](http://fortawesome.github.com/Font-Awesome/) (1/2 teaspoon)
	* [{{Mustaches}}](https://github.com/janl/mustache.js/) (1/3 lbs)


Licence:
---------------
Ce projet est licencé sous [GPL-v3 license](https://github.com/digibart/upscuits/blob/master/license.md)

