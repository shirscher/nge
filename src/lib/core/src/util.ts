export function deepTest(obj: any, path: string): any {
    if (!obj) {
        return undefined;
    }
    if (!path || !path.trim()) {
        return obj;
    }

    const parts: string[] = path.split('.');

    let p = parts.shift();
    if (!p) {
        return undefined;
    }
    obj = obj[p];
    while (obj && p && parts.length) {
        p = parts.shift();
        if (!p) {
            return undefined;
        }
        obj = obj[p];
    }
    return obj;
}

export function deepSet(object: any, path: string, value: any) {
    if (!object) {
        throw new Error('Parameter \'object\' was null or undefined. Cannot set property on null or undefined object.');
    }

    const a = path.split('.');
    let o = object;

    for (let i = 0; i < a.length - 1; i++) {
        const n = a[i];
        if (n in o) {
            o = o[n];
        } else {
            o[n] = {};
            o = o[n];
        }
    }

    o[a[a.length - 1]] = value;
}
