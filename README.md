Angular Spark Decorator
==========================

This is the [Spark Design System decorator](https://sparkdesignsystem.com) for [Angular Schema Form](https://github.com/json-schema-form/angular-schema-form).

Install
-------
```sh
npm install angular-schema-form-spark
```
**note** we do not recommend using bower as even the bower team recommend using yarn and webpack now.

The package.json 'main' script is this library alone and unminified so that minification can be handled by webpack or another script bundler.

If you include `angular-schema-form-spark-bundled.min.js` you **DO NOT** need to include angular-schema-form, it is now **embedded** within the bundled above file. If you wish to include the files separately you can still use `angular-schema-form-spark.js` or `angular-schema-form-spark.min.js`

Developer Install
-----------------
```sh
bower install
npm install
```
Then read package.json for the available scripts.
**Note** templates are compiled so the templates script must be run after changes.
