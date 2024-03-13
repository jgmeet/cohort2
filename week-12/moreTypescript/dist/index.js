"use strict";
const user = {
    'usr@1': { id: 'usr@1', name: 'usr1', age: 21 },
    'usr@2': { id: 'usr@2', name: 'usr2', age: 22 }
};
//                      {key, value}
const datasMap = new Map(); // or datasMap = new Map() for no typescript usage
datasMap.set('usr@1', { id: 'usr@1', name: 'usr1', age: 21 });
datasMap.set('usr@2', { id: 'usr@2', name: 'usr2', age: 22 });
const usr = datasMap.get('usr@1');
console.log(usr);
function updateUser(args) {
}
