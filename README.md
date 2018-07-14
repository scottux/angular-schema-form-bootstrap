Angular Spark Decorator
==========================

This is the [Spark Design System decorator](https://sparkdesignsystem.com) for [Angular Schema Form](https://github.com/json-schema-form/angular-schema-form).

## Components

These are the currently available component types for use in the Spark UI-Schema. 

### array

Used for repeatable sections of a form, allows for optional add and remove as well as maxItems/minItems. Allows for an optional title.

### checkbox

A simple checkbox, useful for boolean input.

### checkboxes

A group of checkboxes, useful for multiple selections.

### default (inputs)

This is the general input type, options are a label and help messaging.

### fieldset

Simply groups a set of other controls together with an optional title.

### help

Can accept any generic html, useful for general messaging not tied to a form value.

### radios

Like checkboxes, but only allows one to be selected at a time. Useful for single-select of a short list of items.

### section

Like fieldset, but more generic.

### select

A select input, useful when there are multiple items to select from and a radio list would be too long.

### submit

A button that is meant to be the final action taken on the form that validates and sends the collected input.

### tabarray

Like the array component, but each item is in a tab.

### tabs

Allows for sections of the form to be organized under a tabbed navigation.

## textarea

Used for long blocks of text input.

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
