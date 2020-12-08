export default function manageNotes(state = [], action) {

let idx
let notes = state

    switch (action.type) {

        case("POSTING_NOTE"):
        return state

        case("NEW_NOTE"):
        return [...state, action.note] 

        case("LOGGED_IN"):
            return [...action.user.user.notes]

        case 'AUTO_LOG_IN':
            return [...action.user.notes]

        case 'LOGOUT':
            return []

        case("EDIT_NOTE"):
        idx = notes.findIndex(n => n.id === action.note.id)
        notes.splice(idx, 1, action.note)
        return notes

        case("DELETE_NOTE"):
        idx = notes.findIndex(n => parseInt(action.noteId) === n.id)
        notes.splice(idx, 1)
        return notes
        
        default:
          return state;
      }
}