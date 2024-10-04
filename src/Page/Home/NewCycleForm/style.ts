import styled from "styled-components";

export const FormContainer  = styled.div`

width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
color: ${(props)=>props.theme["gray-100"]};
font-size: 1.125rem;
font-weight: bold;
flex-wrap: wrap;
   
`

export  const   BaseCountdownButton = styled.button`
   width: 100%;
   padding: 1rem;
   border-radius: 8px;
   display: flex;

   align-items: center;
   justify-content: center;
   
   gap:0.5rem;
   font-weight: bold;

   cursor: pointer;
   background: ${(props)=>props.theme["green-500"]};
   color: ${(props)=>props.theme["gray-100"]};

   &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
   }
   transition: 0.4s;

`
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: solid 2px ${(props)=>props.theme["gray-700"]};

  font-weight: bold;
  font-size: 1.125rem;
  padding:  0 0.25rem;
  color: ${(props)=>props.theme["gray-100"]};

  &::placeholder{
     color: ${(props)=>props.theme["gray-400"]};
  }

  &:focus{
      box-shadow: none ;
      border-color:  ${(props)=>props.theme["green-500"]};   
  }
`
export const TaskInput = styled(BaseInput)`
    flex: 1;  
    &::-webkit-calendar-picker-indicator{
      display: none !important;
    }
`
export const MinutsAmoutInput = styled(BaseInput)`
width: 4rem;
`