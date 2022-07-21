import './App.css';
import Counter from './components/counter/Counter';
import Todo from './components/todo/Todo';
import { legacy_createStore as createStore } from "redux"
import { Provider } from "react-redux";
import reducer, { getStore } from './redux';

function App() {

  // const store = createStore(reducer);

  const store = getStore();


  return (
    <div className="app">
      <Provider store={store} >  
      {/* normalde store isimli bir dosyada yaparız */}

      <Counter />
      {/* <Todo /> */}
      </Provider>
    </div>
  );
}

export default App;
