import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function Category() {
    const [categories,setCategories] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/categories")
        .then(response => {
            setCategories(response.data)
        })
    },[])
    return (
        <div className="categories">
            <button className="homeBtn"><a href="/home">Home</a></button>
            {categories.map(category => (
                <div className="card" key={category.categoryCode}>
                    <button className="catBtn">
                        <a href={"/documents/"+category.categoryCode}>
                            {category.categoryName}
                        </a>
                    </button>
                    
                </div>
            ))}
        </div>
    )
}
