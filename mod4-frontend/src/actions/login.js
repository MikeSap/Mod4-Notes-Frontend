// export const login = (user) => {
//     return (dispatch) => {
//         dispatch({type:"LOGIN"})

//         fetch(`http://localhost:3000/users/signup`,{ 
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(user)
//          })
//          .then(resp => resp.json())
//          .then(user => {
//              user.errors ?
//              dispatch({type: "LOGIN_ERROR", errors: user.errors})
//              :
//              dispatch({ type: "LOGGED_IN", user})
//          })
//     //  .catch   
//     }
// }

// export const logout = () => {
//     return {
//         type: 'LOGOUT',
//         username: "",
//         id: ""
//     }
// }