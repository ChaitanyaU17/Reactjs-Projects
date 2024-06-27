import './App.css';
// import TodoList from './components/TodoList';
// import LudoBoard from './components/LudoBoard';
// import Lottery from './components/Lottery';
// import { sum } from './components/Helper';
//import Form from './components/Form';
// import Comments from './components/Comments';
import Jocker from './components/Joker';

function App() {

  // let winCondition = (ticket) => {
  //   return ticket[0] === 0;
  return (
    // <div className="App">
    //  <Lottery n={4} winCondition={winCondition} />
    // </div>
    <div className='app'>
      <Jocker />
    </div>
  );
}

export default App;
