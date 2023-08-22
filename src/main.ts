import { pagController } from "./controller/PagController.js";
import { DetailedPokemon } from "./interface/PokemonApiInterface.js";
import { pagSettings } from "./model/PagSettings.js";
import { GetPokemons } from "./services/GetPokemons.js";

const getPokemons = new GetPokemons();
const pSettings = new pagSettings();
const pController = new pagController(getPokemons, pSettings);

pController.action();