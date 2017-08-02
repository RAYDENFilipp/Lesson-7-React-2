const initialState = {
  name: '',
  search: '',
  users: []
}

export default function patentDetailsReducer(state = initialState, action) {
  switch(action.type) {
    case 'INPUT_NAME': {
      const { name } = action;
      return Object.assign({}, state, {
        name
      });
    }
    case 'SEARCH_NAME': {
      const { search } = action;
      return Object.assign({}, state, {
        search
      });
    }
    case 'ADD_USER_NAME': {
      const { name, users } = action;
      return Object.assign({}, state, {
        name,
        users
      });
    }
    case 'REMOVE_USER': {
      const { users } = action;
      return Object.assign({}, state, {
        users
      })
    }
    default: {
      return state;
    }
  }
};