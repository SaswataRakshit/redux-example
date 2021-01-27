import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectSong } from '../../Actions'

class songList extends Component {

    render() {
        console.log(this.props)
        return (
            <div style={{ margin: '50px' }}>
                <h3>Song List</h3>
                {this.props.songs.map((data, index) =>
                    <div key={index}>
                        <div style={{ display: 'flex' }}>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li>{data.title}</li>
                            </ul>
                            <button style={{ width: '60px', height: '25px', marginLeft: '50px', marginTop: '15px' }} onClick={() => this.props.selectSong(data)}>Select</button>
                        </div>
                        <hr />
                    </div>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong })(songList);