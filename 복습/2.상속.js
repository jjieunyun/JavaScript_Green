//πν΄λμ€μ μμ
//π³λΆλͺ¨ν΄λμ€
class User {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        return this._name + 'λ';
    }
    
    set name(value) {
        if(value.length < 3) {
            console.log('μ΄λ¦μ΄ λλ¬΄ μ§§μ΅λλ€');
        }
        this._name = value;
    }

    sayHi = () => {
        console.log(`λ°κ°μ΅λλ€. ${this.name}μλλ€.`)
    }
}

class Dog{
    constructor(family, name, age) {
        this.family = family;
        this.name = name;
        this.age = age;
    }

    /*get name() {
        return this._name;
    }
    
    set name(vlaue) {
        if(value == "") {
            console.log('λΉκ°μ μλ©λλ€')
            return;
        }
        this._name = value;
    }
    */
    
    getName = () => {
        return this.name;
    }

    setName = (name) => {
        this.name = name;
        return this.name;
    }

    sayHi = ()=> {
        console.log(`${this.family}μΈ ${this.name}μλλ€.`)
    }
}


class Animal{
    constructor(name,speed){
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name}μ ${this.speed}λ‘ λ¬λ¦½λλ€`);
    }

    stop() {
        this.speed=0;
        console.log(`${this.name}μ μλλ 0μλλ€.`)
    }
}

//π³extendsλ₯Ό μ΄μ©ν΄μ μμλ°λ μμ ν΄λμ€

class Tiger extends Animal {
    constructor(name, tall) {
        //λΆλͺ¨μκ²μ λ°μμ¨ μμ±κ°μ superμ μ΄μ©ν΄μ μμ±
        super(name);
        //μμν΄λμ€μμλ§ μμ±λλ constructorμ thisλ₯Ό μ΄μ©ν¨
        this.tall = tall;
    }
    hide() {
        console.log(`${this.name} μ¨μμ΅λλ€.`)
    }
    //π³μ€λ²λΌμ΄λ©
    stop(sec) {
        //super.stop();
        console.log('-----μ€λ²λΌμ΄λ©-----')
        this.hide()
        console.log(`${sec}μ΄ λ§μ λ©μΆμμ΅λλ€.`)
    }

}

//π³μμν΄λμ€λ‘ κ°μ²΄μμ±
let tiger = new Tiger('νΈλ')

tiger.run(30)
tiger.stop(10)
tiger.hide()

console.log('------------')

class Student extends User {
    constructor(name,age,major) {
        super(name,age);
        this.major = major;
    }

    study() {
        console.log(`${this.major}λ₯Ό μ κ³΅ν©λλ€`);

    }

    sayHi() {
        console.log(`${this.major}λ₯Ό κ³΅λΆνλ ${this.name}μλλ€.`)
    }
}

const student = new Student('νκΎΈκΎΈ','20','μ€κ΅­μ΄')
student.study('μ€κ΅­μ΄')
student.sayHi()

class HouseDog extends Dog{
    constructor(family, name, age, address){
        super(family,name,age);
        this.address = address;
    }
    intro() {
        console.log(`${this.address}μ μ΄κ³ μμ΅λλ€.`)
    }
}

const mydog1 = new HouseDog('λ² λ€λ§ν΄νλ¦¬μ΄','κΎΈκΎΈ',1,'ν΄μ΄λ');
mydog1.intro();