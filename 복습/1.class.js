        
//๐ณgetter ๋ฉ์๋๋ obj.propName์ ์ฌ์ฉํด ํ๋กํผํฐ๋ฅผ ์ฝ์ผ๋ ค๊ณ  ํ  ๋ ์คํ๋ฉ๋๋ค.
//๐ณsetter ๋ฉ์๋๋ obj.propNAme = value์ผ๋ก ํ๋กํผํฐ์ ๊ฐ์ ํ ๋นํ๋ ค ํ  ๋ ์คํ๋ฉ๋๋ค
class User {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        return this._name + '๋';
    }
    
    set name(value) {
        if(value.length < 3) {
            console.log('์ด๋ฆ์ด ๋๋ฌด ์งง์ต๋๋ค');
        }
        this._name = value;
    }

    sayHi = () => {
        console.log(`๋ฐ๊ฐ์ต๋๋ค. ${this.name}์๋๋ค.`)
    }
}

let user = new User('ํ๊ธธ๋',30);
user.sayHi();

class Dog{
    constructor(family, name, age) {
        this.family = family;
        this.name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }
    
    set name(vlaue) {
        if(value == "") {
            console.log('๋น๊ฐ์ ์๋ฉ๋๋ค')
            return;
        }
        this._name = value;
    }

    /*
    getName = () => {
        return this.name;
    }

    setName = (name) => {
        this.name = name;
        return this.name;
    }*/

    sayHi = ()=> {
        console.log(`${this.family}์ธ ${this.name}์๋๋ค.`)
    }
}
