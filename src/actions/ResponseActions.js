export const showModal = content => {
  return {
    type: 'SHOW_MODAL',
    payload: {
      modalContent: content,
      showModal: true
    }
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL',
    payload: {
      modalContent: null,
      showModal: false 
    }
  }
}

