import { handleActions, combineActions } from 'redux-actions'
import { wrap as imm } from 'object-path-immutable'
import { FIND_RESTAURANT } from './constant'

const initialState = {
  restaurants: [],
  pagination: {
    total: 0,
    current: 1,
    pageSize: 25,
  },
  loading: false,
  error: null,
}

export const restaurantReducer = handleActions(
  {
    [combineActions(FIND_RESTAURANT.REQUEST)]: (state) => {
      return imm(state).set('loading', true).set('error', null).value()
    },
    [combineActions(FIND_RESTAURANT.SUCCESS)]: (state, { payload }) => {
      const pagination = {
        total: payload['total_entries'] || 0,
        current: payload['current_page'] || 1,
        pageSize: payload['per_page'] || 10,
      }
      return imm(state)
        .set('restaurants', payload.restaurants)
        .set('pagination', pagination)
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
