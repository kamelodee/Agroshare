import React, { Component } from 'react';
 import './Input.css'
class Inputform extends Component {
    render() { 
        return (
            <div className='form-signup'>
                <form  >
                    <label htmlFor='First Name'>First Name</label>
                    <input type="text" placeholder='First Name' />
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" placeholder='Last Name' />
                    <label htmlFor="email"> Email Address</label>
                    <input type="text" placeholder='E-mail' />
                    <label htmlFor="password">Password</label>
                    <input type="text" placeholder='Password' />
                    <label htmlFor="confirm password"> Confirm Password</label>
                    <input type="text" placeholder='Confirm password' />
                    <input className='sub' type="submit" placeholder='Submit' />
                    
            </form>
            </div>
        );
    }
}
 
export default Inputform;