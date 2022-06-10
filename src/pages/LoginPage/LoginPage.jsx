import { Component } from 'react';
import './LoginPage.css';

export default class LoginForm extends Component {
    state = {
        name: '',
        error: ''
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };
    
    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.setUser(this.state.name);
    };

    render() {
        return (
            <div className="login-container">
                <div className="form-container">
                    <h1 className="login-title">Please enter your username below</h1>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <label>Username</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                        </div>
                        <button type="submit" className="login-button">Sign In</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}