/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn: Function) {
    let cache: Record<string, any> = {}
    return function (...args: any[]) {
        const key = args.join(',')
        if (key in cache) {
            return cache[key];
        }

        let result = fn(...args);
        cache[key] = result;
        return result;

    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */