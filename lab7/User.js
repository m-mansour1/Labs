class User{
    

    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }

    set name(Newname){
        this.name=Newname;
    }
    get name(){
        return this.name;
    }
    print(){
        for (let prop in User) {
            document.write(prop);
        }
    }
    
}
var user = new User();
Object.defineProperty("name", email,{
    enumerable: false,
    configurable: false,
    writable: false
  });
  user.nationality="Lebanese";
  console.log(Object.keys(user)); 
  delete user.nationality;
  Object.getPrototypeOf(user);
  