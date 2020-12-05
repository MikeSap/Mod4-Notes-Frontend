export default function manageEditNote(state = {}, action) {

    switch (action.type){
        case("SET_EDIT_NOTE"):
        return action.note

        case("CLEAR_EDIT_NOTE"):
        return {}

        case 'LOGOUT':
            return {}

        case("EDIT_NOTE"):
            return {}

        default:
            return state
    }
}