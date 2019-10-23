'use strict'
let safeCall = function(f) {
    try {
        f()
    } catch (error) {
        return false;
    }
    return true;
};
