// this
// points to the left of the dot

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
    console.log(`my full name is ${this.firstName} ${this.lastName}`);
  }
}


john.fullName();
bob.fullName()
