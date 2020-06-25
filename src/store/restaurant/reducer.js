import { handleActions, combineActions } from 'redux-actions'
import { wrap as imm } from 'object-path-immutable'
import { FIND_RESTAURANT } from './constant'

const initialState = {
  restaurants: [],
  loading: false,
  error: null,
}

export const restaurantReducer = handleActions(
  {
    [combineActions(FIND_RESTAURANT.REQUEST)]: (state) => {
      return imm(state).set('loading', true).set('error', null).value()
    },
    [combineActions(FIND_RESTAURANT.SUCCESS)]: (state, { payload }) => {
      return imm(state)
        .set('restaurants', payload)
        .set('loading', false)
        .set('error', null)
        .value()
    },
    [combineActions(FIND_RESTAURANT.FAILURE)]: (state, { payload }) => {
      return imm(state).set('loading', false).set('error', payload).value()
    },
  },
  initialState,
)
