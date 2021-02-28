/* Enviar dados de ação para a loja
Agora você aprendeu como despachar ações para a loja Redux, mas até agora essas 
ações não continham nenhuma informação além de a type. Você também pode enviar 
dados específicos junto com suas ações. Na verdade, isso é muito comum porque as 
ações geralmente se originam de alguma interação do usuário e tendem a transportar 
alguns dados com eles. A loja Redux frequentemente precisa saber sobre esses dados.

Há um criador básico notesReducer()e um addNoteText()criador de ação definidos no 
editor de código. Conclua o corpo da addNoteText()função para que ele retorne um 
actionobjeto. O objeto deve incluir uma typepropriedade com um valor de ADD_NOTEe 
também uma textpropriedade definida para os notedados que são passados ​​para o criador
 da ação. Ao chamar o criador da ação, você passará informações específicas da nota 
 que pode acessar para o objeto.

Em seguida, termine de escrever a switchdeclaração no notesReducer(). Você precisa 
adicionar um caso que lida com as addNoteText()ações. Este caso deve ser acionado 
sempre que houver uma ação do tipo ADD_NOTEe deve retornar a textpropriedade na 
entrada actioncomo nova state.

A ação é despachada na parte inferior do código. Quando terminar, execute o código 
e observe o console. Isso é tudo o que é preciso para enviar dados específicos da 
ação para a loja e usá-los ao atualizar a loja state.
 */

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
case ADD_NOTE :
return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
return {
  type: ADD_NOTE,
  text: note,
}
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());