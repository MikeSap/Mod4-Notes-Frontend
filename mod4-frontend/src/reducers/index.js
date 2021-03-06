import { combineReducers } from "redux";
import manageLogin from './manageLogin'
import manageNotes from './manageNotes'
import manageShowNote from './manageShowNote'
import manageEditNote from './manageEditNote'
import manageLoading from './manageLoading'
import manageErrors from './manageErrors'

const rootReducer = combineReducers({
  login: manageLogin,
  notes: manageNotes,
  showNote: manageShowNote,
  editNote: manageEditNote,
  loading: manageLoading,
  errors: manageErrors
});

export default rootReducer;