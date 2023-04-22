import React, {useEffect, useState} from "react"

export default function App(){

    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch("http://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => setImage(data.message))
    }, [])

    return(
        image ? <img src={image} alt="A Random Dog"/> : <p>Loading...</p>
    )
}