            /*   Birinchi usul */



function Mitguruh (my_arr,my_str) {
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

Mitguruh(['shawn','david','oscar','leo','ravshan','john'],'shawn','john');




/***************          ikkinchi usul                           ****** */


/*
const names = ['shawn','david','oscar','leo','ravshan','john'];
const del_name1 ='shawn';
const del_name2 ='john';

const result = names.filter(name =>name != del_name1 && name != del_name2);

console.log(result);*/


/* darsdagi vazifa */