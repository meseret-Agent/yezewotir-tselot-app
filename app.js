// app.js
async function loadPrayers() {
    const response = await fetch('data.json');
    const data = await response.json();
    const container = document.getElementById('prayer-container');

    // Clear loading message
    container.innerHTML = '';

    data.sections.forEach((section, index) => {
        // Create section wrapper
        const sectionWrapper = document.createElement('div');
        sectionWrapper.className = 'section-wrapper';
        sectionWrapper.id = `section-${index}`;

        // Create collapsible header
        const header = document.createElement('h2');
        header.className = 'section-header';
        header.innerHTML = `
            <span class="section-number">${index + 1}.</span>
            ${section.title}
            <span class="toggle-icon">▼</span>
        `;

        // Create content div (initially hidden)
        const contentDiv = document.createElement('div');
        contentDiv.className = 'section-content';

        section.lines.forEach(line => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'line-group';
            lineDiv.innerHTML = `
                <div class="amharic">${line.am}</div>
                <div class="phonetic">${line.ph}</div>
            `;
            contentDiv.appendChild(lineDiv);
        });

        // Toggle collapse/expand on header click
        header.onclick = () => toggleSection(contentDiv, header);

        sectionWrapper.appendChild(header);
        sectionWrapper.appendChild(contentDiv);
        container.appendChild(sectionWrapper);
    });
}

function toggleSection(contentDiv, header) {
    const isExpanded = contentDiv.classList.contains('expanded');
    const icon = header.querySelector('.toggle-icon');

    if (isExpanded) {
        contentDiv.classList.remove('expanded');
        icon.textContent = '▼';
    } else {
        contentDiv.classList.add('expanded');
        icon.textContent = '▲';
    }
}

loadPrayers();