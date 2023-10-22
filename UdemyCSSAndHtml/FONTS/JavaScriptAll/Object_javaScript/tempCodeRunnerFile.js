function bankDeposit()
{
    var currentBalance=100;
    let deposit=function(DepositAmount)
    {
        currentBalance= currentBalance+DepositAmount;
        return `the balance of the curremnt is ${currentBalance}`;
    }
    return deposit();
}


let ba = bankDeposit();
console.log(ba(1000));
