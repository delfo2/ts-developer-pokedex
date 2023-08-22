var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class pagController {
    constructor(getSomePokemons, pagSettings) {
        this.getSomePokemons = getSomePokemons;
        this.pagSettings = pagSettings;
        this.loadMoreButton = document.getElementById('loadMoreButton');
        this.pokemonList = document.getElementById('pokemonList');
    }
    action() {
        this.load();
        this.loadMoreButton
            .addEventListener('click', this.loadMorePokemon.bind(this));
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.construtor(yield this.getSomePokemons.action(this.pagSettings.getOffset(), this.pagSettings.getLimit()));
        });
    }
    construtor(pkm) {
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
                </li>`;
        });
    }
    loadMorePokemon() {
        var _a;
        this.pagSettings.incrementDefaultParams();
        if (this.pagSettings.canGetPokemons()) {
            this.load();
        }
        else {
            (_a = this.loadMoreButton.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.loadMoreButton);
        }
    }
}
