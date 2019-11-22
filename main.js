var app = new Vue({
    el: '#app',
    data: { // Data tiene que devolver un objeto
        COLORS: {
            "grass": "#78C850",
            "poison": "#A040A0",
            "fire": "#F08030",
            "flying": "#A890F0",
            "water": "#6890F0",
            "bug": "#A8B820",
            "normal": "#A8A878",
            "electric": "#F8D030"
        },

        pokemons: [

        ],
        searchText: ''
    },
    computed: {
        filteredPokemons() {
            return this.pokemons
                .filter(pokemon => {
                    return pokemon.name.includes(this.searchText);
                })
        }
    },
    created() {
        fetch('https://raw.githubusercontent.com/rubnvp/vue-pokedex/master/data/pokemons.json')
            .then(response => response.json())
            .then(pokemons => {
                this.pokemons = pokemons;
            });

    },
    methods: {
        removePokemon(pokemonRemove) {
            console.log(pokemonRemove)
            this.pokemons = this.pokemons
                .filter(pokemon => {
                    return pokemon !== pokemonRemove
                })

        }

    }

});