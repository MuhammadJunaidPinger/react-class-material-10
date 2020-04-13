const reducer = (state = {}, action) => {
  console.log('reduce-->r', action)
  switch (action.type) {
    case 'UPDATE_USER': {
      return {...state, user: action.user}
    }
    case 'DELETE_USER': {
      return {...state, user: null}
    }
    default: {
      return {...state}
    }
  }

}

export default reducer