export default function manageShowNote(state = {}, action) {

    switch (action.type){
        case("SET_SHOW_NOTE"):
        return action.note

        case("CLEAR_SHOW_NOTE"):
        return {}

        case 'LOGOUT':
            return {}

        default:
            return state
    }
}