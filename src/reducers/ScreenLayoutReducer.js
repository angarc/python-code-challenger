const defaultState = {
  problemWidth: 6,
  codeEditorWidth: 6
}

export default function screenLayoutReducer(state = defaultState, action) {
  switch (action.type) {
    case 'CLOSE_PROBLEM':
      return {
        ...state,
        problemWidth: action.payload.problemWidth,
        codeEditorWidth: action.payload.codeEditorWidth 
      }
    case 'EXPAND_PROBLEM':
      return {
        ...state,
        problemWidth: action.payload.problemWidth,
        codeEditorWidth: action.payload.codeEditorWidth 
      }
    default:
      return state
  }
}
