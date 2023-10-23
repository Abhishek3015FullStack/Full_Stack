function bankDeposit()
{
     var currentBalance=100;
    let deposit = function (DepositAmount)
    {
        currentBalance= currentBalance+DepositAmount;
        return `the balance of the curremnt is ${currentBalance}`;
    }
    return deposit;
}


let ba = bankDeposit();
console.log(ba(1000));

//practice

var subject = function()
{
    var fees =20;
    var paid= function(paid_amount)
    {
        fees  = fees+paid_amount;
        return fees;
    }
    var debate=function(debate_amount)
    {
        fees = fees-debate_amount;
        return fees;
    }
    return {paid,debate};
}

let valid = subject();
console.log(valid.paid(5));

console.log(valid.debate(25));















