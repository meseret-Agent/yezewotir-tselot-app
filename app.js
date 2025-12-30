// app.js
async function loadPrayers() {
    const response = await fetch('data.json');
    const data = await response.json();
    const container = document.getElementById('prayer-container');

    // Clear loading message
    container.innerHTML = '';

    data.sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.innerHTML = `<h2>${section.title}</h2>`;

        section.lines.forEach(line => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'line-group';
            lineDiv.innerHTML = `
                <div class="amharic">${line.am}</div>
                <div class="phonetic">${line.ph}</div>
            `;
            sectionDiv.appendChild(lineDiv);
        });
        container.appendChild(sectionDiv);
    });
}
loadPrayers();