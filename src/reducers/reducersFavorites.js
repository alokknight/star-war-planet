import { types } from "../types/index";

const initialState = {
  favourites: [],
  //active: null
}

export const reducersFavorites = (state = initialState, action) => {
  switch (action.type) {

    case types.favoriteAdd:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      }
    case types.removeFavorite:
      return {
        ...state,
        favourites: state.favourites.filter(planet => planet.name !== action.payload.name)
      }
    case types.searchPlanets:
      return {
        ...state,
        search: action.payload
      }
    default:
      return state
  }
}