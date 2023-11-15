var a = [1,2,3,4,5,6,7,8,9,10];

var b  = function()
{
    console.log("Ambe Mataji");
}(); //calling and create the without the calling the b variable 

var c = () =>
{
    for(var d of a)
    {
        if(d>=5)
        {
            console.log(`${d} this is the value`);
        }
    }

}
c(); // after create the  calling the element SSS


var e  = function()
{
    console.log("Ambe Mataji 1");
};

(function()
{
        console.log("Abhishek is error");
})(); // this is another type of the function calling 