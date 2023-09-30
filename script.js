// task number one 

// let priceList = [30000, 2000, 11000, 33000, 2000, 100000,57000, 14000, 18000, 8000]

// let from = prompt('цена от')
// let up = prompt('цена до')

// let findedCars = priceList.filter(car_price => car_price >= from && car_price <= up)

// console.log(findedCars);


// task number two

// let students = ['baxtzod', 'islom', 'abdumanon', 'xojik', 'aziz'];
// let longest_name = '' // 0

// students.filter(item => {
//     if (item.length > longest_name.length) {
//         longest_name = item
//     }
// })

// console.log(longest_name);


// task number three

// let arr = [6, 2, 6, 6, 2, 5, 6, 2, 4, 6, 78, 8, 2, 23]
// let numbers = '' // '' всегда ровно 0

// arr.filter(item => {
//     if(item > numbers) {
//         numbers = item
//     }
// })

// console.log(numbers);


// task number four


// let arr = [6, 2, 6, 6, 2, 5, 6, 22, 4]
// let students = ['baxtzod', 'islom', 'Bobur', 'abdumanon', 'xojik', 'aziz', 'Далер', 'Алишер'];
// let sorted = students.sort((a, b) => a.length - b.length)


// let nums = [1, 2, 3, 4]

// let total = 0

// nums.filter(num => total += num)

// console.log(total);


// task number five

// Homework

// let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];

// let str = 0;
// let nums = 0;
// let others = 0;

// for (let element of arr) {
//     if (typeof element === 'string') {
//         str++;
//     } else if (typeof element === 'number') {
//         nums++;
//     } else {
//         others++;
//     }
// }

// console.log(`Strings element: ${str}`);
// console.log(`Numbers element: ${nums}`);
// console.log(`Others element: ${others}`);


// Classwork

// task number six


// let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];

// let str = 0;
// let nums = 0;
// let others = 0;


// let strLength = arr.filter(item => typeof (item) === 'string') // 10

// str = strLength.length

// let numLength = arr.filter(item => typeof (item) === 'number') // 20

// nums = numLength.length

// let othersLength = arr.filter(item => typeof (item) !== 'number' && typeof(item) !== 'string') // 30

// others = othersLength.length

// console.log(str, nums, others);

// arr.forEach(item => {
//     if (typeof (item) === 'string') {
//         str++ // привляет один
//     } else if (typeof (item) === 'number') {
//         nums++
//     } else {
//         others++
//     }
// })

// console.log({str});
// console.log({nums});
// console.log({others});


// task number seven


// let nums = [1, 2, 3, 4]

// let max = nums.reduce((prev, curr) => { 
//     if(prev > curr) {
//         return prev // return - верни
//     } else {
//         return curr
//     }
// })

// let min = nums.reduce((prev, curr) => {
//     if(prev < curr) {
//         return prev // return - верни
//     } else {
//         return curr
//     }
// })

// let total = nums.reduce((prev, curr) => prev + curr) // reduce - сокращать код // prev - предыдущий // curr - карр дальный моммент
// сложить цифры в массива исползуя редюс


// nums.forEach(item => total += item)


// console.log(max, min);


// task number eight


// Объект // Object


// let car = {
//     model: "malibu",
//     company: "gm",
//     type: "sedan",
//     wheels: 4,
//     color: "black",
//     price: 27000,
//     tech_password: {
//         year: 2017,
//         completation: "lt2",
//         engine: 2.4
//     },
//     colors: ["white", 'black', 'matoviy_black', 'pink'],
// }


// let user = {
//     about_me: {
//         name: "baxtzod",
//         surname: "rasulov",
//         age: 15,
//         birthay: "2008.03.05",
//     },
//     hobby: ["write code", "crete website", "collect cubik-rubik"],
//     games: [
//         "volleyball, football, basketball",
//     ],
//     about_my_family: {
//         father: "Sherzod",
//         mother: "Nasiba",
//         sisters: ["Mehribon, Marjona, Malika"],
//         grandmother: "Moira",
//         grandfather: "Yunus"
//     },
//     about_myself_personally: {
//         married: "nomarried",
//         programmer: "I love proggramming",
//         what_kind_of_cars_do_you_like: "Mercedes, Lamborghini"
//     }
// }

