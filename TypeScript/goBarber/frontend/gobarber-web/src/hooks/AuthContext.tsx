import React, {createContext, useCallback, useState, useContext} from 'react';
import api from '../services/api';

interface AuthState{
    token: string;
    user: Object;
}

interface SignInCredentials{
    email:string;
    password:string;
}

interface AuthContextData{
    user: object,
    signIn(credentials: SignInCredentials):Promise<void>;
    signOut():void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {

    const [data, setData] = useState<AuthState>(()=>{
       const token =  localStorage.getItem('@goBarber:token');
       const user = localStorage.getItem('@goBarber:user');

       if(token && user){
           return {token, user:JSON.parse(user)};
       }
       return {} as AuthState;
    });

    const signIn = useCallback( async({email, password} )=>{
       const response = await api.post<{token:string, user:object}>('session', {
           email,
           password,
       })
      const {token, user} = response.data;
      
      localStorage.setItem('@goBarber:token', token);
      localStorage.setItem('@goBarber:user', JSON.stringify(user));
       setData({token,user});
    },[]);

    const signOut = useCallback(()=>{
        localStorage.removeItem('@goBarber:token');
        localStorage.removeItem('@goBarber:user');
        setData({} as AuthState);
    },[]);

    return (
        <AuthContext.Provider value={{user: data.user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData{
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context
}