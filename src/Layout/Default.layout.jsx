import React from 'react'
import Navbar from '../components/Navbar/Navbar.Component';


const DefaultLayoutHoc = (Components) => ({ ...props }) => {
    return (
        <div>
            <Navbar />
            <Components {...props} />
            <div>footer</div>
        </div>
    )
}

export default DefaultLayoutHoc;