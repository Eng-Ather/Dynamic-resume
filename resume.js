document.addEventListener('DOMContentLoaded', function () {
    var editButton = document.getElementById('edit-button');
    // Elements to toggle editability
    var elementsToEdit = [
        document.getElementById('name'),
        document.getElementById('education-list'),
        document.getElementById('qualification-list'),
        document.getElementById('skills-list')
    ];
    // Function to toggle editability
    var toggleEditMode = function () {
        var isEditing = elementsToEdit[0].isContentEditable;
        if (isEditing) {
            // Save the edited content
            elementsToEdit.forEach(function (element) {
                element.contentEditable = 'false';
            });
            editButton.textContent = 'Edit'; // Change button text to "Edit"
        }
        else {
            // Make elements editable
            elementsToEdit.forEach(function (element) {
                element.contentEditable = 'true';
            });
            editButton.textContent = 'Save'; // Change button text to "Save"
        }
    };
    // Add event listener to the edit button
    editButton.addEventListener('click', toggleEditMode);
});
