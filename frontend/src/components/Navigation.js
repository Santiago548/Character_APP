import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '17px',
    background: 'blue',
    textDecoration: "none",
    color: "white"
}

const Navigation = () => {
    return (
        <div>
            <NavLink
            to='/about'
            exact
            style={link}
            activeStyle={{
                background: 'darkblue'
            }}>ABOUT</NavLink>
        </div>
    )
}

export default Navigation