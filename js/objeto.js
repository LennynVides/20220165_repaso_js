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

    const ul = document.createElement("ul");
    favs.forEach(favorito => {
        const li = document.createElement("li");
        li.textContent = `${favorito.nombre} - ${favorito.profesion}`;
        ul.appendChild(li);
    });

    favoritosList.appendChild(ul);
}

mostrarFavoritos();
