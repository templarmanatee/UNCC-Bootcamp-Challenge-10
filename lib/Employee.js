class Employee {
    constructor (name, id, email){
        this.name = name; 
        this.id = id; 
        this.email = email; 
    }
    get name() {
        return this.name; 
    }
    get id() {
        return this.id; 
    }
    get email() {
        return this.email;
    }
    get role() {
        return 'Employee';
    }
}

module.exports = Employee; 