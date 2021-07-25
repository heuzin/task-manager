import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/userActions'

class Header extends React.Component {
  render() {
    return (
      <header>
        {this.props.userLogin.userInfo ? (
          <div>
            <NavLink to='/user/info'>User Info</NavLink>
            <button onClick={this.props.logout}>Logout</button>
          </div>
        ) : (
          <div>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
          </div>
        )}
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.userLogin,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
