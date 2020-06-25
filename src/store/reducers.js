import { combineReducers } from 'redux'
import { restaurantReducer } from './restaurant'

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
})

export default rootReducer
