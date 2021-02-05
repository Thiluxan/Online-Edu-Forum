import React from 'react'
import { useAuth } from "./Contexts/AuthContext";

export default function AddRow() {
    const {logout} = useAuth()

    async function handleLogout(){
        try{
            await logout()
            window.location.replace('/')
        }
        catch(err) {
            alert('Failed to log out')
        }
    }

    return (
        <div className="addRow">
            <button><a href="/addCategory">Add New Category</a></button>
            <button><a href="/addDocument">Add New Document</a></button>
            <button onClick={handleLogout} style={{backgroundColor:"red",marginLeft:"800px",padding:"15px"}}>Logout</button>
            <br/><hr/>
        </div>
    )
}
