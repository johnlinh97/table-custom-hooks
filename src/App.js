import './App.css';

import Albums from './components/Albums';
import Photos from './components/Photos';
import Todos from './components/Todos';


function App() {

  return (
    <div>
      <h1>Custom Table Hooks</h1>
      <Albums />
      <Todos />
      <Photos />
    </div>
  );
}

export default App;
