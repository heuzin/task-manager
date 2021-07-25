import React from 'react'
import { connect } from 'react-redux'
import { register } from '../actions/userActions'

class SignUpPage extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    message: null,
  }

  onNameChange = (e) => {
    const name = e.target.value
    this.setState(() => ({ name }))
  }

  onEmailChange = (e) => {
    const email = e.target.value
    this.setState(() => ({ email }))
  }

  onPasswordChange = (e) => {
    const password = e.target.value
    this.setState(() => ({ password }))
  }

  onConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value
    this.setState(() => ({ confirmPassword }))
  }

  onSubmitHandler = (e) => {
    e.preventDefault()

    if (this.state.password !== this.state.confirmPassword) {
      this.setState(() => ({ message: 'Passwords do not match' }))
    } else {
      this.setState(() => ({ message: null }))
      this.props.register(
        this.state.name,
        this.state.email,
        this.state.password
      )
    }
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
    const { name, email, password, confirmPassword, message } = this.state
    const { loading, error } = this.props.userRegister

    return (
      <div>
        <h1>Register</h1>
        {message && <p>{message}</p>}
        {error && <p>Please provide correct information {error}</p>}
        {loading && <p>{loading}</p>}
        <form onSubmit={this.onSubmitHandler}>
          <input
            type='text'
            placeholder='name'
            value={name}
            onChange={this.onNameChange}
          />
          <input
            type='email'
            placeholder='email'
            value={email}
            onChange={this.onEmailChange}
          />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={this.onPasswordChange}
          />
          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={this.onConfirmPasswordChange}
          />
          <button type='submit'>Sign up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.userLogin,
  userRegister: state.userRegister,
})

const mapDispatchToProps = (dispatch) => ({
  register: (name, email, password) =>
    dispatch(register(name, email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
