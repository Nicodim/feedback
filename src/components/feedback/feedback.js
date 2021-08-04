import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import AdminField from '../adminField/AdminField'
import check from './svg/check.svg'
import noCheck from './svg/noCheck.svg'
import pen from './svg/pen.svg'

const FeedbackWrapper = styled.div`
display: flex;
flex-direction: column;
font-family: HSE Sans;
max-width: 450px;
padding: 50px 65px 62px 100px;
margin: 0 auto;
box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.25);
background-color: ${ props => {
    if(props.answer && (props.active === 'Не принял' || props.active === '')) {
        return '#F9EEEE'
    }
    if(props.answer && (props.active === 'Ок' || props.active === 'Добровольно отсутствовал')) {
        return '#F9F8EE'
    }
    if(props.answer && props.active === 'Отлично') {
        return '#F0F9EE'
    }
}};
`;

const FeedbackList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`;

const FeedbackItem = styled.li`
display: flex;
margin-bottom: 6px;
&:last-child {
    margin-bottom: 10px;
}
`;
const RadioOption = styled.input`
border: 0;
clip: rect(0 0 0 0);
height: 1px;
margin: -1px;
overflow: hidden;
padding: 0;
position: absolute;
white-space: nowrap;
width: 1px;
& :active,
    :focus{
    border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
    }
`;
const AnswerOption = styled.div`
position: relative;
display: flex;
padding-left: 35px;
margin: 0;
font-family: HSE Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;
margin-bottom: 6px;
&::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url(${ props => (props.active === 'Не принял' || props.active === '') ? noCheck : check});
    top: 4px;
    left: 5px;
    background-repeat: no-repeat;
    background-size: contain;
}
`
const AddMessage = styled.div`
text-align: left;
max-width: 300px;
font-family: HSE Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 19px;
color: rgba(0, 0, 0, 0.5);
`
const Label = styled.label`
font-size: 18px;
line-height: 30px;
position: relative;
padding-left: 43px;
width: auto;
&::before {
content: '';
position: absolute;
width: 18px;
height: 16px;
border: 1px solid #000000;
left: 11px;
top: 7px;
}
&::after {
    content: '';
    width: 14px;
    height: 12px;
    position: absolute;
    left: 13px;
    top: 9px;
    border: 1px solid #ffffff;
    background-color: ${props =>props.checked? '#000000' : '#FFFFFF'};
}
`
// const ComLabel = styled.label`
// position: relative;
// &::after{
//     content: '';
//     width: 24px;
//     height: 24px;
//     position: absolute;
//     background-image: url(${pen});
//     background-repeat: no-repeat;
//     background-position: center;
// }
// `

const CommentWrapper = styled.div`
margin-bottom: 14px;
& input {
    border: 1px solid rgba(0, 0, 0, 0.5);
    font-family: HSE Sans;
    width: 100%;
    min-height: 40px; 
    padding-left: 43px;
    font-size: 18px;
    line-height: 30px;  
    position: relative;
    background-image: url(${props => props.active.length > 0? null : pen});
    background-repeat: no-repeat;
    background-position: top 10px left 165px;
}
`
const ButtonWrapper = styled.div`
display: flex;
justify-content: flex-end;
& :first-child {
    margin-right: 15px;
}
`
const Button = styled.div`
color: ${props => props.revers? '#FFFFFF' : '#000000'};
background-color: ${props => props.revers? '#000000' : '#FFFFFF'};
padding: 0 23px;
font-size: 18px;
height: 30px;
line-height: 30px;
flex-grow: 1;
font-style: normal;
font-weight: ${props =>props.revers? 600 : 'normal'};
cursor: pointer;
`
const Feedback =() => {
    const [active, setActive] = useState('')
    const [answer, setAnswer] = useState(false)

    const hendleChange = (e) => {
        setActive(e.target.value);
    }
    let testField = [{name: 'Игорь Иванович Пупкин'},{name: 'Вася Павлович Васильев'}, {name: 'Татьяна Игоревна Татьянова'}]
    return (
        <FeedbackWrapper active={active} answer={answer}>
           {/* {!answer && 
           <Fragment>
            <FeedbackList>
            <FeedbackItem>
                <RadioOption id='feedback1' name="feedback" value='Отлично' type='radio' onChange={hendleChange}/>
                <Label checked ={ active === 'Отлично'} htmlFor='feedback1'>Отлично</Label>
            </FeedbackItem>
            <FeedbackItem>
                <RadioOption id='feedback2' name="feedback" value='Ок' type='radio' onChange={hendleChange}/>
                <Label checked = { active === 'Ок'} htmlFor='feedback2'>Ок</Label>
            </FeedbackItem>
            <FeedbackItem>
                <RadioOption id='feedback3' name="feedback" value='Не принял' type='radio' onChange={hendleChange}/>
                <Label checked = { active === 'Не принял'} htmlFor='feedback3'>Не принял</Label>
            </FeedbackItem>
            <FeedbackItem>
                <RadioOption id='feedback4' name="feedback" value='Добровольно отсутствовал' type='radio' onChange={hendleChange}/>
                <Label checked = { active === 'Добровольно отсутствовал'} htmlFor='feedback4'>Добровольно отсутствовал</Label>
            </FeedbackItem>
        </FeedbackList>
        <CommentWrapper active={active}>
                <input id='com' type='text' placeholder='Комментарий...' onChange={hendleChange}></input>
        </CommentWrapper>
        <ButtonWrapper>
            <Button revers={false}>
                Отменить
            </Button>
            <Button revers={true} onClick={()=>setAnswer(true)}>
                Сохранить
            </Button>
        </ButtonWrapper>
        </Fragment>
        }
        {answer && 
        <Fragment>
            <AnswerOption active={active}>{active !== '' ? active : 'Ответ не был выбран' }</AnswerOption>
            {(active === 'Не принял' || active === '')? <AddMessage>Вскоре вам перезвонит наш сотрудник для уточнения деталей.</AddMessage> : null}
        </Fragment>
        } */}
         <AdminField list={testField}/>
        </FeedbackWrapper>
    )
}

export default Feedback
