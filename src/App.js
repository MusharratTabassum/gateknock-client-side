import './App.css';
import Header from './components/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import ServiceInfo from './components/Home/ServiceInfo/ServiceInfo';
import Footer from './components/Shared/Footer/Footer';
import AddingService from './components/AddingService/AddingService';
import Registration from './components/Login/Registration/Registration';
import AllOrders from './components/AllOrders/AllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import UpdatingStatus from './components/UpdatingStatus/UpdatingStatus';

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
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/allorders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddingService></AddingService>
            </PrivateRoute>
            <PrivateRoute path="/servicedetail/:serviceId">
              <ServiceInfo></ServiceInfo>
            </PrivateRoute>
            <PrivateRoute path="/orders/updating/:id">
              <UpdatingStatus></UpdatingStatus>
            </PrivateRoute>
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
