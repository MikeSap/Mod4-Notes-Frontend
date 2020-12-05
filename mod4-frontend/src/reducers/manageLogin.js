export default function manageLogin(state = {
    user: {username: "", id: ""}, errors: false
}, action) {
    switch (action.type) {

        case 'LOGIN':
            return { user: {username: "", id: ""}, loading: true, errors:false } 

        case 'LOGGED_IN':
            return { user: {username: action.user.username, id: action.user.id}, loading:false, errors:false }

        case 'LOGOUT':
            return { user: {username:"", id: ""}, loading:false, errors:false }

        case 'LOGIN_ERROR':
            return { user: action.errors, loading:false, errors:true }

        default:
          return state;
      }

}
