
import'./App.css';
import Home from './Pages/Home/Home'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/user/User";
import NewUser from "./Pages/newUser/NewUser";
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";
import EmployeeList from "./Pages/employeeList/EmployeeList";
import Employee from "./Pages/employee/Employee";
import NewEmployee from "./Pages/newEmployee/NewEmployee";
import Transaction from "./Pages/transaction/Transaction";
import Sales from "./Pages/sales/Sales";
import Calender from "./Pages/Calender/Calender";
import Order from "./Pages/order/Order";
import Login from "./Pages/login/Login";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {

  const {currentUser} = useContext(AuthContext)


  const RequireAuth = ({children}) =>{
    return currentUser ? (children) : <Navigate to="/login"/>
  };
  return (
    <Router>
     
        <Routes> 
        <Route path="/login" element={ <Login/>}/>

          <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/user" element={<RequireAuth><UserList /></RequireAuth> }/>
          <Route path="/user/:userId" element={ <RequireAuth><User /></RequireAuth>}/>
          <Route path="/newUser" element={ <RequireAuth><NewUser /></RequireAuth>}/>
          <Route path="/products" element={ <RequireAuth><ProductList /></RequireAuth>}/>
          <Route path="/product/:productsId" element={<RequireAuth><Product /></RequireAuth> }/>
          <Route path="/newproduct" element={ <RequireAuth><NewProduct /></RequireAuth>}/>
          <Route path="/employee" element={  <RequireAuth><EmployeeList /></RequireAuth>}/>
          <Route path="/employee/:employeeId" element={ <RequireAuth><Employee /></RequireAuth>}/>
          <Route path="/newemp" element={<RequireAuth><NewEmployee /></RequireAuth> }/>
          <Route path="/transaction" element={<RequireAuth><Transaction /></RequireAuth> }/>
          <Route path="/sales" element={ <RequireAuth><Sales /></RequireAuth>}/>
          <Route path="/calender" element={ <RequireAuth><Calender /></RequireAuth>}/>
          <Route path="/order" element={<RequireAuth> <Order /></RequireAuth>}/>
        </Routes>
      
    </Router>
  );
}

export default App;
