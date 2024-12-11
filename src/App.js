import './index.css'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
function App() {
  return (
      <div className="App">
        <Header />
        <Home />
        <Login />
        <Dashboard />
        <Footer />
        
      </div>
   
  );
}

export default App;
