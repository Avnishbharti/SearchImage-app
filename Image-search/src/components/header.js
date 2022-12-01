import React, { useState } from 'react'
import axios from 'axios'
import './header.css'
function App() {
    const [images, setImages] = useState("")
    const [result, setResult] = useState([])

    const changeImage = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${images}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`)
            .then((response) => {
                setResult(response.data.results);
            })
    }
    return (
        <>
            <div className='container text-center my-5'>
                <div className='head'><h1 className='heading'>React Photo Search </h1>
                <button className='bookmark'>Bookmark</button></div>
                <input type="text" className='form' placeholder='search image' 
                value={images} onChange={(e) => {
                    setImages(e.target.value)
                }} />
                <button type='submit' onClick={changeImage} className='btn btn-primary my-2'>search</button>
            </div>

            <div className="container">
                <div class="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div class="col-lg-4 col-md-4 col-6 "  id='imagehover'>
                                    <img class="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default App