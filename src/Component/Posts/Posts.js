import React, { Component } from 'react';
import UserHeader from './UserHeader'
import { connect } from 'react-redux'
import { fetchPostAndUser } from '../../Actions'

class posts extends Component {
    componentDidMount() {
        this.props.fetchPostAndUser();
    }

    render() {
        return (
            <div style={{margin: '50px'}}>
                {this.props.post.map(post=>{
                    return(
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <UserHeader userID = {post.userId}/>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {post: state.post};
}
export default connect(mapStateToProps, { fetchPostAndUser })(posts);