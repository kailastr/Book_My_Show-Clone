import React from 'react'
import Navbar from '../components/Navbar/Navbar.Component';


const DefaultLayoutHoc = (Components) => ({ ...props }) => {
    return (
        <div>
            <Navbar />
            <Components {...props} />
            <footer>Footer</footer>
        </div>
    )
}

export default DefaultLayoutHoc;