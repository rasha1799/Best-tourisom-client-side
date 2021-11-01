import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import Footer from '../src/pages/Home/Home/Footer/Footer';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import ALLOrders from './pages/AllOrders/ALLOrders';
import MYOrders from './pages/MyOrders/MYOrders';
import AddService from './pages/AddService/AddService';
import Booking from './pages/Booking/Booking'
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
        <Route path="/register"><Register></Register></Route>
        <PrivateRoute path="/allOrders"><ALLOrders></ALLOrders></PrivateRoute>
        <PrivateRoute path="/service/:name"><ServiceDetail></ServiceDetail></PrivateRoute>
        <PrivateRoute path="/myOrders"><MYOrders></MYOrders></PrivateRoute>
        <PrivateRoute path="/addService"><AddService></AddService></PrivateRoute>
        <PrivateRoute path="/booking"><Booking></Booking></PrivateRoute>
        <Route path="*"><NotFound></NotFound></Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;