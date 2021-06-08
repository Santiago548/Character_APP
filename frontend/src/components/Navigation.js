import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '20px',
    background: 'white',
    textDecoration: "none",
    color: "black"
}

const Navigation = () => {
    return (
        <div>
            <NavLink
            to='/'
            exact
            style={link}
            activeStyle={{
                background: 'black',
                color: 'white'
            }}>HOME</NavLink>

            <NavLink
            to='/about'
            exact
            style={link}
            activeStyle={{
                background: 'black',
                color: 'white'
            }}>ABOUT</NavLink>

            <NavLink
            to='/general'
            exact
            style={link}
            activeStyle={{
                background: 'black',
                color: 'white'
            }}>General Characters</NavLink>

            <NavLink
            to='/scifi'
            exact
            style={link}
            activeStyle={{
                background: 'black',
                color: 'white'
            }}>Sci-fi Characters</NavLink>

            <NavLink
            to='/fantasy'
            exact
            style={link}
            activeStyle={{
                background: 'black',
                color: 'white'
            }}>Fantasy Characters</NavLink>

            <NavLink
            to='/search'
            exact
            style={link}
            activeStyle={{
                background: 'black',
                color: 'white'
            }}>SEARCH</NavLink>
        </div>
    )
}

export default Navigation