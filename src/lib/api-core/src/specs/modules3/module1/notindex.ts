import { IApplication } from '../../../application.interface';
import { IModule } from '../../../module.interface';
import { FakeApplication } from '../../fakeApplication.class';

export default (): IModule => {
    return {
        load: (application: IApplication): void => {
            (application as FakeApplication).testVar = 'module1';
        },

        name: '',

        version: { major: 0, minor: 1, patch: 0 },
    };
};
