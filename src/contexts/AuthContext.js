import React, { useContext, useEffect, useState } from 'react';
import auth from '../firebase';
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();

    function signup(username, password) {
        return auth.createUserWithUsernameAndPassword(username, password)
    }

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         setCurrentUser(user)
    //     })
    //     return unsubscribe
    // },[])
    const value = {
        currentUser,
        signup  
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}