import './App.css';
import Body from './components/Body';
import Category from './components/Category';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Documents from './components/Documents';
import NewCategory from './components/NewCategory';
import NewDocument from './components/NewDocument';
import PrivateRoute from './components/Authentication/PrivateRoute'
import {AuthProvider} from "./components/Contexts/AuthContext";
import SignUp from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import ForgotPassword from './components/Authentication/ForgetPassword';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Router>
          <AuthProvider>
        <div className="left">
          <Category/>
        </div>
        <div className="right">
            <Switch>
            <Route exact path="/"><Login/></Route>
            <Route exact path="/signup"><SignUp/></Route>
            <Route exact path="/forgot-password"><ForgotPassword/></Route>
            <PrivateRoute exact path="/home" component={Body}/>
            <PrivateRoute exact path="/documents/:id" component={Documents}/>
            <PrivateRoute exact path="/addCategory" component={NewCategory}/>
            <PrivateRoute exact path="/addDocument" component={NewDocument}/>
            </Switch>
        </div>
        </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
