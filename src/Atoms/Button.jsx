import React from 'react'
import styled from 'styled-components'

const bgList = {
    BLUE: '#3283BB',
    GREEN: '#46A6AE',
    PURPLE: '#C129D1',
    YELLOW: '#FDB515'
}

const Button = styled.button`
    color: #fff;
    padding:6px;
    margin:3px;
    font-size: 12px;
    background: ${(props) => bgList[props.color]}; 
`

const BasicButton = (props) => {
    return (
        <Button onClick={props.onClick} color={props.color }>
            {props.Name}
        </Button>
    )
}

export default BasicButton