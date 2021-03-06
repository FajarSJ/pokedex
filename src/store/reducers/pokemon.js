import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/Utillity";

const initialState = {
  pokemon: null,
  isLoadingFilter: false,
  isLoadingDetail: false,
  error: false,
  detailPokemon: null,
};

const loadPokemonSuccess = (state, action) => {
  return updateObject(state, {
    pokemon: action.pokemon.results,
    error: false,
  });
};

const loadDetailPokemonRequest = (state) => {
  return updateObject(state, { isLoadingDetail: true });
};

const loadDetailPokemonSuccess = (state, action) => {
  return updateObject(state, {
    detailPokemon: action.pokemon,
    error: false,
    isLoadingDetail: false,
  });
};

const loadFilterPokemonRequest = (state) => {
  return updateObject(state, { isLoadingFilter: true });
};

const loadFilterPokemonSuccess = (state, action) => {
  return updateObject(state, {
    pokemon: action.pokemonType.pokemon,
    error: false,
    isLoadingFilter: false,
  });
};

const loadPokemonFailed = (state) => {
  return updateObject(state, { error: true, isLoadingFilter: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_POKEMON_SUCCESS:
      return loadPokemonSuccess(state, action);
    case actionTypes.LOAD_DETAIL_POKEMON_REQUEST:
      return loadDetailPokemonRequest(state, action);
    case actionTypes.LOAD_DETAIL_POKEMON_SUCCESS:
      return loadDetailPokemonSuccess(state, action);
    case actionTypes.LOAD_FILTER_POKEMON_REQUEST:
      return loadFilterPokemonRequest(state, action);
    case actionTypes.LOAD_FILTER_POKEMON_SUCCESS:
      return loadFilterPokemonSuccess(state, action);
    case actionTypes.LOAD_POKEMON_FAILED:
      return loadPokemonFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
