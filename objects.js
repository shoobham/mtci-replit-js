//Classes in JavaScript
//Reference type
//Context
//Instantiation


//Reference type
console.log([] === []); //false
var object1 = { value : 10};

//Context vs scope
console.log('context', this); //context

//Instantiation
class Player {
  constructor(name, type){
    console.log('player', this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player{
  constructor(name, type){
    super(name, type);
    console.log('wizard', this);
  }

  play(){
    console.log(`WEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.play();
wizard1.introduce();

wizard2.play();
wizard2.introduce();