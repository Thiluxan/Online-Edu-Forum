import React,{useRef,useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../Contexts/AuthContext'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }
        if(passwordRef.current.value.length < 6 ){
            return setError('Passwords must be more than 6 characters')
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/home')
        }
        catch{
            setError('Failed to sign up')
        }
        setLoading(false)
    }
    return (
        <div>
            <div className="document">
                    <h1>Enroll in</h1>
                    <hr></hr>
                    {error && (<p className="error">Unable to add at the moment. Try new category code</p>)}
                    <form onSubmit={handleSubmit}>
                            <label><h1>Email</h1></label>
                            <input type="email" ref={emailRef} required /><br/>
                            <label><h4>Password</h4></label>
                            <input type="password" ref={passwordRef} required /><br/>                        
                            <label><h4>Password Confirmation</h4></label>
                            <input type="password" ref={passwordConfirmRef} required /><br/>
                        <button disabled={loading} type="submit">SignUp</button>
                    </form>
            </div>
            <div className="document">
                Already Have an Account? <Link to="/">Login</Link>
            </div>
        </div>
    )
}