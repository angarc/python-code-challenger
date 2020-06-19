import screenLayoutReducer from './ScreenLayoutReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  screenLayout: screenLayoutReducer
})

export default rootReducer
