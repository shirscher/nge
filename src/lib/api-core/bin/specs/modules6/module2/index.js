"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    return {
        load: (application) => {
            const fakeApp = application;
            if (fakeApp.testVar) {
                fakeApp.testVar += 'module2';
            }
            else {
                fakeApp.testVar = 'module2';
            }
        },
        name: '',
        version: { major: 0, minor: 1, patch: 0 },
    };
};
//# sourceMappingURL=index.js.map