import React,{useContext,useState,useEffect} from 'react'
import {auth} from '../../configuration/firebase'

const AuthContext = React.createContext()

export function useAuth (){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const[currentUser, setCurrentUser] = useState()
    const[loading,setLoading] = useState(true)


    const signup = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return auth.signOut()
    }

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const updateEmail = (email) => {
        return currentUser.updateEmail(email)
    }

    const updatePassword = (password) => {
        return currentUser.updatePassword(password)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])

    

    const value = {currentUser,signup,login,logout,resetPassword,updatePassword,updateEmail}
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}