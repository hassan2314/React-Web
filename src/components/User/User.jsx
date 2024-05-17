import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { id } = useParams(); // Destructure id from the useParams object
    return (
        <div className=' bg-sky-700 text-center m-auto w-full text-3xl text-white h-full'>
            User : {id}
        </div>
    )
}

export default User
