import React from 'react'
import { connect } from 'react-redux'
import { getUserDetails } from '../actions/userActions'

class UserInfo extends React.Component {
  componentDidMount() {
    this.props.getUserDetails()
  }
  componentDidUpdate() {
    if (!this.props.userLogin.userInfo) {
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      <div>
        <h1>User Info</h1>
        {this.props.userDetails.loading && <p>loading</p>}
        {this.props.userDetails.user && (
          <div>
            <p>{this.props.userDetails.user.name}</p>
            <p>{this.props.userDetails.user.age}</p>
            <p>{this.props.userDetails.user.email}</p>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.userLogin,
  userDetails: state.userDetails,
})

const mapDispatchToProps = (dispatch) => ({
  getUserDetails: () => dispatch(getUserDetails()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
