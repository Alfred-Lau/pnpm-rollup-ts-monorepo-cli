import { commonFunction, sayHi, not2, name } from 'shared';

commonFunction();
sayHi('CLI');
sayHi('CLI002');
sayHi('CLI003');
sayHi('CLI004');

console.log('----', not2(true), name)