import { MEALS } from "../../data/dummy-data";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

export default (state = initialState, action) => {
   return state;
};