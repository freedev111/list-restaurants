import { createSelector } from 'reselect'

const restaurant = (state) => state.restaurant

export const selectRestaurant = createSelector(
  restaurant,
  (restaurant) => restaurant.restaurants,
)

export const selectLoading = createSelector(
  restaurant,
  (restaurant) => restaurant.loading,
)

export const selectError = createSelector(
  restaurant,
  (restaurant) => restaurant.error,
)
