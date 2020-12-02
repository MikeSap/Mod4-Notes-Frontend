import { combineReducers } from "redux";
import manageLogin from './manageLogin'
import manageNotes from './manageNotes'

const rootReducer = combineReducers({
  login: manageLogin,
  notes: manageNotes
});

export default rootReducer;