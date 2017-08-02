export function InputName(startParams) {
  const action = {
    type: 'INPUT_NAME',
    name: startParams.name
  };
  return action;
};

export function SearchName(startParams) {
  const action = {
    type: 'SEARCH_NAME',
    search: startParams.search
  };
  return action;
};

export function AddUserName(startParams) {
  const action = {
    type: 'ADD_USER_NAME',
    users: startParams.users,
    name: startParams.name
  };
  return action;
};

export function RemoveUser(startParams) {
  const action = {
    type: 'REMOVE_USER',
    users: startParams.users
  };
  return action;
};