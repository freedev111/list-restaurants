import { createAction } from 'redux-actions'
import * as CONSTANTS from './constant'

export const findRestaurant = createAction(CONSTANTS.FIND_RESTAURANT.REQUEST)
export const findRestaurantSuccess = createAction(
  CONSTANTS.FIND_RESTAURANT.SUCCESS,
)
export const findRestaurantFailure = createAction(
  CONSTANTS.FIND_RESTAURANT.FAILURE,
)
