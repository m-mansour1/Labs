class Employee {

    static nbOfEmp =0;

    static IncreaseEmp() {
        return nbOfEmp++;
    }

    constructor(name, email, age, address, yoexp, salary) {
        this.name = window.prompt("Please enter your name", "");
        this.email = window.prompt("Please enter your email", "");
        this.age = window.prompt("Please enter your age", "");
        this.address = window.prompt("Please enter your address", "");
        this.yoexp = window.prompt("Please enter years of experience", "");
        this.salary = 1000;
      }
      
      
      print(){
        for (let prop in Employee) {
            document.write(prop);
        }
      }

      addRaise(){
          valueOf(this.salary)= this.salary + this.salary/2;
      }
}

class Manager extends Employee {
    static nbOfMng =0;
    static IncreaseMng() {
        return this.nbOfMng++;
    }

    constructor(name, email, age, address, yofexp, salary, department){
        super(name,email,age,address,yofexp);
        this.salary=1500;
        this.department=department;
    }

    print(){
        for (let prop in Manager) {
            document.write(prop);
        }
    }

    addRaise(){
        this.salary= 2*this.salary;
    }

    
}

var Manager1 = new Manager();

Manager1.name='Tom';
Manager1.email='tom@gmail.com';
Manager1.age='25';
Manager1.address='beirut'; 
Manager1.yofexp='2';
Manager1.salary='1500';
Manager1.department='HR';

nbOfMng++;

var Manager2 = new Manager();

Manager2.name='Harry';
Manager2.email='harry@gmail.com';
Manager2.age='27';
Manager2.address='beirut'; 
Manager2.yofexp='5';
Manager2.salary='1500';
Manager2.department='Administration';

nbOfMng++;

var Employee1 = new Employee();
Employee1.name='Alex';
Employee1.email='alex@gmail.com';
Employee1.age='30';
Employee1.address='beirut';
Employee1.yofexp='10';
Employee1.salary='1000';

nbOfEmp++;

var Employee2 = new Employee();
Employee2.name='Robert';
Employee2.email='robert@gmail.com';
Employee2.age='55';
Employee2.address='beirut';
Employee2.yofexp='20';
Employee2.salary='1000';


nbOfEmp++;

var Employee3 = new Employee();
Employee3.name='Georges';
Employee3.email='georges@gmail.com';
Employee3.age='35';
Employee3.address='beirut';
Employee3.yofexp='15';
Employee3.salary='1000';


nbOfEmp++;


const company=[Manager1, Manager2, Employee1,
Employee2, Employee3];
if(Manager1.instanceOf(Manager)){
    Manager1.addRaise();
}