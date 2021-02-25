
import { DARKMODE } from './colors.action'

const initialState = {
  darkMode: false
}

export default function ColorsReducer(state = initialState, action) {
  switch (action.type) {

    case DARKMODE:
    return Object.assign({}, state, {
      darkMode: action.darkMode
    })

    default:
      return state
  }
}
