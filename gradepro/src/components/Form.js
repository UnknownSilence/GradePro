import React from "react";

class Form extends React.Component {
    render() {
        return (

            <div>
                <form onSubmit={this.props.loginUser}>
                    <input type="text" name="user" placeholder="Username..."></input>
                    <input type="password" name="pass" placeholder="Password..."></input>
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default Form;