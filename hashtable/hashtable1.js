let user = {
  age: 31,
  name: 'kylie',
  magic: true,
  scream: () => {
    console.log('ahhhhh!');
  }
}

user.age; //O(1)
user.spell = 'abra kadabra';
user.scream();

const a = new Map(); //object only allows to string as keys and Map allows anything as keys, even functions. Also, maps maintains order

const b = new Set();  //prevents duplicates