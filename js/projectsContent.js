import project from "../asset/data/projects.js";

$(document).ready(function() {
    const projectsContentRootEl = $("#projects-content-root");

    for (const [index, proj] of project.entries()) {
      // Build the projects card
      const projectCard = $(`
            <div class="project-card">
                <div class="project-date-img-container">
                    <img class=project-image src="../asset/${proj.imageDir}" href=${proj.projectName}-image>
                </div>
                <div class="project-details-container">
                    <h5 class="project-title">${proj.projectName}</h5>
                    <p class="project-description">${proj.description}</p>
                    <div class="project-tags-container"></div>
                </div>
            </div>
        `);

      // Add the link if it exists
      if (proj.links && proj.links.length > 0) {
        const projectTitleEl = projectCard.find(".project-title");
        const linkElement = $(
          `<a href="${proj.links[0]}" target="_blank" class="project-title">${proj.projectName}</a>`
        );
        projectTitleEl.empty().append(linkElement);
      }

      // Fill out the tags
      const tagContainer = projectCard.find(".project-tags-container");
      for (const tag of proj.tags) {
        const tagElement = $(`
                <span class="project-tag" id=${proj.projectName}-${tag}>${tag}</span>
            `);
        tagContainer.append(tagElement);
      }

      // Add experience card to the root content element
      projectCard.appendTo(projectsContentRootEl);
    }
});
