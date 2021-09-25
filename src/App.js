
import './App.css';
import Header from './components/Header/Header';
import Scientists from './components/Scientists/Scientists';

function App() {
  // useState[scientist, setScientist] = useState([])
  return (
    <div className="App">
      <Header></Header>
      <Scientists></Scientists>
    </div>
  );
}

export default App;
