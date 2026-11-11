!function() {
    let a = new WeakMap();
    let e = class t {
        static lookup(e) {
            return a.get(e);
        }
    };
    globalThis.out = e;
}();
