const num = [1,4,9,16];

//π³returnκ°μ΄ μμ΄μΌ mapμ μλ‘μ΄ λ°°μ΄λ‘λ°ννλ€.
const map1 = num.map(n=>n*2)
console.log(map1)

const number = [1,16,49,121];
const number1 = number.map(n => n * n)
console.log(number1)

//πμΌν­μ°μ°μ
let a = 10;
let b = 5;
let max = a>b? a: b;
console.log(max)

console.log('--------μΌν­μ°μ°μ----------')

const numResult = number.map((x)=> {
    if (x % 2 ==0) {
        return x / 2;
    } else {
        return Math.sqrt(x);
    }
})
console.log(numResult)


const numResult2 = number.map((x) => {
    return x % 2 == 0? x /2 : Math.sqrt(x);
})
console.log(numResult2)

let age = 30;
let accessAllowed = age > 18?  true : false;

console.log(accessAllowed)


/*
πμ€νλ λ μ°μ°μ
*/

const num1 = [1,2,3];
const num2 = [4,5,6];
const num_s = [...num1, ...num2];
console.log(num_s);
console.log(...num1)

const myVehicle = {
    brand : 'ford'
}

const updateMyVehicle = {
    type : 'car'
}

const myUpdateVehicle = {...myVehicle, ...updateMyVehicle};
console.log(myUpdateVehicle)