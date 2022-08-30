//// [instancePropertyInClassType.ts]
var NonGeneric, Generic;
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
!function(NonGeneric) {
    var c = new (function() {
        "use strict";
        function C(a, b) {
            _class_call_check(this, C), this.a = a, this.b = b;
        }
        return C.prototype.fn = function() {
            return this;
        }, _create_class(C, [
            {
                key: "y",
                get: function() {
                    return 1;
                },
                set: function(v) {}
            }
        ]), C;
    }())(1, 2), r = c.fn();
    r.x, r.y, r.y = 4, c.y();
}(NonGeneric || (NonGeneric = {})), function(Generic) {
    var c = new (function() {
        "use strict";
        function C(a, b) {
            _class_call_check(this, C), this.a = a, this.b = b;
        }
        return C.prototype.fn = function() {
            return this;
        }, _create_class(C, [
            {
                key: "y",
                get: function() {
                    return null;
                },
                set: function(v) {}
            }
        ]), C;
    }())(1, ""), r = c.fn();
    r.x, r.y, r.y = "", c.y();
}(Generic || (Generic = {}));