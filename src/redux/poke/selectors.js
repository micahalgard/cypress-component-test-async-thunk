import { createSelector } from "@reduxjs/toolkit";

export const selectPokemon = createSelector(
    state => state.poke.data,
    data => data
)