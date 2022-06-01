function handleFilter(e) {
    const id = e.id;

    if (e.classList.contains("active")) {
        handleSelectAll(e);
    } else {
        if (id === "experience-filter-button") {
            filterExperienceOnly(e);
        } else {
            filterProjectOnly(e);
        }
    }

}

function filterProjectOnly(e) {
    e.classList.add("active");
    const filterExperienceBtn = document.getElementById("experience-filter-button");
    filterExperienceBtn.style.display = "none";

    const experiences = document.getElementsByClassName("experience");
    Array.prototype.forEach.call(experiences, function(exp) {
        exp.classList.add("project-card-inactive");
    });
}

function filterExperienceOnly(e) {
    e.classList.add("active");
    const filterProjectBtn = document.getElementById("project-filter-button");
    filterProjectBtn.style.display = "none";

    const projects = document.getElementsByClassName("project");
    Array.prototype.forEach.call(projects, function(project) {
        project.classList.add("project-card-inactive");
    });
}

function handleSelectAll(e) {
    e.style.backgroundColor = "none";
    e.classList.remove("active");
    const filterExperienceBtn = document.getElementById("experience-filter-button");
    filterExperienceBtn.style.display = "inline";
    const filterProjectBtn = document.getElementById("project-filter-button");
    filterProjectBtn.style.display = "inline";

    const projectCards = document.getElementsByClassName("project-card");
    Array.prototype.forEach.call(projectCards, function(card) {
        if (card.classList.contains("project-card-inactive")) {card.classList.remove("project-card-inactive")}
    })
}