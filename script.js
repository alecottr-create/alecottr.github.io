// Database dei dati dei progetti (Testi e Immagini)
const projectData = {
    project1: {
        title: "Computer Project",
        subtitle: "Web Design Sostenibile (2024-2025)",
        description: "Lavoro di gruppo focalizzato sulla creazione di una piattaforma web ad utilità sostenibile. Come graphic designer mi sono occupato dell'interfaccia utente (UI), strutturando un layout pulito, intuitivo e moderno.",
        image: "progetto1.jpg" // Sostituisci in futuro con il nome della tua immagine vera
    },
    project2: {
        title: "MUNER New York",
        subtitle: "Simulazione ONU (2023-2024)",
        description: "Esperienza internazionale svoltasi interamente in lingua inglese a New York. Nel ruolo di delegato della Lituania, ho affinato capacità di mediazione, public speaking e stesura di risoluzioni formali.",
        image: "IMG_8294.HEIC"
    },
    project3: {
        title: "Tour Virtuale & Lab Ducati",
        subtitle: "Accademia Belle Arti (2021-2022)",
        description: "Sviluppo di un tour virtuale interattivo del laboratorio di fisica e della scuola in collaborazione con l'Accademia di Venezia, unito alla frequenza del laboratorio sperimentale Ducati nello stesso anno.",
        image: "IMG_4838.HEIC"
    }
};

// Funzione per aprire il Pop-up (Modal) con i dati corretti
function openModal(projectId) {
    const modal = document.getElementById("projectModal");
    const bodyContent = document.getElementById("modal-body-content");
    const data = projectData[projectId];

    if (data) {
        // Qui inseriamo l'HTML dentro il pop-up in modo dinamico
        bodyContent.innerHTML = `
            <div class="modal-img-placeholder"><img src="${data.image}" alt="${data.title}" class="modal-img" onerror="this.src='https://via.placeholder.com/600x300?text=Anteprima+Immagine+${data.title}'"></div>
            <h2 style="color: #0a192f; margin-bottom: 5px;">${data.title}</h2>
            <h4 style="color: #666; margin-bottom: 15px;">${data.subtitle}</h4>
            <p style="text-align: left; color: #444;">${data.description}</p>
        `;
        
        modal.style.display = "flex";
    }
}

// Funzione per chiudere il Pop-up
function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

// Chiude il pop-up se l'utente clicca fuori dalla finestra bianca
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
