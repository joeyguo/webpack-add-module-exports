# add module exports for file after webpack executed

## Usage

``` javascript
var WebpacModuleExports = require("webpack-module-exports");
plugins: [
		// for all file
        new WebpacModuleExports(),

        // just for index.js
        // new WebpacModuleExports({
        //     fileRegExp: /index.js/
        // }),
    ],
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
