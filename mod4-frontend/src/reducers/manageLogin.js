export default function manageLogin(state = {
    user: {username: "", id: ""}, errors: false
}, action) {
    switch (action.type) {

        case 'LOGIN':
            return { user: {username: "", id: ""}, errors:false } 

        case 'LOGGED_IN':
            return { user: {username: action.user.user.username, id: action.user.user.id}, errors:false }

        case 'AUTO_LOG_IN':
            return {user: {username: action.user.username, id: action.user.id}, errors: false}

        case 'LOGOUT':
            return { user: {username:"", id: ""}, errors:false }

        case 'LOGIN_ERROR':
            return { user: action.errors, errors:true }

        default:
          return state;
      }
}
