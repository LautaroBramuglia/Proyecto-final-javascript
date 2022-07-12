import './App.css';
import ItemCount from './components/ItemCount';
import Navbar from "./components/navbar";

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
