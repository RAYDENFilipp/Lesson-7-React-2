export const InputName = (name) =>  {
  const action = {
    type: 'INPUT_NAME',
    name: name
  };
  return action;
};

export const SearchName = (search) =>  {
  const action = {
    type: 'SEARCH_NAME',
    search: search
  };
  return action;  
};

export const AddUserName = (user) =>  {
  const action = {
    type: 'ADD_USER_NAME',
    users: newUsers,
    name: ''
  };
  return action;  
};

export const RemoveUser = (id) =>  {
  const action = {
    type: 'REMOVE_USER',
    users: newUsers
  };
  return action;    
};
