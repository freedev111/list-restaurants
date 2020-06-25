import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import * as ACTIONS from './action'

const API_BASE_URL = 'http://opentable.herokuapp.com/api'

export function* doFindRestaurant({ payload }) {
  try {
    const { city, page } = payload
    const res = yield call(
      axios.get,
      `${API_BASE_URL}/restaurants?city=${city}&page=${page}`,
    )
    yield put(ACTIONS.findRestaurantSuccess(res.data))
  } catch (err) {
    const errMessage = err.message
    yield put(ACTIONS.findRestaurantFailure(errMessage))
  }
}

export function* restaurantSaga() {
  yield takeLatest(ACTIONS.findRestaurant, doFindRestaurant)
}
