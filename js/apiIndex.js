async function obtenerNombreYImagenPokemon(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        const nombrePokemon = data.name;
        const imagenPokemon = data.sprites.front_default;
        const tiposPokemon = data.types.map((tipo) => tipo.type.name).join(', '); // Mostrar tipos separados por coma
        return { nombre: nombrePokemon, imagen: imagenPokemon, tipos: tiposPokemon };
    } catch (error) {
        console.error('Error al obtener los datos del Pokémon:', error);
    }
}

async function mostrarNombreYImagenPokemon() {
    const pokemonNameContainer = document.getElementById('pokemonName');
    const pokemonTypeContainer = document.getElementById('pokemonType');
    const pokemonImageContainer = document.getElementById('pokemonImage');
    const id = document.getElementById('pokemonNumberInput').value;
    const { nombre, imagen, tipos } = await obtenerNombreYImagenPokemon(id);
    pokemonNameContainer.textContent = `Nombre: ${nombre}`;
    pokemonTypeContainer.textContent = `Tipos: ${tipos}`;
    pokemonImageContainer.src = imagen;
}

async function buscarPokemon() {
    mostrarNombreYImagenPokemon();
}

mostrarNombreYImagenPokemon();
