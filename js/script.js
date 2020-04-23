// // 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// let auto = {
//     manufacturer: 'Porsche',
//     model: 'Cayenne',
//     yearOfManufacture: 2019,
//     averageSpeed: [150, 'km/h']
// };

// function getInfo(obj){ // Функция для вывода на экран информации об автомобиле;
//     res = '';
//     for (i in obj){
//         res += (obj[i] + '\n');
//     } 
//     return res;
// }

// function getSpeed(distance, obj){ // Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
//     if (+distance){
//         console.log(typeof obj.averageSpeed[0])
//         return (5 * distance / (4 * obj.averageSpeed[0])); 
//     }else{
//         return console.error();
//     }
// }

// // 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// let fraction = {
//     numerator: 4,
//     denominator: 5
// }, fraction1 = {
//     numerator: 1,
//     denominator: 5
// };;

// function sum(obj1, obj2){
//     return ((obj1.numerator * obj2.denominator + obj2.numerator * obj1.denominator) / (obj1.denominator * obj2.denominator) );
// }

// function sub(obj1, obj2){
//     return ((obj1.numerator * obj2.denominator - obj2.numerator * obj1.denominator) / (obj1.denominator * obj2.denominator ));
// }

// function mul(obj1, obj2){
//     if(obj1.denominator !== obj2.denominator){
//     return ((obj1.numerator * obj2.numerator) / (obj1.denominator * obj2.denominator));
// } else{
//     return (obj1.numerator * obj2.numerator) / obj1.denominator;
// }
// }

// function division(obj1, obj2){
//     return ((obj1.numerator * obj2.denominator) / (obj1.denominator * obj2.numerator));
// }

// function isReduction(obj){
//     for(let i = 1; i <= obj.denominator; i++){
//         if(obj.numerator%i === 0 && obj.denominator%i === 0){
//             console.log(obj.denominator%i);
//             obj.numerator /= i;
//             obj.denominator /= i;
//         }
//     }
//     return obj;
// }

let time = {
    h: 6,
    m: 5,
    s: 30 
}

function getTime(time){
    if (time.h < 10){
        time.h = '0' + time.h;
    }
    if (time.m < 10){
        time.m = '0' + time.m;
    }
    if (time.s < 10){
        time.s = '0' + time.s;
    }
    return `${time.h}:${time.m}:${time.s}`;
}

function setSeconds(seconds, time){
    time.s += seconds;
    if(time.s > 60){
        while(time.s > 60){
            time.s -= 60;
            time.m++;
        }
    }
    return time;
}

function setMinutes(minutes, time){
    time.m += minutes;
    if(time.m > 59){
        while(time.m > 59){
            time.m-=60
            time.h++;
        }
    }
    return time;
}

function setHours(hours, time){
    time.h += hours;
    if(time.h > 24){
        while(time.h > 24){
            time.h -= 24;
        } 
    }
    return time;
}
