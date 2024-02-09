var SelectedRow = null;
function OnFormSubmit(event)
{
    event.preventDefault();
    if(SelectedRow==null)
    {
        var Fromdata = readFormData();
        InsertData(FormData)
    }
    else
    {

    }
}

function readFormData()
{
    var Product= {}
    Product["Product_Id"] = document.getElementById("Product_Id").value;
    Product["Product_Name"] = document.getElementById("Product_Name").value;
    Product["Product_price"] = document.getElementById("Product_price").value;
    return Product;
}

function InsertData(data)
{
    var table = document.getElementById("AllList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Product_Id;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Product_Name;

    var cell3  = newRow.insertCell(2);
    cell3.innerHTML = data.Product_price;


    var cell4  = newRow.insertCell(3);
    cell4.innerHTML = '<button>Edit</button> <button>Delete</button>';

}