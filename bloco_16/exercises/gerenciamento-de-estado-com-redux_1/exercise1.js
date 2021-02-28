/* Defina um Criador de Ação
Após criar uma ação, o próximo passo é enviar a ação 
para a loja Redux para que ela atualize seu estado. 
No Redux, você define criadores de ação para fazer isso. 
Um criador de ação é simplesmente uma função JavaScript 
que retorna uma ação. Em outras palavras, os criadores 
de ação criam objetos que representam eventos de ação.

Defina uma função chamada actionCreator()que retorne o 
actionobjeto quando chamada. */


const action = {
    type: 'LOGIN'
  }
  // Define an action creator here:
  
  function actionCreator(){
    return action
  }