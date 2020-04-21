/// PROMISE
// turn on step by step...


function myDay(day) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let free = Math.random() >.3;
            if(free) {
                resolve(day);
            }else {
                reject('Overslept');
            }
        },2000);
    });
}

function secondStep(breakfast) {
    console.info('Eat!');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let free = Math.random() > .3;
            if(free){
                resolve(breakfast);
            }else {
                reject('Нема шо їсти');
            }
        }, 2000)
    });
}

function wayToPolitech(way) {
    console.log('way to work...');
    return new Promise(resolve => {
        setTimeout(() => resolve(way),2000)
    });
}

function workProsess(prosess) {
    console.info('work hard....');
    return new Promise(resolve => {
        setTimeout(() => resolve(prosess),3000)
    });
}

function coffeeTime(moreCoffee) {
    console.info('more coffee , more eat :)');
    return new Promise(resolve => {
        setTimeout(() => resolve(moreCoffee), 1000)
    });
}
function wayToHome(campus) {
    console.log('Home sweet home!!')
    return new Promise((resolve) => {
        setTimeout(()=> {resolve(campus);},2000)
    })
}
function relaxTime(relax) {
    return new Promise(resolve =>
    setTimeout(()=>{resolve(relax);},3000))
}

myDay('Hell day ')
    .then(result => {
        console.log(result);
        return secondStep('coffee with sandwich ;)')
    })
    .then(result => {
        console.log(result);
        return wayToPolitech('Going to politech up the stairs>>>')
    })
    .then(result => {
        console.log(result);
        return workProsess('Study programming!')
    })
    .then(res => {
        console.log(res);
        return coffeeTime('Ням ням ням...')
    })
    .then( res => {
        console.log(res);
        return wayToHome('My lovely 5th hostel')
    })
    .then( res => {
        console.log(res);
        return relaxTime('More sleeep (zzzzz)')
    })
    .then(r => {
        console.log(r);
    })
    .catch(error => console.error(error));

////
//// CALLBACK HELL
////



// function myDay(isWorkDay, cb) {
//     setTimeout(() => {
//         if (isWorkDay) {
//             cb(null, 'OHHH HELLL')
//         } else {
//             cb('I sleep')
//         }
//     }, 2000)
// }
//
// function haveBreakfast(isEat, cb) {
//     setTimeout(() => {
//         if (isEat) {
//             cb(null, 'Eeeeeat :)')
//         } else {
//             cb('Нема грошей нема їжі')
//         }
//     }, 2000)
// }
//
// function goOnShody( badday, cb) {
//     setTimeout(() => {
//         if (badday >=3) {
//             cb(null, 'О  ранкова зарядочка')
//         }else {
//             cb('Oh my God, знову ремонтуюють сходи.. іду по болоту(')
//         }
//     }, 3000)
// }
//
// function goToHome(Klimash,cb) {
//     setTimeout(()=> {
//        if (!Klimash){
//            console.log( 'ураа нарешті додому...')
//        }else {
//            console.log('Ohhh my God....буду сидіти до ранку тут')
//        }
//     },2000)
// }
//
//
// myDay(true, (err, data) => {
//     if (err) {
//         console.log(err, 'myDay');
//     } else {
//         console.log(data);
//         haveBreakfast(true, (err, data) => {
//             if (err) {
//                 console.log(err, 'breakfast');
//             } else {
//                 console.log(data);
//                 goOnShody( 5,(err, data) => {
//                     if (err) {
//                         console.log(err, 'Marsh');
//                     } else {
//                         console.log(data);
//                         goToHome(true,(err,data)=> {
//                             if(err) {
//                                 console.log(err,'Сиди вчися!')
//                             }else {
//                                 console.log(data);
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// });


