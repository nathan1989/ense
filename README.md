# ENSE

Ense is a simple web framework which is for modern browsers and written with modern and future code.

## Getting started

## CSS

#### Simple SCSS import

Simply import all of the SCSS code to your custom SCSS file.

```
@import 'node_modules/ense/styles/main.scss';
```

#### Recommended SCSS import

Recommended method is to import each SCSS module folder. This way you can choose if you want to use certain styles. Be sure to include your custom styles AFTER ```/settings``` and ```/tools``` and BEFORE everything else. This way you can override Ense variables which update Ense CSS classes.

```
// Settings
@import "node_modules/ense/styles/settings/core";

// Tools
@import "node_modules/ense/styles/tools/core";

// Custom overrides go here

// Base
@import "node_modules/ense/styles/base/core";

// Objects
@import "node_modules/ense/styles/objects/core";

// Components
@import "node_modules/ense/styles/components/core";

// Utilities
@import "node_modules/ense/styles/utilities/core";

```

## JS

Ense Javascript is written in ES6/ES2015, so you will need Babel or similar to compile it to todays Javascript.

#### Babel

[Babel](http://babeljs.io/) is a next generation JavaScript compiler. One of the features is the ability to use ES6/ES2015 modules now, even though browsers do not yet support this feature natively.

```js
import Ense from "ense"
.
.
.
new Ense()
```

#### Browserify/Webpack

There are several ways to use [Browserify](http://browserify.org/) and [Webpack](https://webpack.github.io/). For more information on using these tools, please refer to the corresponding project's documention. In the script, including jQuery will usually look like this...

```js
var Ense = require("ense");
.
.
.
new Ense();
```

#### AMD (Asynchronous Module Definition)

AMD is a module format built for the browser. For more information, we recommend [require.js' documentation](http://requirejs.org/docs/whyamd.html).

```js
define(["ense"], function(Ense) {

});
```

### Node

To include jQuery in [Node](nodejs.org), first install with npm.

```sh
npm install ense --save-dev
```

## Versioning

Ense is maintained by using the [Semantic Versioning Specification (SemVer)](http://semver.org).

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | 11+ ✔ | 7.1+ ✔ | Latest ✔ |