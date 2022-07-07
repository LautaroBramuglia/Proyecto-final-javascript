import './App.css';
import Navbar from "./components/navbar";

const App = () => {
  return(
    <div>
      <Navbar/>
      <itemListContainer greeting='Hola soy el ItemListContainer' />
    </div>
  );
}

export default App;
