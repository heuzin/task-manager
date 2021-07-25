import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'

class LoginPage extends React.Component {
  state = {
    email: '',
    password: '',
  }

  onEmailChange = (e) => {
    const email = e.target.value
    this.setState(() => ({ email }))
  }

  onPasswordChange = (e) => {
    const password = e.target.value
    this.setState(() => ({ password }))
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  componentDidMount() {
    if (this.props.userLogin.userInfo) {
      this.props.history.push('/user/info')
    }
  }

  componentDidUpdate() {
    if (this.props.userLogin.userInfo) {
      this.props.history.push('/user/info')
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        {this.props.userLogin.error && (
          <p>Please provide valid email and password</p>
        )}
        <form onSubmit={this.submitHandler}>
          <input
            placeholder='email'
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <input
            placeholder='password'
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
          <button>login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.userLogin,
})

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
