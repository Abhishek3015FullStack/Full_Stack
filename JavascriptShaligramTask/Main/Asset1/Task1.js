document.addEventListener("DOMContentLoaded", function () {
        
    var addButtons = document.querySelectorAll('.Add');
    var deleteButtons = document.querySelectorAll('.Delete');
    var getValuesButton = document.getElementById('getValues');

    addButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var newRow = document.createElement('tr');
            var tableBody = document.querySelector('#tableMy tbody');
            var cells = [
                '<td><input type="text" class="form-control"></td>',
                '<td><input type="text" class="form-control"></td>',
                '<td><input type="month" class="form-control" placeholder="MM-YY"></td>',
                '<td><input type="month" class="form-control" placeholder="MM-YY"></td>',
                '<td><input type="text" class="form-control"></td>',
                '<td><input type="text" class="form-control"></td>',
                '<td><button class="Delete" style="background-color: black; padding:0px 05px 0px 5px;border-radius:18px "><i class="fa-solid fa-minus" style="color:white"></i></button></td>'
            ];

            newRow.innerHTML = cells.join('');
            tableBody.insertBefore(newRow, tableBody.children[2]);




            var deleteButton = newRow.querySelector('.Delete');
            deleteButton.addEventListener('click', function () {
                newRow.remove();
            });


        });
    });

    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {

            this.closest('tr').remove();
        });
    });

    getValuesButton.addEventListener('click', function () {


        var rowData = [];
        var tableRows = document.querySelectorAll('#tableMy tbody tr');

        tableRows.forEach(function (row) {
            var rowDataItem = {};
            var inputs = row.querySelectorAll('input');
            var fieldNames = ["Degree/board", "School/College", "Start date", "Passout year", "Percentage", "backLog"];

            inputs.forEach(function (input, index) {
                var value = input.value;
                var fieldName = fieldNames[index];
                rowDataItem[fieldName] = value;
            });

            rowData.push(rowDataItem);
        });
        var jsonData = JSON.stringify(rowData);
        console.log(jsonData );
        // console.log(rowData);

        var FirstName = document.getElementById('FirstName').value;
        var LastName = document.getElementById('LastName').value;
        var DateOfBirth = document.getElementById('DateOfBirth').value;
        var Email = document.getElementById('Email').value;
        var Address = document.getElementById('Address').value;
        var GraduationYear = document.getElementById('GraduationYear').value;

        var newRow = document.createElement('tr');
        var cells = [
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td'),
            document.createElement('td')
        ];


        cells[0].textContent = FirstName;
        cells[1].textContent = LastName;
        cells[2].textContent = DateOfBirth;
        cells[3].textContent = Email;
        cells[4].textContent = Address;
        cells[5].textContent = GraduationYear;


        cells.forEach(function (cell) {
            newRow.appendChild(cell);
        });


        document.getElementById('MySecondTable').querySelector('tbody').appendChild(newRow);
    });
});

function changeInputType(input, type) {
    input.type = type;
}

function showData() {
    
}