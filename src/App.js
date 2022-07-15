import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';
import Navbar from "./components/navbar";
import itemListContainer from './components/itemListContainer';

const App = () => {
  const onAdd= (count) =>{
    alert('compraste:'+ count)
  }
  return(
    <div>
      <Navbar/>
      <itemListContainer greeting='Hola soy el ItemListContainer' />
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </div>
  );
}

export default App;
