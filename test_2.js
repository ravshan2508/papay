let numbers = [1,2,3,4,5,6,7,8,9,10];

let toq_sonlar =[];
let juft_sonlar =[];

let index=0;
while (index < 10) {
    if (numbers[index]%2 == 0) {
        juft_sonlar.push(numbers[index]);
    } else {
        toq_sonlar.push(numbers[index]);
    };
    index +=1;
};
console.log('toq sonlar:',toq_sonlar, 'juft sonlar:', juft_sonlar);

/* 1 ~ 10 gacha bogan sonlarni juft va toq sonlarga ajratish  */