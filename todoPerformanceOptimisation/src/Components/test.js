
const memoFun = (func)=>{
    const cache = {};

    return (input)=>{
        return cache[input] || (cache[input] = func(input))
    }
} 

const fib = memoFun ((n)=>{
    if( n <= 1)
    {
        return n;
    }

    return fib(n - 1) + fib(n-2)
}); 

console.time("t1")
console.log(fib(100))
console.timeEnd("t1")