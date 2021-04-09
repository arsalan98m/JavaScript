
// Objects Basic
const age = 60;
let random = "random-value";

const person = {
  name: "Arsalan",
  age:age,
  gender:"male",
  siblings:["abc", "def"],
  greeting: function(name){
    console.log(`hello my name is ${name}`)
  },
  sayHello(name){
    console.log(`hello my name is ${name}`)
  },
  job:{
    title:"developer",
    company: {
      name:"codding addict",
      address:"123 main street",
    },

  },
  [random]: 'random'

}
console.log(person.job.title)
console.log(person.job.company.address)
console.log(person);
console.log(person['random-value']);
console.log(person['firstName'])




const john = {
  firstName: "john",
  lastName:"anderson",
  fullName:function(){
    console.log(this)
    console.log(`my full name is ${this.firstName} ${this.lastName}`);
  }
}



const bob = {
  firstName: "bob",
  lastName:"sander",
  fullName:function(){
    console.log(`my full name is bob sanders`);
  }
}


john.fullName();
bob.fullName()
