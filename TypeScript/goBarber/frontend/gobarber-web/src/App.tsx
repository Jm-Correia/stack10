import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/Signin/index';
//import SignUp from './pages/Signup/index';

import {AuthProvider} from './hooks/AuthContext';

const App: React.FC = () =>(
  <>
  <AuthProvider>
    <SignIn/>
  </AuthProvider>
  
  <GlobalStyle/>
  </>
)

export default App;
