import screenLayoutReducer from './ScreenLayoutReducer'
import codeReducer from './CodeReducer'
import problemReducer from './ProblemReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  screenLayout: screenLayoutReducer,
  codeState: codeReducer,
  problem: problemReducer
})

export default rootReducer
