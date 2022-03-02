import './App.css';
import Header from './components/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">

            </Route>


          </Switch>

        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
