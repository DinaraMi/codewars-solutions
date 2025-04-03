var TimeLimitedCache = function () {
this.cache = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key: number, value: number , duration: number) {
    const now = Date.now();
    const existing = this.cache.get(key)
    const isActive = existing && existing.expiry > now

    this.cache.set(key, {
        value,
        expiry: now + duration,
    })
    return isActive ? true : false;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key: number) {
    const now = Date.now()
    const item = this.cache.get(key)
    if (!item) return -1
    if (item.expiry <= now) {
        this.cache.delete(key);
        return -1;
    }
    return item.value
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    const now = Date.now();
    let count = 0;

    for (const [key, { expiry }] of this.cache.entries()) {
        if (expiry > now) {
            count++;
        } else {
            this.cache.delete(key);
        }
    }

    return count;
};


/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */