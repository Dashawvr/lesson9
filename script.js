//
function firstStep(step) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let probably = Math.random() > .1;
            if(probably){
                resolve(step);
            } else {
                reject('Проспала!!!!!');
            }
        },2000)
    });
}

 function secondStep(step1) {
     console.log('Ням ням ням');
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let probably = Math.random() > .4;
            if(probably) {
                resolve(step1);
            }else {
                reject('No money no eat!');
            }
        },1000)
    });
 }
 function thirdStep(step2) {
     console.log('Погнали в палітєх!');
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let probably = Math.random() > .5;
            if(probably){
                resolve(step2);
            }else {
                reject('Лінь іти!!');
            }
        },3000)
    });
 }
 function fStep(step3) {
     console.log('Час вчитися!')
    return new Promise((resolve) => {
       setTimeout(()=> resolve(step3),2000)
    });
 }

 firstStep('My Day')
     .then (result =>{
    console.log(result);
    return secondStep('Eat somth');
    }
    )
     .then(result=> {
         console.log(result);
         return thirdStep('Way по сходах');
     })
     .then(result=> {
         console.log(result);
         return firstStep('Study Кайдана');
     })
     .then(result=>{
         console.log(result)})
     .catch(err=> console.log(err))




