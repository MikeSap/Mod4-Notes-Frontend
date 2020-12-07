export const login = (user) => {
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
             user.errors ?
             dispatch({type: "LOGIN_ERROR", errors: user.errors})
             :
             dispatch({ type: "LOGGED_IN", user })
            //  window.localStorage.setItem("userId", user.id)
         })
    }
}

export const logout = () => {
    // window.localStorage.removeItem("userId")
    return {
        type: 'LOGOUT',
        username: "",
        id: ""
    }
}
export const signup = (user) => {
    return (dispatch) => {
        dispatch({type:"LOGIN"})

        fetch(`http://localhost:3000/users/signup`,{ 
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
         })
    }
}

export const newNote = (note) => {
    return (dispatch) => {
        dispatch({ type: "POSTING_NOTE" })
        
        fetch(`http://localhost:3000/notes`,{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
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
        
        fetch(`http://localhost:3000/notes/${note.note_id}`,{ 
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(note)
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