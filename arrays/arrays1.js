//Arrays with basic operations

const strings = ['a', 'b', 'c', 'd']

//lookup
console.log(strings[2]);  //O(1)

//push
strings.push('e')  //O(1)

//pop
strings.pop();
strings.pop(); //O(1)

//unshift
strings.unshift('x');  //O(n)

//splice
strings.splice(2, 0, 'alien');  //O(n/2) --> O(n)

console.log(strings);