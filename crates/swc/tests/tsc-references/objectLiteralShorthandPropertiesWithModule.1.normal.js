//// [objectLiteralShorthandPropertiesWithModule.ts]
// module export
var m;
(function(m) {
    var x1;
    m.x = x1;
})(m || (m = {}));
(function(m) {
    var z = x;
    var y = {
        a: x,
        x: x
    };
})(m || (m = {}));