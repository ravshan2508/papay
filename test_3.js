let array =['postman','mongodb',1,null,2,3,null,'nodjs'];
let new_array = [];

let index=0;
while (index < array.length) {
    if (array[index]) {
        new_array.push(array[index]);
        
    } else {
        
    };
    index +=1;
};
console.log(new_array);


function delete_same_value (myarray,mystring) {
    new_array=[];
    let index=0;
    while (index < myarray.length) {
    if (myarray[index] != mystring) {
        new_array.push(myarray[index]);
        
    } else {
        
    };
    index +=1;
};
console.log(new_array);
}

delete_same_value([4,5,89,6,5,8,'hi','nodjs'],'hi');


/* array hosil qiling arrayni ichidagi qiymatlarda bosh qiymat ham bolsin (null)
 va agar bosh qiymatlar bolsa ularni delete qiilib qiymati bor arrayni qaytarsin*/