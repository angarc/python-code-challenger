export const closeProblem = () => {
  return {
    type: 'CLOSE_PROBLEM',
    payload: {
      problemWidth: 1,
      codeEditorWidth: 11
    }
  }
}

export const expandProblem = () => {
  return {
    type: 'EXPAND_PROBLEM',
    payload: {
      problemWidth: 6,
      codeEditorWidth: 6
    }
  }
}
