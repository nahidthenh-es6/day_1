// Arrow Function

const sum = (a, b) => {
    const x = a + b;
    const y = a - b;
    return y, x;
};

// console.log(sum(112, 10)); 

// Truthy / falsy value ----------------------
let a = 0;

if (a) {
    // console.log('Truthy Value');
} else {
    // console.log('false Value');
}

// Ternary Operator -------------------------------
//  if age less then 10 type should be 'Child'
//  if age 18+ type should be 'Adult'
//  if age 30+ then type shuld be ' You are Old'

const age = 31;

const type = (age >= 18 && age <= 30) ? 'Type is adult' : age <= 10 ? 'Type is Child' : 'You Are Old'

console.log(type);