// code your solution here
function saturdayFun(T){
    if (T){
        return "This Saturday, I want to bathe my dog!"
    }
    else {
        return "This Saturday, I want to roller-skate!"
    }
}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));

function mondayWork(T){
    if (T) {
        return "This Monday, I will work from home."
    }
    else {
        return "This Monday, I will go to the office."
    }
}
console.log(mondayWork());
console.log(mondayWork("work from home"));

// function wrapAdjective(wrapper) {
//     let adjective = '';
//    if (wrapper ==='*'){
//                 adjective = 'you are a hard worker!' 
//             }
//             else {
//                 adjective = 'you are a dedicated programmer!'      
//             }
//             return adjective
// }
// let result = wrapAdjective();
//     let amphetic = function result(adjective){
            
      
    
    
    
    
      
//     let para = `You are ${result}${adjective}${result}!`;
//     return para
//     }

function wrapAdjective(str){
    return function(sentence){
        return `You are ${str}${sentence}${str}!`
    }
}


console.log(wrapAdjective('*'));
console.log(wrapAdjective('||'));

