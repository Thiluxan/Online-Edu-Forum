import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AddRow from './AddRow'


export default function NewDocument() {
    const[categories,setCategories] = useState([])
    const[author,setAuthor] = useState([])
    const[category,setCategory] = useState("")
    const[description,setDescription] = useState("")
    const[error,setError] = useState("")
    const[selectedFiles,setSelectedFiles] = useState(undefined)


    const handleSubmit = e => {
        e.preventDefault()
        let data = new FormData()
        data.append('file',selectedFiles[0])
        data.append('author',author)
        data.append('category',category)
        data.append('description',description)
        axios.post('http://localhost:8080/upload',data,{})
        .then(response => {
            alert("Document uploaded successfully")
            window.location.replace(`/documents/${category}`)
        })
        .catch(err => {
            console.log(err)
            setError('Unable to upload at the moment')
        })
    }

    useEffect(() => {
        axios.get("http://localhost:8080/categories")
        .then(response => {
            setCategories(response.data)
        })
    },[])
    return (
        <div>
        <AddRow/>
        <div className="document">
            <h1>Add New Document</h1>
            {error && (<p className="error">Unable to add at the moment</p>)}
            <form onSubmit={handleSubmit}>
                <label><h4>Author: </h4></label>
                <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} required/><br/>
                <label><h4>Description: </h4></label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} required/><br/>
                <label><h4>Category: </h4></label>
                <select onChange = {(e) => setCategory(e.target.value)} required>
                    <option value="">.....</option>
                    {categories.map(cat => (
                        <option key={cat.categoryCode} value={cat.categoryCode}>{cat.categoryName}</option>
                    ))}
                </select><br/>
                <label><h4>Document:</h4><span>(Max File Size 1MB)</span></label>
                <input type="file" onChange={(e) => setSelectedFiles(e.target.files)} required />
                <button type="submit" className="submit">Add Document</button>
            </form>
        </div>
        </div>
    )
}
