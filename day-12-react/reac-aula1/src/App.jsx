const Frase = () => {
  return (
      <p>Eu sou uma frase!</p>
   
  )
}
const Hello = () => {
  return (
    <h1>Eu não sou um oi, eu sou um Hello, ou HI, Tu speak inglixe?</h1>
  )
}
const App = () => {
  //parte lógica do componente
  return (
    //parte visível para o usuário
    <div>
    <h1>Esse é o titulo!</h1>

    <Hello />
    <Frase />
    </div>
  );
}
export default App;
