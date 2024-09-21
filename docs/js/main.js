let gamesData;
let gameListDiv = document.getElementById("gameList");
fetch("../public/data/gamesData.json")
    .then((response) => response.json())
    .then((data) => {
    gamesData = data;
    console.log("Data loaded successfully! :)");
    console.log("🚀 ~ file: main.ts:8 ~ .then ~ gamesData:", gamesData);
    if (gameListDiv) {
        gameListDiv.innerHTML = "";
        // Parcourir la liste des jeux et les afficher dans la div
        gamesData.forEach((game) => {
            // Créer un élément div pour chaque jeu
            const gameItem = document.createElement("div");
            gameItem.setAttribute("game-title", game.title);
            // Remplir le contenu de chaque div avec les informations du jeu
            gameItem.innerHTML = `
          <h3>${game.title}</h3>
          <p>Genre: ${game.genre}</p>
          <p>Date de sortie: ${new Date(game.releaseDate).toLocaleDateString()}</p>
          <p>Note: ${game.rating}/5</p>
        `;
            // Ajouter chaque jeu dans la div principale
            gameListDiv.appendChild(gameItem);
        });
    }
})
    .catch((error) => {
    console.error("Error loading the JSON file:", error);
});
export {};
