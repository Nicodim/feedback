import React, {useState} from 'react'
import styled from 'styled-components'
import Appreciated from './appreciated/Appreciated';
import NotAppreciated from './notAppreciated';
import NotAccepted from './notAccepted';

const AdminList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`;

const CommentLink = styled.a`
display: flex;
text-decoration: underline;
color: #004CBA;
font-family: HSE Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;
`

const AdminField = (props) => {
    const {list} = props;

    return (
        <AdminList>
            <Appreciated list={list}/>
            <NotAppreciated list={list}/>
            <NotAccepted list={list}/>
            <CommentLink>Посмотреть комментарии</CommentLink>
        </AdminList>
    )
}

export default AdminField
