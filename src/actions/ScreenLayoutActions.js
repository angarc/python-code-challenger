export const closeProblem = () => {
  return {
    type: 'CLOSE_PROBLEM',
    payload: {
      problemClass: 'hidden',
      codeEditorWidth: 12
    }
  }
}

export const expandProblem = () => {
  return {
    type: 'EXPAND_PROBLEM',
    payload: {
      problemClass: 'expanded',
      codeEditorWidth: 6
    }
  }
}


export const showTerminal = () => {
  return {
    type: 'SHOW_TERMINAL',
    payload: {
      terminalClass: 'terminal',
      codeEditorHeight: '50vh'
    }
  }
}

export const hideTerminal = () => {
  return {
    type: 'HIDE_TERMINAL',
    payload: {
      terminalClass: 'terminal-hidden',
      codeEditorHeight: '90vh'
    }
  }
}
