
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking/Booking';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Info from './components/Info/Info';
import NurseInfo from './components/Info/NurseInfo';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';

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
