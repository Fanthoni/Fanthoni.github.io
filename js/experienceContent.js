import experience from "../asset/data/experiences.js";

$(document).ready(function() {
    const experienceContentRootEl = $("#experience-content-root")

    for (const [index, exp] of experience.entries()) {

        // Build the experience card
        const childElement = $(`
            <div class="experience-card" id=${exp.company}-${index} onclick=window.location="${exp.companyLink}";>
                <h5 class="experience-date" id=${exp.company}-date>${exp.date}</h5>
                <div class="experience-details-container" id=${exp.company}-details-container>
                    <h5 class="experience-title">${exp.role} · ${exp.company}</h5>
                    <p class="experience-description">${exp.description}</p>
                    <div class="experience-tag-container"></div>
                </div>
            </div>
        `)

        // Fill out the tags
        const tagContainer = childElement.find(".experience-tag-container")
        for (const tag of exp.tags) {
            const tagElement = $(`
                <span class="experience-tag" id=${exp.company}-${tag}>${tag}</span>
            `);
            tagContainer.append(tagElement)
        }

        // Add experience card to the root content element
        childElement.appendTo(experienceContentRootEl)
    }
});


