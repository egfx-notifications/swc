(function () {
    const cache = new WeakMap();
    class t {
        static lookup(key) {
            return cache.get(key);
        }
    }
    globalThis.out = t;
})();
