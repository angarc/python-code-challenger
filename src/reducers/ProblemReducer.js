const defaultState = {
  id: -1,
  title: '',
  description: '',
  challenge: '',
  test_case_1: '',
  test_case_2: ''
}

const problemReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_PROBLEM':
      console.log("updating problem")
      return {
        ...state,
        title: action.payload.problem.title,
        description: action.payload.problem.description,
        challenge: action.payload.problem.challenge,
        test_case_1: action.payload.problem.test_case_1,
        test_case_2: action.payload.problem.test_case_2,
        id: action.payload.problem.id
      }
    default:
      return state 
  }
}

export default problemReducer 
