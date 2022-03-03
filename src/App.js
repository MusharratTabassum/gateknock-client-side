import './App.css';
import Header from './components/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Service from './components/Home/Service/Service';
import Services from './components/Home/Services/Services';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import ServiceInfo from './components/Home/ServiceInfo/ServiceInfo';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/servicedetail/:serviceId">
              <ServiceInfo></ServiceInfo>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>
          <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
