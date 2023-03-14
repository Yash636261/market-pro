import './App.css';
// import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Home,
  Error,
  Register,
  Login,
  Verify,
  Dashboard,
  ProtectedRoute,
  ForgotPassword,
  ResetPassword,
  FormComponent,
  CreateProject
} from './pages';
import Navbar from './components/Navbar';
import Description from './components/Description';
import Description2 from './components/Description2';
import Getaway from './components/Getaway';

import { useGlobalContext } from './context';
import Userdetailform from './components/Userdetailform';

function App() {
  // const { isLoading } = useGlobalContext();
  // if (isLoading) {
  //   return (
  //     <section className='page page-center'>
  //       <div className='loading'></div>
  //     </section>
  //   );
  // }
  return (
    <Router basename="/">
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/register' exact>
          <Register />
        </Route>
        <ProtectedRoute path='/card' exact>
          <Card />
        </ProtectedRoute>
        <ProtectedRoute path='/dashboard' exact>
          <Dashboard />
        </ProtectedRoute>
        <ProtectedRoute path='/profile' exact>
          <Profile/>
        </ProtectedRoute>
        <ProtectedRoute path='/userdetailform' exact>
          <Userdetailform/>
        </ProtectedRoute>
        <ProtectedRoute path='/FormComponent' exact>
          <FormComponent/>
        </ProtectedRoute>
        <ProtectedRoute path='/description' exact>
          <Description />
        </ProtectedRoute>
        <ProtectedRoute path='/CreateProject' exact>
          <CreateProject />
        </ProtectedRoute>
        <ProtectedRoute path='/Getaway' exact>
      <Getaway />
        </ProtectedRoute>
        <ProtectedRoute path='/description2' exact>
          <Description2 />
        </ProtectedRoute>
        
        <Route path='/forgot-password' exact>
          <ForgotPassword />
        </Route>
        <Route path='/user/verify-email' exact>
          <Verify />
        </Route>
        <Route path='/user/reset-password' exact>
          <ResetPassword />
        </Route>
        
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
