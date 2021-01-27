import React from 'react'
import { connect } from 'react-redux'

const songSelect = ({ selectedSong }) => {
    return (
        <div style={{ margin: '50px' }}>
            {selectedSong != null ?
                <div>
                    <h3>Song Selected</h3>
                    <strong>Title: {selectedSong.title}</strong>
                    <br />
                    <span>Duration: {selectedSong.duration}</span>
                </div>
                : <h3>Select A Song</h3>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(songSelect);