
import { REDUX_TEST } from './homeScreen.action'

const initialState = {
  reduxTest: 'Redux works!'
}

export default function HomeScreenReducer(state = initialState, action) {
  switch (action.type) {

    case REDUX_TEST:
    return Object.assign({}, state, {
      reduxTest: action.reduxTest
    })

    default:
      return state
  }
}
