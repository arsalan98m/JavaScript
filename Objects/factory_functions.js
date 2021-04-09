// Blue Print
// Factory Functions or Constructor Functions
// Factory Functions

function createPerson(firstName,lastName){
  return {
    firstName:firstName,
    lastName:lastName,
    fullName:function(){
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
    }
  }
}

const abid = createPerson("abid","shah");
console.log(abid.fullName());

const noman = createPerson("noman","ahmed");
console.log(noman.fullName())
