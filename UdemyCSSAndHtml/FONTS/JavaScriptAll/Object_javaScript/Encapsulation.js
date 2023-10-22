var BankAccountFunction = function()
{
    var account_balance =100;
    let deposit = function (deposit_amount)
    {   
        account_balance=account_balance+deposit_amount;
        return `the account after deposit is ${account_balance}`;
    }
    let withdraw = function(withdraw_amount)
    {
        account_balance= account_balance-withdraw_amount;
        return `after teh withdraw the balance is ${account_balance}`;
    }
    return {deposit,withdraw}

};


let op= BankAccountFunction();
console.log( op.deposit(110));


