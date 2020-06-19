import screenLayoutReducer from './ScreenLayoutReducer'
import codeReducer from './CodeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  screenLayout: screenLayoutReducer,
  codeState: codeReducer
})

export default rootReducer
