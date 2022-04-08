import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,Navigate
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => (state.user.currentUser) ?(state.user.currentUser.isAdmin):(false))
  console.log(admin)
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
          
        </Route>

       
        
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route exact path="/">
                {!admin?(<Redirect to="/login" />):(<Redirect to="/home"/>)}
              </Route>
            </div>
          </>
      </Switch>
    </Router>
  );
}

export default App;
