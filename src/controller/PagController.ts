import { basicLog } from "../decorators/basicLog.js";
import { DetailedPokemon } from "../interface/PokemonApiInterface.js";
import { pagSettings } from "../model/PagSettings.js";
import { GetPokemons } from "../services/GetPokemons.js";


export class pagController {
    private loadMoreButton = <HTMLElement> document.getElementById('loadMoreButton');
    private pokemonList = <HTMLElement> document.getElementById('pokemonList');

    constructor (
        private getSomePokemons : GetPokemons,
        private pagSettings : pagSettings
    ) {}

    public action () {
        this.load();
        this.loadMoreButton
            .addEventListener('click', this.loadMorePokemon.bind(this));
    }
    private async load () {
        this.construtor(
            await this.getSomePokemons.action(this.pagSettings.getOffset(), this.pagSettings.getLimit())
        );
    }
    // @basicLog()
    private construtor (pkm : DetailedPokemon[]) {
        pkm.forEach(pokemon => {
            this.pokemonList.innerHTML += `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>

                        <img src="${pokemon.photo}"
                            alt="${pokemon.name}">
                    </div>
                </li>`
        });
    }
    private loadMorePokemon () {
        this.pagSettings.incrementDefaultParams();
        if(this.pagSettings.canGetPokemons()) {
            this.load();
        } else {
            this.loadMoreButton.parentNode?.removeChild(this.loadMoreButton);
        }
    }
}
