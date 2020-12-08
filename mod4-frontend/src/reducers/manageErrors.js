export default function manageErrors(state = {}, action) {

    switch (action.type){
        
        case("NOTE_ERROR"):
        return {note: action.note}

        case("NEW_NOTE"):
        return {}

        case("LOGGED_IN"):
        return {}

        case("LOGOUT"):
        return {}

        case("EDIT_NOTE"):
        return {}

        default:
            return state
    }
}