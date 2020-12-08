export default function manageLoading(state = false, action) {
    
        switch (action.type) {
    
            case("POSTING_NOTE"):
            return true
    
            case("NEW_NOTE"):
            return false
    
            case("LOGGED_IN"):
            return false

            case 'LOGOUT':
            return false

            case("EDIT_NOTE"):
            return false

            case("DELETE_NOTE"):
            return false
            
            case 'LOGIN':
            return true

            case 'LOGGED_IN':
            return false

            case 'LOGIN_ERROR':
            return false

            case 'AUTO_LOG_IN':
              return false
            
            case 'AUTO_LOGIN_ERROR':
            return false

            case("NOTE_ERROR"):
              return false

            case("SIGUP_PAGE"):
              return false
            
            default:
              return state;
          }
    }