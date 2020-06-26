const defaultState = {
  modalContent: '',
  showModal: false 
}

const responseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        modalContent: action.payload.modalContent,
        showModal: action.payload.showModal
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalContent: action.payload.modalContent,
        showModal: action.payload.showModal
      }
    default:
      return state 
  }
}

export default responseReducer 

