/* Use const para tipos de ação
Uma prática comum ao trabalhar com Redux é atribuir tipos de ação como constantes 
somente leitura e, em seguida, fazer referência a essas constantes onde quer que 
sejam usadas. Você pode refatorar o código com o qual está trabalhando para 
escrever os tipos de ação como constdeclarações.

Declare LOGINe LOGOUTcomo constvalores e atribua-os às strings 'LOGIN'e 'LOGOUT', 
respectivamente. Em seguida, edite o authReducer()e os criadores de ação para fazer 
referência a essas constantes em vez de valores de string.

Nota: Geralmente é uma convenção escrever constantes em maiúsculas, e isso também 
é uma prática padrão no Redux. */

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};