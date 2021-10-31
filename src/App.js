
import { NotFound } from 'http-errors';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Information from './components/Information/Information';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Packages from './components/Packages/Packages';
import AuthProvider from './context/AuthProvider';
import './App.css'
import WhyTravel from './components/WhyTravel/WhyTravel';
import MyBooking from './components/ManageOrders/MyBooking';
import AddNewService from './components/AddNewService/AddNewService';
import HomePackage from './components/HomePackage/HomePackage';
import ManageAllBookings from './components/ManageAllBookings/ManageAllBookings';


function App() {
  return (
    <div>

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/information/:serviceid'>
              <Information></Information>
            </PrivateRoute>


            <PrivateRoute path='/manageAllBookings'>
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>

            <PrivateRoute path='/addService'>
              <AddNewService></AddNewService>
            </PrivateRoute>


            <Route path='/services'>
              <HomePackage></HomePackage>
            </Route>


            <Route path='/whyTravel'>
              <WhyTravel></WhyTravel>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
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
