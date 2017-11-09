// Allows JSON files to be imported using es6 import statements:
// import * as data from './my.json'
declare module '*.json' {
    const value: any;
    export default value;
}
