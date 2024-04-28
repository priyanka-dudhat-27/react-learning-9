/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [page, setPage] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:5000/products/?page=${page}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
            })
    }, [page])

    const handleNextClick = () => {
        setPage(page + 1);
    }

    return (
        <div>
            <h2>Pagination</h2>
            <button onClick={()=>{setPage(page-1)} }>Prev</button>
            <button>{page}</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    )
}

export default Home
