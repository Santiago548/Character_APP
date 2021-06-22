import React, { Component } from 'react'

export default class Likes extends Component {
    constructor() {
        super()
        this.state = {
            likes: 0
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let likeInput = this.element.value
        this.setState(prevState => {
            console.log(this.element.value)
            
            return {
                ...prevState.likes,
                likes: parseInt(prevState.likes) + parseInt(likeInput)
            }
        })
    }

    handleChange = (event) => {
        let likeInput = event.target.value
        this.setState({
            likes: likeInput
        })
       
    }



    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input  ref={el => this.element = el} name='user-likes' className='user-likes' type='number'></input>
                    <button type='submit' className='like-button'>{this.state.likes}</button>
                </form>
            </div>
        )
    }
}

// this.handleSubmit = this.handleSubmit.bind(this);