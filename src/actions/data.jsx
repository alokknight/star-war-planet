import { types } from "../types/index";


export const favoriteAdd = (favourites) => ({
  type: types.favoriteAdd,
  payload: favourites
})


export const deleteFavorite = (deleteResult) => ({
  type: types.removeFavorite,
  payload: deleteResult
})