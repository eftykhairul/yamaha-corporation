
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Dashbord from './components/Dashbord/Dashbord';
import AddService from './components/AddService/AddService';
import Booking from './components/Booking/Booking/Booking';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Info from './components/Info/Info';
import NurseInfo from './components/Info/NurseInfo';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Management from './components/Management/Management';
import NotFound from './components/NotFound/NotFound';
import Speciallist from './components/Speciallist/Speciallist';
import AuthProvider from './context/AuthProvider';
import MyOrder from './components/MyOrder/MyOrder';

function App() {
  return (
    <div className="">
      
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/info/:Id'>
            <Info></Info>
          </PrivateRoute>
          <PrivateRoute path='/nurseInfo/:Id'>
            <NurseInfo></NurseInfo>
          </PrivateRoute>
          <PrivateRoute path='/booking/:serviceId'>
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path='/dashbord'>
            <Dashbord></Dashbord>
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/myOrder'>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <Route path='/speciallist'>
            <Speciallist></Speciallist>
          </Route>
          <Route path ='/management'>
            <Management></Management>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
