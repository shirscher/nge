import { IApplication } from '../../../application.interface';
import { IModule } from '../../../module.interface';
import { FakeApplication } from '../../fakeApplication.class';

export default (): IModule => {
    return {
        load: (application: IApplication): void => {
            const fakeApp = (application as FakeApplication);
            if (fakeApp.testVar) {
                fakeApp.testVar += 'module2';
            } else {
                fakeApp.testVar = 'module2';
            }
        },

        name: '',

        version: { major: 0, minor: 1, patch: 0 },
    };
};
