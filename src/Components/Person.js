class Person{

    constructor(name,lastname){
        this.lastname=lastname;
    }
    get fullname(){
        return this.name+""+this.lastname;
    }
}


export default Person;