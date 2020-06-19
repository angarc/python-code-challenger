const defaultState = {
  problemClass: 'expanded',
  codeEditorWidth: 6
}

export default function screenLayoutReducer(state = defaultState, action) {
  switch (action.type) {
    case 'CLOSE_PROBLEM':
      return {
        ...state,
        problemClass: action.payload.problemClass,
        codeEditorWidth: action.payload.codeEditorWidth 
      }
    case 'EXPAND_PROBLEM':
      return {
        ...state,
        problemClass: action.payload.problemClass,
        codeEditorWidth: action.payload.codeEditorWidth 
      }
    default:
      return state
  }
}
