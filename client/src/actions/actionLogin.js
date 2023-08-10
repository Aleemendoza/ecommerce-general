
export const LOGIN_USUARIO = 'LOGIN_USUARIO'
export const LOG_OUT = 'LOG_OUT'

const initialState = {
  user: [],
  usuarioLogueado: {}
 };

const catalogReducer = (state = initialState , action) => {
  console.log(action)

  
  switch (action.type) {

    case LOGIN_USUARIO:
      return {
          ...state,
          usuarioLogueado: action.payload
        }
    case LOG_OUT:
      return {
        ...state,
        usuarioLogueado: action.payload
      }
     default:
        return state;
    }
  }

export function loginUsuario (usuario) {

  return function(dispatch) {
    return   fetch('http://localhost:3001/auth/login/', {
      method: 'post',
      //credentials: 'include',
      headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  })
  .then(response => response.json())
  .then(user => {
    dispatch({
      type: LOGIN_USUARIO,
      payload: user
    });
      return user;
    });

  };
}

export function logOut () {
return function(dispatch) {
  return   fetch('http://localhost:3001/auth/logout')
  .then(userNull => {
    dispatch({
      type: LOG_OUT,
      payload: userNull
    });
    });

  };
}


