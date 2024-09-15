// script.ts

document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.getElementById('edit-button') as HTMLButtonElement;

    // Elements to toggle editability
    const elementsToEdit = [
        document.getElementById('name') as HTMLElement,
        document.getElementById('education-list') as HTMLElement,
        document.getElementById('qualification-list') as HTMLElement,
        document.getElementById('skills-list') as HTMLElement
    ];

    // Function to toggle editability
    const toggleEditMode = () => {
        const isEditing = elementsToEdit[0].isContentEditable;

        if (isEditing) {
            // Save the edited content
            elementsToEdit.forEach(element => {
                element.contentEditable = 'false';
            });
            editButton.textContent = 'Edit'; // Change button text to "Edit"
        } else {
            // Make elements editable
            elementsToEdit.forEach(element => {
                element.contentEditable = 'true';
            });
            editButton.textContent = 'Save'; // Change button text to "Save"
        }
    };

    // Add event listener to the edit button
    editButton.addEventListener('click', toggleEditMode);
});
