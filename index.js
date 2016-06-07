/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author @joeyguo
*/
var ConcatSource = require("webpack-core/lib/ConcatSource");

function WebpackModuleExports(options) {
    this.fileRegExp = options && options.fileRegExp;
}
module.exports = WebpackModuleExports;
 
WebpackModuleExports.prototype.apply = function(compiler) {
    var fileRegExp = this.fileRegExp;
    compiler.plugin("compilation", function(compilation) {
        compilation.plugin("optimize-chunk-assets", function(chunks, callback) {
            chunks.forEach(function(chunk) {
                chunk.files.forEach(function(file) {
                    if(fileRegExp && !fileRegExp.test(file)) return;
                    compilation.assets[file] = new ConcatSource("\nmodule.exports = ", compilation.assets[file]);
                });
            });
            callback();
        });
    });
};
