//// [parserES5ForOfStatement15.ts]
import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
var _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
try {
    for(var _step, _iterator = X[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0){
        var _value = _sliced_to_array(_step.value, 2);
        _value[0], _value[1];
    }
} catch (err) {
    _didIteratorError = !0, _iteratorError = err;
} finally{
    try {
        _iteratorNormalCompletion || null == _iterator.return || _iterator.return();
    } finally{
        if (_didIteratorError) throw _iteratorError;
    }
}