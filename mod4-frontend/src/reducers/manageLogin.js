export default function manageLogin(state = {
    user: {username: "", id: ""}, loading: false
}, action) {
    switch (action.type) {

        case 'LOGIN':
            return { user: {username: "", id: ""}, loading: true}

        case 'LOGGED_IN':
            return { user: {username: action.user.username, id: action.user.id}, loading:false }

        case 'LOGOUT':
            return { user: {username:"", id: ""}, loading:false }

        default:
          return state;
      }

}
