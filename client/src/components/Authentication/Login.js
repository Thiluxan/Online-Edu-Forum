import React,{useRef,useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../Contexts/AuthContext'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const history = useHistory()
    
    async function handleSubmit(e) {
        e.preventDefault()
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)            
        }
        catch{
            alert('Failed to sign in. Check your credentials')
        }
        setLoading(false)
    }

    return (
        <div>
            <div className="document">
                    <h1>Login</h1>
                    <hr></hr>
                    {error && (<p className="error">Unable to add at the moment. Try new category code</p>)}
                    <form onSubmit={handleSubmit}>
                            <label><h4>Email</h4></label>
                            <input type="email" ref={emailRef} required /><br/>
                            <label><h4>Password</h4></label>
                            <input type="password" ref={passwordRef} required /><br/>
                        <button disabled={loading} type="submit">Login</button>
                    </form>
                    <br/>
                    <div className="document" style={{marginLeft:"-0px"}}>
                        <Link to="/forgot-password">Forgot Password</Link>
                    </div>
            </div>
            <div className="document">
                Need an Accoun? <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}