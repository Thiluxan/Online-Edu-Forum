import React,{useRef,useState} from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../Contexts/AuthContext'

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error,setError] = useState('')
    const[loading,setLoading] = useState(false)
    const [message,setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef).then(alert('Check you email'))
            alert('Check your email for further instructions')
        }
        catch{
            alert('Failed to reset password')
        }
        setLoading(false)
    }
    return (
        <div>
            <div className="document">
                    <h1>Reset Password</h1><hr/>
                    {error && (<p className="error">{error}</p>)}
                    {message && (<p className="error">{message}</p>)}
                    <form onSubmit={handleSubmit}>
                            <label><h4>Email</h4></label>
                            <input type="email" ref={emailRef} required />
                        <button disabled={loading} type="submit">Reset Password</button>
                    </form>
                    <div className="document" style={{marginLeft:"0px"}}>
                        <Link to="/">Login</Link>
                    </div>
            </div>
        </div>
    )
}