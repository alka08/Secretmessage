import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Register';
import Login from './components/Login';
import Register from './components/Register';
import PostSecret from './components/PostSecret';
import SecretList from './components/SecretList';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/post-secret" component={PostSecret} />
        <Route path="/secrets" component={SecretList} />
        <Route path="/" component={Register} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
