const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL & Databaser",
    "Git & GitHub",
    "Testning & felsökning"
];

const skillsList = document.getElementById("skills-list");

if (skillsList) {
    skills.forEach(skill => {
        const span = document.createElement("span");
        span.className = "badge";
        span.textContent = skill;
        skillsList.appendChild(span);
    });
    // Ta bort punktlista-stil
    skillsList.style.listStyle = "none";
    skillsList.style.padding = "0";
}


const projects = [
    {
        title: "DagsBokApp – ToDo / Diary App",
        type: "backend",
        description: "Konsolbaserad C#-applikation för att skapa och hantera dagboksanteckningar och uppgifter.",
        tech: [
            "C#",
            ".NET Console Application",
            "Objektorienterad programmering",
            "Filhantering"
        ],
        highlights: [
            "Skapa, visa och ta bort anteckningar",
            "Markera uppgifter som färdiga",
            "Spara data mellan sessioner",
            "Tydlig konsolmeny"
        ],
        links: {
            github: "https://github.com/TSOLER89/DagsBokApp"
        }
    },
    {
        title: "RockPaperScissor – C# Konsolspel",
        type: "backend",
        description: "Konsolbaserat sten–sax–påse-spel som visar logik, kontrollflöden och interaktiv programmering.",
        tech: [
            "C#",
            ".NET Console Application",
            "If / switch-logik",
            "Random-klass"
        ],
        highlights: [
            "Spela mot datorn",
            "Poängräkning",
            "Användarvänligt flöde",
            "Tydlig kodstruktur"
        ],
        links: {
            github: "https://github.com/TSOLER89/RockPaperScissor"
        }
    },
    {
        title: "Caffe-Retro-2021 – Mini Web API",
        type: "backend",
        description: "Mini Web API i C# för hantering av cafédatabas med CRUD-funktionalitet.",
        tech: [
            "C#",
            "ASP.NET Core Web API",
            "JSON",
            "CRUD"
        ],
        highlights: [
            "Create, Read, Update, Delete",
            "JSON-baserad datalagring",
            "Testning via Postman",
            "Strukturerad backend-kod"
        ],
        links: {
            github: "https://github.com/TSOLER89/Caffe-Retro-2021"
        }
    }
];

const projectsContainer = document.getElementById("projects-container");


if (projectsContainer) {
    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        // Bygg tech-lista
        const techList = project.tech.map(tech => `<li>${tech}</li>`).join("");
        // Bygg highlights-lista
        const highlightsList = project.highlights.map(h => `<li>${h}</li>`).join("");

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <strong>Tekniker:</strong>
            <ul>${techList}</ul>
            <strong>Höjdpunkter:</strong>
            <ul>${highlightsList}</ul>
            <a href="${project.links.github}" target="_blank">GitHub</a>
        `;

        projectsContainer.appendChild(card);
    });
}
