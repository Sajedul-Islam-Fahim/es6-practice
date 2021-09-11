function add(num1, num2 = 5){
    return num1 + num2; 
}

console.log(add(10, 25));

const firstName = "Md. Sajedul"
const lastName = "Islam"
const fullName = `${firstName} ${lastName} is a web developer.
His passion is programming.
He loves to write code.`
console.log(fullName);

const doubleIt = num => num*2;

const addition = (x, y) => x + y;

const give = () => 'Messi';

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

console.log(doMath(5,4));

console.log(doubleIt(5));
console.log(addition(5,7));
console.log(give());

const age = [10, 6, 8];
const age2 = [3, 7, 0];
const allAge = [...age, 10, ...age2];
console.log(allAge);

const number = [100, 500, 800];
const maxi = Math.max(...number);
console.log(maxi);
