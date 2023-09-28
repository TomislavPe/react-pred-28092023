import React, { useEffect, useState } from 'react'

const Dohvati = () => {
    const [posts, setPosts] = useState()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/")
        .then(res => res.json())
        .then(data => {setPosts(data)})
    },[])

    return (
        <>
            <div>Dohvati</div>
            {
                posts && posts.slice(0, 10).map(({id, title}) => <h2 key={id}>{title}</h2>)
            }
        </>
    )
}

export default Dohvati