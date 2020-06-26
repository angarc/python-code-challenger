import screenLayoutReducer from './ScreenLayoutReducer'
import codeReducer from './CodeReducer'
import problemReducer from './ProblemReducer'
import responseReducer from './ResponseReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  screenLayout: screenLayoutReducer,
  codeState: codeReducer,
  problem: problemReducer,
  response: responseReducer
})

export default rootReducer
