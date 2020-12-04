export default function manageNotes(state = {notes:[], loading:false, editedNote: {title:"", content:""}}, action) {
let idx
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

        case("EDIT_NOTE"):
        idx = state.notes.findIndex(n => n.id === action.note.id)
        let notes = state.notes
        notes.splice(idx, 1, action.note)
        return { notes: notes,
            loading: false,
            editedNote: {title:"", content:""}
        }

        case("DELETE_NOTE"):
        return{
            // find Note by index and skip with slice
            ...state
        }

        case("SET_EDITED_NOTE"):

        return {
            ...state,
            editedNote: action.note
        }
        
        // case("CLEAR_EDITED_NOTE"):
        // return {
        //     ...state,
        //     editedNote: {title:"", content:""}        
        // }

        default:
          return state;
      }
}
