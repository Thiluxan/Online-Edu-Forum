import React,{useState} from 'react'
import axios from 'axios'
import AddRow from './AddRow'

export default function NewCategory() {
    const[category,setCategory] = useState("")
    const[code,setCode] = useState("")
    const[error,setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/addCategory",{
            categoryCode:code,
            categoryName: category
        })
        .then(res => {
            setError("")
            window.location.replace("/")
        })
        .catch(err => {
            setError(err)
            console.log(err)
        })
    }
    return (
        <div>
        <AddRow/>
        <div className="document">
            <h1>Add New Category</h1>
            {error && (<p className="error">Unable to add at the moment. Try new category code</p>)}
            <form onSubmit={handleSubmit}>
                <label><h4>Category Name: </h4></label>
                <input type="text" onChange={(e) => setCategory(e.target.value)} value={category} required/><br/>
                <label><h4>Category Code: </h4></label>
                <input type="text" onChange={(e) => setCode(e.target.value)} value={code} required/><br/><br/>
                <button type="submit" className="submit">Add Category</button>
            </form>
        </div>
        </div>
    )
}
