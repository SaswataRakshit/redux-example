import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const UserHeader = (props) => {
    const user = props.user.find(user => user.id === props.userID);

    return (
        <div>{user ? <p>{user.name}</p> : null}</div>
    )
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps)(UserHeader);