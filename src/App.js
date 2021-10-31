import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Blogs from './components/Home/Blogs/Blogs';
import Blog from './components/Home/Blog/Blog';
import Offers from './components/Home/Offers/Offers';
import Offer from './components/Home/Offer/Offer';
import Service from './components/Home/Service/Service';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import MyOrder from './components/Home/MyOrder/MyOrder';
import AllOrders from './components/Home/AllOrders/AllOrders';
import AddNewPackage from './components/Home/AddNewPackage/AddNewPackage';
import About from './components/Home/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AddNewBlog from './components/Home/AddNewBlog/AddNewBlog';
import AddNewOffer from './components/Home/AddNewOffer/AddNewOffer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/offers">
              <Offers />
            </Route>
            <PrivetRoute path="/blog/:blogId">
              <Blog />
            </PrivetRoute>
            <PrivetRoute path="/offer/:offerId">
              <Offer />
            </PrivetRoute>
            <PrivetRoute path="/service/:serviceId">
              <Service />
            </PrivetRoute>
            <PrivetRoute path="/myorders/:email">
              <MyOrder />
            </PrivetRoute>
            <PrivetRoute path="/createPackage">
              <AddNewPackage />
            </PrivetRoute>
            <PrivetRoute path="/addBlog">
              <AddNewBlog />
            </PrivetRoute>
            <PrivetRoute path="/addOffer">
              <AddNewOffer />
            </PrivetRoute>
            <PrivetRoute path="/manageOrder">
              <AllOrders />
            </PrivetRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
