
let details = document.querySelectorAll('.details');

details.forEach(el => {
    el.children[1].style.height = 0
});

// details[0].children[1].style.transition = 'height 2s';
details[0].children[1].style.height = '200px'

    




















// This function toggles the visibility of each project's details
function toggleProjectDetails(projectId) {
    const project = document.getElementById(projectId);
    const displayStyle = project.style.display === "none" ? "block" : "none";
    project.style.display = displayStyle;
}

// Add event listeners to each project heading for toggling
document.addEventListener('DOMContentLoaded', () => {
    // Select all project headings
    const projectHeadings = document.querySelectorAll('.project-heading');

    // Loop through each project heading and add a click event to toggle details
    projectHeadings.forEach(heading => {
        heading.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project');
            toggleProjectDetails(projectId);
        });
    });
});
