import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import CardTop from './components/cardtop/CardTop';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardTop />
      <Content />
    </div>
  );
}

export default App;
