export const login = (user) => {
    
    return (dispatch) => {
        dispatch({type:"LOGIN"})

        fetch(`http://localhost:3000/login`,{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
         })
         .then(resp => resp.json())
         .then(user => {
             user.errors ?
             dispatch({type: "LOGIN_ERROR", errors: user.errors})
             :
             dispatch({ type: "LOGGED_IN", user })
             localStorage.setItem("token", user.jwt)
            //  window.localStorage.setItem("userId", user.id)
         })
    }
}

export const autoLogin = (user) => {
    return dispatch => {
        dispatch({type:"AUTO_LOG_IN", user})
    }
}

export const logout = () => {
    window.localStorage.removeItem("token")
    return {
        type: 'LOGOUT',
        username: "",
        id: ""
    }
}
export const signup = (user) => {
    return (dispatch) => {
        dispatch({type:"LOGIN"})

        fetch(`http://localhost:3000/users`,{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
         })
         .then(resp => resp.json())
         .then(user => {
             debugger
             user.errors ?
             dispatch({type: "LOGIN_ERROR", errors: user.errors})
             :
             dispatch({ type: "LOGGED_IN", user })
             localStorage.setItem("token", user.jwt)
         })
    }
}

export const newNote = (note) => {
    return (dispatch) => {

        dispatch({ type: "POSTING_NOTE" })
        const data = new FormData()
        Object.keys(note).forEach((key, value) => {
            data.append(key, note[key])
        })
        
        fetch(`http://localhost:3000/notes`,{ 
            method: "POST",
            headers: {
            },
            body: data
         })
         .then(resp => resp.json())
         .then(postedNote => {
             dispatch({ type: "NEW_NOTE", note: postedNote})
         })
    }
}

export const editNote = (note) => {
    return (dispatch) => {
        dispatch({ type: "POSTING_NOTE" })

        const data = new FormData()
        Object.keys(note).forEach((key, value) => {
            data.append(key, note[key])
        })
        
        fetch(`http://localhost:3000/notes/${note.note_id}`,{ 
            method: "PATCH",
            headers: {
            },
            body: data
         })
         .then(resp => resp.json())
         .then(editedNote => {
             dispatch({ type: "EDIT_NOTE", note: editedNote})
         })
    }
}

export const deleteNote = (id) => {
    return (dispatch) => {
        dispatch({ type: "POSTING_NOTE" })
        
        fetch(`http://localhost:3000/notes/${id}`,{ method: "DELETE" })
         .then(resp => resp.json())
         .then(delNote => {
             dispatch({ type: "DELETE_NOTE", noteId: delNote.deletedNote})
         })
    }
}

export const setEditNote = (note) => {
    return {
        type: "SET_EDIT_NOTE",
        note
    }
}

export const clearEditNote = (note) => {
    return {
        type: "CLEAR_EDIT_NOTE",
    }
}

export const setShowNote = (note) => {
    return {
        type: "SET_SHOW_NOTE",
        note
    }
}

export const clearShowNote = (note) => {
    return {
        type: "CLEAR_SHOW_NOTE",
    }
}


// import {...login} from './login'
// import {...notes} from './notes'


// export {...login}
// export {...notes}