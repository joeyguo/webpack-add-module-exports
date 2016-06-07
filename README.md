# webpack-add-module-exports for webpack

## Usage

``` javascript
var WebpacAddModuleExports = require("webpack-add-module-exports");

plugins: [
    // for all file
    new WebpacAddModuleExports(),

    // just for index.js
    // new WebpacAddModuleExports({
    //     fileRegExp: /index.js/
    // }),
],
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
