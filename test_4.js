const user = {
    insertUser (name,password) {
        if (name.length>3 && password.length>3) {
            console.log(`Welcome ${name}`);
        } else if (name.length<4 && password.length<4) {
            console.log('Ism va parol 4 ta dan kam bo\'lishi mumkin emas');
        } else if (name.length >3 && password.length<4) {
            console.log('Parol 4 ta dan kam bo\'lishi mumkin emas');
        } else if (name.length <4 && password.length>3) {
            console.log('Ism 4 ta dan kam bo\'lishi mumkin emas');
        }
}
}

user.insertUser('bobur','jjlkjlk54s6d26');

/*  bitta object hosil qilinsin va insertUser() methodi bolsin,
 u yerga name, password parametrlarini qabul qilsin. 
 agar name yoki passwordni uzunligi 4 tadan kam bolsa qabul qilmasin va
  errorni consolega chiqarsin agar 4 tadan ko’p bo’lsa xush kelibsiz <ismi> ni chiqarsin*/