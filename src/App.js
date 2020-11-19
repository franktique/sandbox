import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label='click me!'></Button>
      </header>
    </div>
  );
}

export default App;
