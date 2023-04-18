import { UserData } from "../interfaces/user";



interface InitState {
  user: null | UserData
}

export const initialState: InitState = {
  user: null

};

export const actionTypes = {
  SET_USER: "SET_USER"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
};

export default reducer;