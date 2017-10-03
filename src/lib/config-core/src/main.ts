import { IConfigStore } from './configStore';
import { JsonFileConfigStore } from './jsonFile/jsonFileConfigStore';
import { jsonConfigStoreModule } from './jsonFile/jsonFileConfigStoreModule';

export {
    IConfigStore,
    JsonFileConfigStore,
    jsonConfigStoreModule,
};

export default jsonConfigStoreModule;
