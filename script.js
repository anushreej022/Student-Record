var table = document.getElementById("myTable");
var noOfRows = table.rows.length;
var submitBtn = document.getElementById("button");


//function will be called when page loads
function startOnLoad() {
  var extraDetails = document.getElementsByClassName('dropDownTextArea');
  for (i = 0; i < extraDetails.length; i++) {
    extraDetails[i].style.display = 'none';
  }

  // Hiding the delete and edit buttons by default
  table.rows[0].cells[8].style.display = "none";
  table.rows[0].cells[9].style.display = "none";

  for (i = 1; i < table.rows.length; i += 2) {
    table.rows[i].cells[8].style.display = "none";
    table.rows[i].cells[9].style.display = "none";
  }

  // Submit button grayed out by default
  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = "gray";
}


//Function to be called when page loads
function addNewRow() {
  var tableBody = table.tBodies.item(0);
  var newRow = document.createElement('tr');
  newRow.classList.add('dropDownTextArea');

  // Calculate the new student number
  var newStudentNumber = Math.ceil(table.rows.length / 2);

  //add new row of student details
  var noOfRows = table.rows.length;
  noOfRows = noOfRows / 2;
  noOfRows = Math.round(noOfRows);
  console.log(noOfRows);
  var tableBody = table.tBodies.item(0);
  var newRow = document.createElement('tr');
  newRow.class = 'dropDownTextArea';
  var newCell = document.createElement('td');
  var checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.setAttribute('onclick', 'checkClick(this)');
  newCell.appendChild(checkBox);
  var newBreak = document.createElement('br');
  newCell.appendChild(newBreak);
  newBreak = document.createElement('br');
  newCell.appendChild(newBreak);
  newCell.append(newBreak);
  var downImg = document.createElement('img');
  downImg.src = 'down.png';
  downImg.setAttribute('width', '25px');
  downImg.setAttribute('onclick', 'reveal(this)');
  newCell.appendChild(downImg);
  newRow.appendChild(newCell);

  newCell = document.createElement('td');
  var txt = document.createTextNode('Student ' + (noOfRows));
  newCell.appendChild(txt);
  newRow.appendChild(newCell);

  newCell = document.createElement('td');
  txt = document.createTextNode('Teacher ' + (noOfRows));
  newCell.appendChild(txt);
  newRow.appendChild(newCell);

  newCell = document.createElement('td');
  txt = document.createTextNode('Approved');
  newCell.appendChild(txt);
  newRow.appendChild(newCell);

  newCell = document.createElement('td');
  txt = document.createTextNode('Fall');
  newCell.appendChild(txt);
  newRow.appendChild(newCell);

  newCell = document.createElement('td');
  txt = document.createTextNode('TA');
  newCell.appendChild(txt);
  newRow.appendChild(newCell);

  newCell = document.createElement('td');
  txt = document.createTextNode('23456');
  newCell.appendChild(txt);
  newRow.appendChild(newCell);

  newCell = document.createElement('td');
  txt = document.createTextNode('100%');
  newCell.appendChild(txt);
  newRow.appendChild(newCell);

  newCell = document.createElement('td');
  var btn = document.createElement('button');
  btn.setAttribute('onclick', 'deleteCell(this)');
  newCell.setAttribute('style', 'display: none;');
  txt = document.createTextNode('Delete');
  btn.appendChild(txt);
  newCell.appendChild(btn);
  newRow.appendChild(newCell);

  newCell = document.createElement('td');
  var btn = document.createElement('button');
  btn.setAttribute('onclick', 'editCell(this)');
  newCell.setAttribute('style', 'display: none;');
  txt = document.createTextNode('Edit');
  btn.appendChild(txt);
  newCell.appendChild(btn);
  newRow.appendChild(newCell);

  newRow.appendChild(newCell);
  tableBody.appendChild(newRow);
  table.appendChild(tableBody);


  //add extra details row
  var newRow = document.createElement('tr');
  newRow.setAttribute('class', 'dropDownTextArea');

  //row should remain hidden by default
  newRow.setAttribute('style', 'display: none;');
  newCell = document.createElement('td');
  newCell.setAttribute('colspan', '8');

  txt = document.createTextNode("Advisor:");
  newCell.appendChild(txt);
  newBreak = document.createElement('br');
  newCell.appendChild(newBreak);
  newBreak = document.createElement('br');
  newCell.appendChild(newBreak);

  txt = document.createTextNode("Award Details:");
  newCell.appendChild(txt);
  newBreak = document.createElement('br');
  newCell.appendChild(newBreak);

  txt = document.createTextNode("Summer 1-2014(TA)");
  newCell.appendChild(txt);
  newBreak = document.createElement('br');
  newCell.appendChild(newBreak);

  txt = document.createTextNode("Budget Number:");
  newCell.appendChild(txt);
  newBreak = document.createElement('br');
  newCell.appendChild(newBreak);

  txt = document.createTextNode("Tuition Number:");
  newCell.appendChild(txt);
  newBreak = document.createElement('br');
  newCell.appendChild(newBreak);

  txt = document.createTextNode("Comments");
  newCell.appendChild(txt);
  newBreak = document.createElement('br');
  newCell.appendChild(newBreak);
  newBreak = document.createElement('br');
  newCell.appendChild(newBreak);
  newBreak = document.createElement('br');
  newCell.appendChild(newBreak);

  txt = document.createTextNode("Award Status:");
  newCell.appendChild(txt);
  newBreak = document.createElement('br');
  newCell.appendChild(newBreak);
  newBreak = document.createElement('br');
  newCell.appendChild(newBreak);
  newBreak = document.createElement('br');
  newCell.appendChild(newBreak);


  newRow.appendChild(newCell);
  tableBody.appendChild(newRow);
  table.appendChild(tableBody);

  // Check if the new row is added successfully
  if (table.contains(newRow)) {
    alert("Student " + (noOfRows) + " record added successfully!!");
  } else {
    alert("Error adding new row. Please try again.");
  }
}

