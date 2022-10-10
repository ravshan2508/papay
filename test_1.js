let numbers = [2, 34, 1, 34, 54, 4, 109, 45, 999, 5, 23];

length = numbers.length;

let new_numbers = [];


while (length > 0) {
    new_numbers.push(numbers[length-1]);
    length -=1;
} 

console.log('given array:',numbers, 'reversed array:',new_numbers);


/*Arrayni teskari holatga keltirish*/
