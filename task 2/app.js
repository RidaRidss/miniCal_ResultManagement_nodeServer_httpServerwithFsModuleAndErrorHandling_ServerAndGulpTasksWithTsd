function Save() {
    var sno = 0;
    var a;
    var tableData = [];
    var table;
    sno += 1;
    a = document.getElementById('resultDiv');
    a.style.display = "Block";
    tableData = [document.createElement("td"), document.createElement("td"), document.createElement("td")];
    var tableRow = document.createElement('tr');
    table = document.getElementById("student");
    table.appendChild(tableRow);
    tableRow.appendChild(tableData[0]);
    tableRow.appendChild(tableData[1]);
    tableRow.appendChild(tableData[2]);
    tableData[0].innerHTML = sno;
    if (document.getElementById('n')['value'] == '' || document.getElementById('n')['value'] == ' ') {
        var nameValue = "Null value";
        alert("error : Please Check Your Ist Input Value \n  Check Error In Below Table");
        tableData[1].innerHTML = nameValue;
    }
    else if (document.getElementById('n')['value'] == Number(document.getElementById('n')['value'])) {
        var nameValue_1 = "Invalid Name";
        alert("error : Please Check Your Ist Value \n Check Error In Below Table");
        tableData[1].innerHTML = nameValue_1;
    }
    else {
        tableData[1].innerHTML = document.getElementById('n')['value'];
    }
    if (document.getElementById('a')['value'] == '' || document.getElementById('a')['value'] == ' ') {
        var idValue = "Null value";
        alert("error : Please Check Your 2nd Value \n Check Error In Below Table");
        tableData[2].innerHTML = idValue;
    }
    else if (document.getElementById('a')['value'] != Number(document.getElementById('a')['value'])) {
        var idValue = "Invalid Id";
        alert("error : Please Check Your 2nd Value \n  Check Error In Below Table");
        tableData[2].innerHTML = idValue;
    }
    else {
        tableData[2].innerHTML = document.getElementById('a')['value'];
    }
}
