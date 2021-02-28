/* Despachar um Evento de Ação
dispatchmétodo é o que você usa para despachar ações para a loja Redux. 
Chamar store.dispatch()e passar o valor retornado de um criador de ação 
envia uma ação de volta para a loja.

Lembre-se de que os criadores de ação retornam um objeto com uma propriedade 
de tipo que especifica a ação que ocorreu. Em seguida, o método despacha um 
objeto de ação para a loja Redux. Com base no exemplo do desafio anterior, as 
seguintes linhas são equivalentes e ambas despacham a ação do tipo LOGIN:

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
O armazenamento Redux no editor de código tem um estado inicializado que é 
um objeto que contém uma loginpropriedade atualmente definida para false. 
Há também um criador de ação chamado, loginAction()que retorna uma ação do 
tipo LOGIN. Despache a LOGINação para a loja Redux chamando o dispatchmétodo 
e passe a ação criada por loginAction(). */

const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  store.dispatch(loginAction());