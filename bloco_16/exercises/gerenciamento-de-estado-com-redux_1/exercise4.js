/* Use uma instrução Switch para lidar com várias ações
Você pode dizer ao Redux store como lidar com vários tipos de ação. 
Digamos que você esteja gerenciando a autenticação do usuário em sua 
loja Redux. Você deseja ter uma representação de estado para quando 
os usuários estão conectados e quando estão desconectados. Você 
representa isso com um único objeto de estado com a propriedade 
authenticated. Você também precisa de criadores de ação que criam 
ações correspondentes ao login e logout do usuário, junto com os próprios 
objetos de ação.

O editor de código tem uma loja, ações e criadores de ação configurados 
para você. Preencha a reducerfunção para lidar com várias ações de autenticação. 
Use uma switchinstrução JavaScript no reducerpara responder a diferentes eventos 
de ação. Este é um padrão padrão na escrita de redutores Redux. A instrução 
switch deve ser alternada action.typee retornar ao estado de autenticação apropriado. */

const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
  switch(action.type) {
    
    case "LOGIN":
     return {authenticated: true};
   
    case "LOGOUT":
      return {authenticated: false};
     
    default:
    return state;
  }
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };