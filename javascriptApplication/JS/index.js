document.addEventListener("DOMContentLoaded", function () {
    var addBtn = document.querySelector("#Add-btn");
    var modal = document.querySelector(".modal");
    var CloseBtn = document.querySelector(".close-icon");

    addBtn.onclick = function () {
        modal.classList.add("active");
    }
    CloseBtn.onclick = function () {
        modal.classList.remove("active");
    }

    var AllData = [];
    var Id = document.querySelector('#id');
    var name = document.querySelector('#Name');
    var lastName = document.querySelector('#LastName');
    var Email = document.querySelector('#Email');
    var Officecode = document.querySelector('#OfficeCode');
    var JobTitle = document.querySelector('#JobTitle');

    var Register = document.querySelector('#AddBtnRegister');
    var UpdateBtn = document.querySelector('#Update-btn'); // Select single button
    var Form = document.querySelector('#RegistrationForm');
    var table = document.querySelector('#MyTable');

    Register.onclick = function (e) {
        // e.preventDefault();
        registrationData();
        getData();

        CloseBtn.click();

    }

    if (localStorage.getItem("userData") !== null) {
        AllData = JSON.parse(localStorage.getItem("userData"));
    }

    function registrationData() {
        AllData.push({
            id: Id.value,
            name: name.value,
            Lastname: lastName.value,
            Email: Email.value,
            OfficeCode: Officecode.value,
            JobTitle: JobTitle.value,
            Profilepic: "../Image/2.jpg"
        });

        var StringUserdata = JSON.stringify(AllData);
        localStorage.setItem("userData", StringUserdata);
    }

    const getData = () => {
        table.innerHTML = ""; // Clearing the table before adding new rows
        AllData.forEach((data, index) => {
            table.innerHTML += `
                <tr id="${index}">
                    <td>${index + 1}</td>
                    <td><img src="${data.Profilepic}" height="40" width="40"></td>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.Lastname}</td>
                    <td>${data.Email}</td>
                    <td>${data.OfficeCode}</td>
                    <td>${data.JobTitle}</td>
                    <td>
                        <button class="Edit-btn"><i class="fa fa-eye"></i></button>
                        <button class="Del-btn"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>`;
        });

        var DeleteButton = document.querySelectorAll('.Del-btn');
        for (var i = 0; i < DeleteButton.length; i++) {
            DeleteButton[i].onclick = function () {
                var parent = this.parentElement.parentElement;
                var id = parent.getAttribute("id");
                AllData.splice(id, 1);
                parent.remove();
                localStorage.setItem("userData", JSON.stringify(AllData));
            }
        }

        var EditBtn = document.querySelectorAll('.Edit-btn');
        for (var i = 0; i < EditBtn.length; i++) {
            EditBtn[i].onclick = function () {
                var parent1 = this.parentElement.parentElement;
                var td = parent1.getElementsByTagName('td');
                var index = parent1.getAttribute("id");

                // Get values from table cells
                var IdValue = td[2].innerHTML;
                var nameValue = td[3].innerHTML;
                var lastNameValue = td[4].innerHTML;
                var EmailValue = td[5].innerHTML;
                var OfficeCodeValue = td[6].innerHTML;
                var JobTitleValue = td[7].innerHTML;

                // Set values to form fields
                Id.value = IdValue;
                name.value = nameValue;
                lastName.value = lastNameValue;
                Email.value = EmailValue;
                Officecode.value = OfficeCodeValue;
                JobTitle.value = JobTitleValue;

                // Open modal for editing
                modal.classList.add("active");
                Register.disabled = true;

                UpdateBtn.onclick = function (e) {
                    e.preventDefault();
                    AllData[index] = {
                        id: Id.value,
                        name: name.value,
                        Lastname: lastName.value,
                        Email: Email.value,
                        OfficeCode: Officecode.value,
                        JobTitle: JobTitle.value,
                        Profilepic: "../Image/2.jpg"
                    }
                    localStorage.setItem("userData", JSON.stringify(AllData));
                    getData(); // Update the table after updating the data
                    CloseBtn.click(); // Close the modal
                    Form.reset();

                }
            }
        }
    }

    getData(); // Call getData function initially to populate the table
});
