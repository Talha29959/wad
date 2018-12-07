var acc_balance = document.getElementById("balance");
var acc_title = document.getElementById("title");
var acc_currency = document.getElementById("currency");
var acc_IBAN = document.getElementById("IBAN");
var acc_deposit = document.getElementById("deposit");
var acc_withdraw = document.getElementById("withdraw");

var info = {
    name : "Talha",
    balance : 3000000,
    currency : "PKR",
    IBAN : "PKN1234654321"
};

input_data();

function input_data()
{
    acc_title.innerText = info.name;
    acc_balance.value = info.balance;
    acc_balance.innerText = acc_balance.value;
    acc_currency.innerText = info.currency;
    acc_IBAN.innerText = info.IBAN;
}

function deposit()
{
    document.getElementById("deposit-msg").innerText = "";
    if(event.key === "Enter")
    {
        var data = parseInt(acc_deposit.value,10);
        if(data>0) {
            acc_balance.value += data;
            acc_balance.innerText = acc_balance.value;
            acc_deposit.value = "";
            var table_transaction = document.getElementById("transaction-table");
            table_transaction.innerHTML += '<tr>' +
                '<td>' + Date() + '</td>' +
                '<td>' + "Credit" + '</td>' +
                '<td>' + data + '</td>' +
                '</tr>';
        }
        else{
            var error_msg = document.getElementById("deposit-msg");
            error_msg.innerText = "Enter valid input";
        }

    }
}

function withdraw()
{
    document.getElementById("withdraw-msg").innerText = "";
    if(event.key === "Enter")
    {
        var data = parseInt(acc_withdraw.value,10);
        if(data <= acc_balance.value && data>0)
        {
            acc_balance.value = acc_balance.value - data;
            acc_balance.innerText = acc_balance.value;
            acc_withdraw.value = "";
            var table_transaction = document.getElementById("transaction-table");
            table_transaction.innerHTML+='<tr>' +
                '<td>'+Date()+'</td>' +
                '<td align="left" valign="middle" scope="col">'+"Debit"+'</td>' +
                '<td align="left" valign="middle" scope="col">'+data+'</td>' +
                '</tr>';
        }
        else
        {
            var error_msg = document.getElementById("withdraw-msg");
            error_msg.innerText = "Don't have sufficient amount in account!";
        }
    }
}
