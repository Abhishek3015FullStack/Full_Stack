function Curry(a)
{
     return function(b)
     {
        return function(c)
        {
            let result =  a*b*c;
            return result;
        };
     };
};

let d = Curry(10);
let e = d(20);
let f = e(30);
console.log(f);
