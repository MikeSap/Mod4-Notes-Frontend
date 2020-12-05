export default function manageNotes(state = {notes:[], loading:false}, action) {

let idx
let notes = state.notes

    switch (action.type) {

        case("POSTING_NOTE"):
        return {
            ...state,
            loading:true
        }

        case("NEW_NOTE"):
        return {
            ...state, 
            notes: [...state.notes, action.note],
            loading:false        
        }

        case("LOGGED_IN"):
        return {
            ...state,
            notes: [...action.user.notes],
            loading:false
        }

        case 'LOGOUT':
            return {
                ...state,
                notes: [],
                loading:false,
            }

        case("EDIT_NOTE"):
        idx = state.notes.findIndex(n => n.id === action.note.id)
        notes.splice(idx, 1, action.note)
        return { notes,
            loading: false
        }

        case("DELETE_NOTE"):
        idx = state.notes.findIndex(n => parseInt(action.noteId) === n.id)
        notes.splice(idx, 1)
        return{
            ...state,
            notes,
            loading: false
        }
        
        default:
          return state;
      }
}