import './App.css';
import Login from './Screens/Login';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Replist from './Screens/Replist';
import Categories from './Screens/Categories';

function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route exact path='/' element={<Login />} />
                  <Route exact path='/app/replist' element={<Replist />} />
                  <Route exact path='/app/catagories' element={<Categories/>}/>
              </Routes>
          </Router>
    </div>
  );
}

export default App; 
