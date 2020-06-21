const defaultState = {
  problemClass: 'expanded',
  terminalClass: 'terminal',
  codeEditorWidth: 6,
  codeEditorHeight: '50vh'
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
    case 'SHOW_TERMINAL':
      return {
        ...state,
        terminalClass: action.payload.terminalClass,
        codeEditorHeight: action.payload.codeEditorHeight
      }
    case 'HIDE_TERMINAL':
      return {
        ...state,
        terminalClass: action.payload.terminalClass,
        codeEditorHeight: action.payload.codeEditorHeight
      }
    default:
      return state
  }
}
