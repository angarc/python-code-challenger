const defaultState = {
  code: '' 
}

const codeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_CODE':
      return {
        ...state,
        code: action.payload.code
      }
    default:
      return state 
  }
}

export default codeReducer
