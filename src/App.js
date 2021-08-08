import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Landing from './components/Landing.jsx';
import Login from './components/Login.jsx';
import ErrorPage from './components/ErrorPage.jsx'

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      {<Header />}
      <Switch>
      	<Route path='/login' component={Login} />
      	<Route exact path='/' component={Landing} />
      	<Route component={ErrorPage} />
      </Switch>
      {<Footer />}
    </div>
  );
}

export default App;
