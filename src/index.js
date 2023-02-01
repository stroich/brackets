module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map(element=>{
        return element[0]+element[1];
    })
    let stack = [];
    for (let i=0; i<str.length; i++){
        if (bracketsConfig.map(element=>element[0]).includes(str[i])){
            if(stack[stack.length-1]===str[i] && ['7','8','|'].includes(str[i])){
                stack.pop()
            }else {
                stack.push(str[i]);
            }
        }else {
            if (stack.length===0){
                return false;
            }
            let config = `${stack[stack.length-1]}${str[i]}`;
            if(brackets.includes(config)){
                stack.pop()
            }else{
                return false
            }

        }
    }
    if (stack.length===0){
        return true;
    }else {
        return false
    }
}
