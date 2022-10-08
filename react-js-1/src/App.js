
import './App.css';
import ChildComponent1 from './component/ChildComponent1/ChildComponent1';
import ChildComponent2 from './component/ChildComponent2';
import ChildComponent3 from './component/ChildComponent3';

function App() {
  return (
    <div className="App">
      Hello, this is React
      <br />
      <h1>App</h1>
      <ChildComponent1 />
      <ChildComponent2 />
      <ChildComponent3 />
    </div>
  );
}

export default App;
