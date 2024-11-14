This is a simple task tracker application built using HTML, CSS, and JavaScript. It allows users to:

Add new tasks: Users can enter a task description in the input field and press Enter or click the "↵" button to create a new task.
Mark tasks as complete/incomplete: Users can toggle the completion status of a task by clicking the checkbox next to it. Completed tasks are moved to the bottom of the list and have a strikethrough style.
Delete tasks: Users can delete a task by clicking the trash can icon next to it.

Features

Dynamic Task List: The task list is generated and updated dynamically using JavaScript. When a new task is added, deleted, or marked as complete/incomplete, the list is re-rendered to reflect the changes.
Sorting: Completed tasks are automatically moved to the bottom of the list, and the list is sorted to show incomplete tasks first.
Responsive Design: The application is designed to be responsive and will work well on different screen sizes.

Usage

Open the task-tracker.html file in a web browser.
Type a task description in the input field and press Enter or click the "↵" button to add a new task.
Click the checkbox next to a task to mark it as complete or incomplete.
Click the trash can icon next to a task to delete it.

Code Structure
The application consists of the following main components:

HTML Structure: The HTML file sets up the basic layout and structure of the application, including the input field, task list, and buttons.
CSS Styling: The CSS file defines the styles for the various elements of the application, such as the task list items, completed tasks, and buttons.
JavaScript Functionality: The JavaScript code handles the following tasks:

Storing the tasks in an array of objects
Adding new tasks
Deleting tasks
Toggling the completion status of tasks
Rendering the task list

The renderTasks() function is responsible for updating the DOM to display the current state of the task list.

Project URL - https://github.com/Atul1307/instahyre_assignment
