import React, {useState} from 'react'
import styled from 'styled-components'
import arrowUp from './svg/arrowUp.svg'
import arrowDown from './svg/arrowDown.svg'

const AdminOption = styled.li`
display: flex;
flex-direction: column;
margin-bottom: 7px;
`
const TitleWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
& h4{
font-family: HSE Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;
margin: 0;
color: #BA0000;
}
`
const MembersBtn = styled.button`
background: transparent;
font-family: HSE Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;
color: rgba(0, 0, 0, 0.5);
border: none;
padding: 0;
padding-right: 49px;
position: relative;
cursor: pointer;
&::after {
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    background-image: url(${props => props.visible? arrowDown : arrowUp });
    background-size: contain;
    background-repeat: no-repeat;
    right: 19px;
    top: 9px;
}
`
const MembersList = styled.ul`
list-style: none;
display:${props => props.visible? 'flex': 'none'};
flex-direction: column;
align-items: flex-start;
padding: 0;
padding-left: 41px;
transition: 0.3s all;
`
const MembersOption = styled.li`
font-family: HSE Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;
margin-bottom: 5px;
`
const NotAccepted = (props)  => {

    const {list} = props;
    const [visible, setVisible] = useState(false)
    const elements = list.map((e,i) => {
        return (
            <MembersOption key={i}>
                {e.name}
            </MembersOption>
        )
    })
    return (
        <AdminOption>
            <TitleWrapper>
                    <h4>Не приняли</h4>
                    <MembersBtn visible={visible} onClick={() => setVisible(e => !e)}>24 человека</MembersBtn>
            </TitleWrapper>
            <MembersList visible={visible}>
                {elements}
            </MembersList>
        </AdminOption>
    )
}

export default NotAccepted