// Function to delete a student row
function deleteCell(toDel) {
  let dl = toDel.parentNode.parentNode.parentNode;
  var studNo = Math.round(toDel.parentNode.parentNode.rowIndex / 2);

  // Adjust the student and teacher numbers for subsequent rows
  for (var i = toDel.parentNode.parentNode.rowIndex + 2; i < dl.rows.length; i += 2) {
    var currentStudentNumber = Math.round(i / 2);
    dl.rows[i].cells[1].innerHTML = 'Student ' + (currentStudentNumber - 1);
    dl.rows[i].cells[2].innerHTML = 'Teacher ' + (currentStudentNumber - 1);
  }

  // Remove the rows
  dl.removeChild(toDel.parentNode.parentNode.nextElementSibling);
  dl.removeChild(toDel.parentNode.parentNode);

  // Alert the user about the deletion
  alert("Record of student Student " + Math.round(studNo) + " deleted successfully!!");
  checkBoxClick();
}

//this function will run when any checkbox is clicked
function checkClick(rowCheckBox) {
  var index = rowCheckBox.parentNode.parentNode.rowIndex;
  checkBoxClick();
  if (rowCheckBox.clicked) {
    var tbl = document.getElementById("myTable");
    tbl.rows[index].cells[8].style.display = "none";
    tbl.rows[index].cells[9].style.display = "none";
    rowCheckBox.clicked = false;
    rowCheckBox.parentNode.parentNode.style.backgroundColor = "white"
  }
  else {
    table.rows[index].cells[8].style.display = "";
    table.rows[index].cells[9].style.display = "";
    rowCheckBox.clicked = true;
    rowCheckBox.parentNode.parentNode.style.backgroundColor = "yellow";
  }
}

//function to check if all checkboxes are clicked
function checkBoxClick() {
  var checkboxes = document.getElementsByTagName("input");
  for (i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      table.rows[0].cells[8].style.display = "";
      table.rows[0].cells[9].style.display = "";
      submitBtn.disabled = false;
      submitBtn.style.backgroundColor = "orange";
      return;
    }
  }
  table.rows[0].cells[8].style.display = "none";
  table.rows[0].cells[9].style.display = "none";
  submitBtn.style.backgroundColor = "gray";
  submitBtn.disabled = true;
}



//function will be called when green arrow is clicked
function reveal(details) {
  var ind = details.parentNode.parentNode.rowIndex;
  if (table.rows[ind + 1].style.display == 'table-row') {
    table.rows[ind + 1].style.display = 'none';
  }
  else {
    table.rows[ind + 1].style.display = 'table-row';
  }

}

function editCell() {
  var customPromptOverlay = document.getElementById('customPromptOverlay');
  customPromptOverlay.style.display = 'flex';
}


// Function to handle the "Update" button click
function updateDetails() {
  var input = document.getElementById('editInput').value;

  // Close the custom prompt
  closeCustomPrompt();

  // Display success message
  alert("Student data updated successfully!!");
}

// Function to handle the "Cancel" button click
function cancelEdit() {
  // Close the custom prompt
  closeCustomPrompt();
}

// Function to close the custom prompt
function closeCustomPrompt() {
  var customPromptOverlay = document.getElementById('customPromptOverlay');
  customPromptOverlay.style.display = 'none';
}
/*//function for edit button prompt
function editCell(details) {
  console.log(details);
  prompt("Edit the details");
  
}*/
 
