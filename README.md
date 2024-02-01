# Student Management System

## Overview

This project is a simple Student Management System implemented using HTML, CSS, and JavaScript. It provides basic functionalities for adding, deleting, and editing student records in a tabular format. The system also includes features such as checkbox selection, displaying additional details for each student, and a custom prompt for editing records.

## Key Functions

1. **addNewRow()**
   - Adds a new row to the table representing a student record.
   - Generates a unique student number and updates the table with the new record.
   - Displays a success message or an error message if the addition fails.

2. **deleteCell(toDel)**
   - Deletes a student record from the table.
   - Adjusts the student and teacher numbers for subsequent rows.
   - Alerts the user about the successful deletion.

3. **checkClick(rowCheckBox)**
   - Called when any checkbox is clicked.
   - Manages the visibility of delete and edit buttons based on checkbox selection.

4. **reveal(details)**
   - Displays or hides additional details (extra row) for a selected student.

5. **editCell(editButton)**
   - Initiates the editing process by displaying a custom prompt overlay.
   - Shows the entire records of the selected row within the prompt.

6. **updateDetails()**
   - Handles the "Update" button click in the custom prompt overlay.
   - Alerts the user about the successful update.

7. **cancelEdit()**
   - Handles the "Cancel" button click in the custom prompt overlay.
   - Closes the custom prompt overlay.

8. **closeCustomPrompt()**
   - Closes the custom prompt overlay.

## How to Use

Simply include the provided HTML, CSS, and JavaScript code in your project. The system should work in any modern web browser. To add a new student record, delete a record, or edit a record, follow the corresponding functions mentioned in the code. The system also includes visual feedback and error alerts for ease of use.
