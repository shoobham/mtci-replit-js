//Google Question - find first recurring character
//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]
//It should return undefined

function getFirstRecurringChar(inputArray){
  if(inputArray === undefined || inputArray.length === 0)
    return undefined;

  let map = new Map();
  for(let index in inputArray){
    let item = inputArray[index];
    console.log(item);
    if(map.has(item))
      return item;
    else{
      map.set(item, true);
    }
  }

  return undefined;
}

console.log('First Recurring Character: ', getFirstRecurringChar([2,12,112,3,4,5,22,44]));