class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log (this.name + "speaks");
    }
}

let girl = new Human ("Rita", 50);

class Man extends Human {
    constructor(name, age, race){
        super (name, age);
    }
}

let Gender = new Man ("Eric", 20);
Gender.talk()