import React from 'react'
import {connect} from 'react-redux'
import { increase } from '../../Actions'
import { decrease } from '../../Actions'

const calculator = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick = {()=>props.increase(1)}>Increase</button>
            <button style={{marginLeft: '5px'}} onClick={()=> props.decrease(1)}>Decrease</button>
            <button style={{marginLeft: '5px'}} onClick={()=> props.increase(3)}>Add 3</button>
            <button style={{marginLeft: '5px'}} onClick={()=> props.increase(5)}>Add 5</button>
            <button style={{marginLeft: '5px'}} onClick={()=> props.decrease(3)}>Deduct 3</button>
            <button style={{marginLeft: '5px'}} onClick={()=> props.decrease(5)}>Deduct 5</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

export default connect(mapStateToProps, {increase, decrease})(calculator);