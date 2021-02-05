import axios from 'axios'
import React, { useState,useEffect } from 'react'
import Pagination from "./Pagination";
import AddRow from './AddRow'

function Documents(props) {
    const[code,setCode] = useState(props.match.params.id)
    const[category,setCategory] = useState("")
    const[filesInfo,setFilesInfo] = useState([])
    const[documentsPerPage] = useState(5)
    const[currentPage,setCurrentPage] = useState(1)

    const indexOfLastDocument = currentPage * documentsPerPage;
    const indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
    const currentDocuments = filesInfo.slice(indexOfFirstDocument, indexOfLastDocument);

    const changePage = (number) => {
        setCurrentPage(number);
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/categories/${code}`)
        .then(response => {
            setCategory(response.data)
            axios.get(`http://localhost:8080/${code}/documents`)
            .then(result => {
                console.log(result.data)
                setFilesInfo(result.data)
            })
            .catch(error => console.log(error))
        })
        .catch(err => console.log(err))

    },[])
    return (
        <div>
        <AddRow/>
        <div className="document">
            <h1>{category}</h1>
            {currentDocuments.map(file => (
                <div className="download">
                    <b>{file.description}</b><br/>
                    <a href={file.url}>{file.name}</a><br/>
                    <span>Author: {file.author}</span>
                </div>
            ))}
            <br/>
            <Pagination documentsPerPage={documentsPerPage} totalDocuments={filesInfo.length} Paginate={changePage} />
        </div>
        </div>
    )
}

export default Documents

