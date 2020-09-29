import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/Signin/index';
//import SignUp from './pages/Signup/index';

import {AuthProvider} from './hooks/AuthContext';
import ToastContainer from './components/Toast';
const App: React.FC = () =>(
  <>
  <AuthProvider>
    <SignIn/>
  </AuthProvider>
  <ToastContainer/>
  <GlobalStyle/>
  </>
)

export default App;