// console.log(user);


// const user = {
//     name: "Abdumanon", // name - key ключи Abdumanon - values значение
//     surname: "Adams",
//     age: "13",
//     ratio: {
//         height: 165,
//         weight: 54,
//     },
//     status: "married",
//     wifes: ["aziza", "gulpchapchap", "safir", "gulchexra"],
//     parents: {
//         otasi: "",
//         onasi: "",
//         akasi: "",
//         ukasi: "",
//         opasi: ""
//     },
//     full_name: function () {
//         return this.name + " " + this.surname
//     }
// }

// let password = {
//     serries: "AC",
//     number: 12315645,
//     born: "2010-03-26",
//     gender: "male",
// }


// Object.freeze(user) // sub zero
// Object.freeze(user.password)
// user.password.gender = "female"
// Object.keys(user) // достает все ключи из объекта и сохраняет в массив 
// Object.values(user) // достает все значения из объекта и сохраняет в массив 
// Object.entries(user) // достает все из объекта и сохраняет в массив [ [key, value], [key, value] ]
// let newObject = Object.assign({}, user, {password}, ) // Соеденяет обЪекты



// console.log(
//     newObject
// );

// console.log(
//     user.full_name()
// );

// let str = "hello"

// console.log(
//     str.toUpperCase()
// );

// Объект - нужен для того чтобы что-то описать

// Методы объект



//Дз

// task number nine

// 1. Создать два усложненых объекта
// 2. Соеденить в один новый объект не мутируя старые
// 3. Получить все ключи в новую переменную ключи
// 4. Получить все значении в новую переменную значения
// 5. Объеденить два полученных массива в одно целое
// 6. Отфилтировать все данные по их типу строки в строки цифры в цифры

// let types = {
//     string: [],
//     numbers: [],
//     Object: [],
//     boolean: []
// }


// Первый объект


// 1. Создать два усложненых объекта

let person = {
    firstName: "Baxtzod",
    lastName: "Rasulov",
    birthday: "2008-03-05",
    age: 15,
    address: {
        street: "Yangiobod",
        city: "Samarqand",
        state: "Uz",
        zip: 12345
    },
    phoneNumbers: [
        {
            type: "home",
            number: "88 922-04-55"
        },
    ],
    email: "rasulovbaxtzod@gmail.com"
};


// Второй объект
let phone = {
    make: "Xiaomi",
    model: "Xiaomi Redmi note 12 pro plus 5G",
    year: 2023,
    color: 'blue',
    features: {
        battery: "5000 mAh",
        charge: "120 W",
        memory: "256 GB",
        ram: "12+7 GB",
        cpu: "Dimensity 1080 Eight cores, max. 2.6GHz",
        version_android: 12,
        miui: "14.0.3",
        performance: "5G"
    },
    rear_camera: [
        {
            first_camera: "200mp",
            second_camera: "50mp",
            third_camera: "48mp",
            front_camera: "32mp"
        }
    ],
    sound: {
        dynamics: "Dolby Atmos",
        module: "NFC",
        smart_devices: "home"
    },
    price: '410$'
};



// 2. Соеденить в один новый объект не мутируя старые

let newObject = Object.assign({}, person, { phone },)

console.log(
    newObject
);



// 3. Получить все ключи в новую переменную ключи

let newObj = { ...person, ...phone };

let keys = Object.keys(newObj);

console.log(keys);



// 4. Получить все значении в новую переменную значения

let combinedArray = { ...person, ...phone };

let values = Object.values(combinedArray);

console.log(values);



// 5. Объеденить два полученных массива в одно целое

let merge_two_resulting_arrays = { ...person, ...phone };

let entries = Object.entries(merge_two_resulting_arrays);

console.log(entries);



// 6. Отфилтировать все данные по их типу строки в строки цифры в цифры


let filterObj = { ...person, ...phone };

let filteredObj = Object.entries(filterObj).reduce((acc, [key, value]) => {
    if (typeof value === 'string' && !isNaN(value)) {
        acc[key] = Number(value);
    } else if (typeof value === 'number') {
        acc[key] = value;
    } else {
        acc[key] = value;
    }
    return acc;
}, {});

console.log(filteredObj);