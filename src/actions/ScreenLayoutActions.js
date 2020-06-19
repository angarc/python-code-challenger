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
