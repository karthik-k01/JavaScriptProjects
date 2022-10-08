import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBarComponent
  from './components/NavBar';
import Products
  from './components/Products';
  import ParentComponent from './components/ParentComponent';
function App() {
  return (
    <div className="App">
      {/* <NavBarComponent />
      <Products /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
