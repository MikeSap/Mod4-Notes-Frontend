export const login = (user) => {
    return {
        type: 'LOGIN',
        user
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        username: ""
    }
}

export const newNote = (note) => {
    return {
        type: 'NEW_NOTE',
        note
    }
}