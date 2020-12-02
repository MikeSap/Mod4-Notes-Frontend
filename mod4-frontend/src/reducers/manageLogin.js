export default function manageLogin(state = {
    username: ""
}, action) {
    switch (action.type) {

        case 'LOGIN':
            return { username: action.user.username }

        case 'LOGOUT':
            return { username: "" }

        default:
          return state;
      }

}
