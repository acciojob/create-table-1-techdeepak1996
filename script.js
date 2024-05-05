function insert_Row() {
    // Retrieve a reference to the table
    var table = document.getElementById('sampleTable');

    // Create a new row
    var newRow = table.insertRow();

    // Create cell elements and set their content
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = 'New Cell 1';

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = 'New Cell 2';
}