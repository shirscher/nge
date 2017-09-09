"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function f() {
    return {
        load: (application) => {
            const fakeApp = application;
            if (fakeApp.testVar) {
                fakeApp.testVar += 'module1';
            }
            else {
                fakeApp.testVar = 'module1';
            }
        },
        name: '',
        version: { major: 0, minor: 1, patch: 0 },
    };
}
exports.f = f;
;
//# sourceMappingURL=index.js.map