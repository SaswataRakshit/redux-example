import React from 'react'
import {connect} from 'react-redux'

const result = ({defaultVal}) => {
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Calculated Result is : {defaultVal}</h2>
        </div>
    )
}

const mapPropsToState = (state) => {
    return {defaultVal: state.calculation};
}

export default connect(mapPropsToState)(result);