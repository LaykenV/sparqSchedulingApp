import { Amplify } from 'aws-amplify';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { AMPLIFY_CONFIG } from './config';
Amplify.configure(AMPLIFY_CONFIG);
import "./styles.css";
import LandingPage from './pages/LandingPage';
import  ProfilePage  from './pages/ProfilePage'
import { BrowserRouter, RouterProvider, Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import { Login } from './components/Login';
import { DataProvider } from './dataContext';
import NavBar from "./components/NavBar";
import { Dashboard } from './pages/Dashboard';

const App = () => {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  const logOut = () => {
    signOut();
    useNavigate("/");
  }

  return (
    
    <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage><Login></Login></LandingPage>}></Route>
        <Route path='/profile' element={<RequireAuth><div style = {{display: 'flex', flexDirection: 'row'}}><NavBar></NavBar><ProfilePage></ProfilePage></div></RequireAuth>}></Route>
        <Route path= '/dashboard' element = {<RequireAuth><div style = {{display: 'flex', flexDirection: 'row'}}><NavBar></NavBar><Dashboard></Dashboard></div></RequireAuth>}/>
        <Route path= '/usermanagement' element = {<RequireAuth><div style = {{display: 'flex', flexDirection: 'row'}}><NavBar></NavBar><div>User Management!!!</div></div></RequireAuth>}/>
      </Routes>
    </BrowserRouter>
    </DataProvider>
  )

  
  };
  

export default App;



ReactDOM.createRoot(document.getElementById('root')).render(<Authenticator.Provider> <App /> </Authenticator.Provider>);
