//// [destructuringObjectBindingPatternAndAssignment5.ts]
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
function a() {
    var x;
    var y;
    var _tmp;
    _tmp = {}, y = _object_without_properties(_tmp, [
        "x"
    ]), x = _tmp.x, _tmp;
}