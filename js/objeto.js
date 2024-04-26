const favs = [
    {
        nombre: "Messi",
        profesion: "Jugador de futbol"
    },
    {
        nombre: "Joji",
        profesion: "Cantante"
    },
    {
        nombre: "Jorge Rivera",
        profesion: "Cantante"
    },
    {
        nombre: "ADO",
        profesion: "Cantante"
    },
    {
        nombre: "Good kid",
        profesion: "Cantante"
    },
    {
        nombre: "Beyoncé",
        profesion: "Cantante"
    },
    {
        nombre: "Will Smith",
        profesion: "Actor"
    },
    {
        nombre: "Taylor Swift",
        profesion: "Cantante"
    },
    {
        nombre: "Dwayne 'The Rock' Johnson",
        profesion: "Actor"
    },
    {
        nombre: "Lady Gaga",
        profesion: "Cantante"
    },
    {
        nombre: "Justin Timberlake",
        profesion: "Cantante"
    },
    {
        nombre: "Rihanna",
        profesion: "Cantante"
    },
    {
        nombre: "Selena Gomez",
        profesion: "Cantante"
    },
    {
        nombre: "Drake",
        profesion: "Cantante"
    },
    {
        nombre: "Jennifer Lopez",
        profesion: "Cantante"
    }
];

function mostrarFavoritos() {
    const favoritosList = document.getElementById("contendorObjetos");

    favs.forEach(favorito => {
        const cardHtml = `
        <div class="col-5 m-1">
        <div class="card">
            <h2 class="card-title">${favorito.nombre}</h2>
            <br>
            <h5>${favorito.profesion}</h5>
        </div>

        </div>
    `;
        favoritosList.innerHTML += cardHtml;
    });
}
mostrarFavoritos();