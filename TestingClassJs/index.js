
//get some i/p and return sum of all argument 
function sum (...args){
    if (args.length === 0){
        return "No Argument Provided"
    }
    else if(args.length === 1){
        return "Needs one more argument"
    }
//     a = Number(a);
//     b = Number(b);
//    return a + b;
  
 const sumassionValue = [...args].reduce((acc, elem)=> acc + Number(elem), 0)
 return sumassionValue

} 

module.exports = sum; 
