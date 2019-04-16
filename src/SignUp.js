import React from 'react'

export default class SignUp extends React.Component {
    render() {
        return (
            <form>
                <input type='text' name="username" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}
