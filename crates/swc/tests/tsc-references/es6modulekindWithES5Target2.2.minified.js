//// [es6modulekindWithES5Target2.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var C = function() {
    "use strict";
    function C() {
        _class_call_check(this, C), this.p = 1;
    }
    return C.prototype.method = function() {}, C;
}();
C.s = 0;
export { C as default };