function funksiya (my_arr,my_str) {
    new_array=[];
    let index=0;
    while (index < my_arr.length) {
    if (my_arr[index] != my_str) {
        new_array.push(my_arr[index]);
        
    } else { my_arr.splice(index,0);
        
    };
    index +=1; };
    console.log(new_array);
}

funksiya(['apple','iphone','samsung','note','ipad'],'iphone');

/* Shunday function yasang, unga ikkita argument kiritilsin, biri array ikkinchisi string.
 Bu function bizga usha ikkinchida kiritilgan argumentdan (yani string variable) tashqari qiymatlarni qaytarsin*/