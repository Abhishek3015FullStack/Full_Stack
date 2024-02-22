

$(document).ready(function () {
    $('#tableMy').on('click', ".Add", function () {
        var newRow = $('<tr>').insertAfter($('#tableMy tbody tr:nth-child(2)'));
        newRow.append('<td><input type="text" class="form-control"></td>');
        newRow.append('<td><input type="text" class="form-control"></td>');
        newRow.append('<td><input type="text" class="form-control" onfocus="this.type=\'month\'" placeholder="MM-YY" ></td>');
        newRow.append('<td><input type="text" class="form-control" onfocus="this.type=\'month\'" placeholder="MM-YY"></td>');
        newRow.append('<td><input type="text" class="form-control"></td>');
        newRow.append('<td><input type="text" class="form-control"></td>');
        newRow.append('<td><button class="Delete" style="background-color: black;"><i class="fa-solid fa-minus" style="color:white"></i></button></td>');
    });

    $('#tableMy').on('click', '.Delete', function () {
        $(this).closest('tr').remove();
    });

    $('#getValues').click(function () {
        var rowData = [];
       
        $('#tableMy tbody tr').each(function () {
            var row = {};
            $(this).find('input').each(function () {

                var fieldName = $(this).closest('td').prevAll().length;

                if (fieldName == 0) {
                    fieldName = "Degree/board";
                }
                else if (fieldName == 1) {
                    fieldName = "School/College";
                }

                else if (fieldName == 2) {
                    fieldName = "Start date";
                }

                else if (fieldName == 3) {
                    fieldName = "Passout year";
                }
                else if (fieldName == 4) {
                    fieldName = "Percentage";
                }
                else if (fieldName == 5) {
                    fieldName = "backLog";
                }

                var value = $(this).val();

                row[fieldName] = value;
            });
            rowData.push(row);
        });
        console.log(rowData);

        var FirstName = $('#FirstName').val();
        var LastName = $('#LastName').val();
        var DateOfBirth = $('#DateOfBirth').val();
        var Email = $('#Email').val();
        var Address = $('#Address').val();
        var GraduationYear = $('#GraduationYear').val();

        var Row = "<tr><td>" + FirstName + "</td>" + "<td>" + LastName + "</td>" + "<td>" + DateOfBirth + "</td>" + "<td>" + Email + "</td>" + "<td>" + Address + "</td>" + "<td>" + GraduationYear + "</td></tr>"
        $('#MySecondTable tbody').append(Row);

        
    });

    function DatepiCKer() {

    };



});
