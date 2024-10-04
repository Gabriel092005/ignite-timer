import styled from "styled-components";


export const HeaderContainer = styled.header`

   display: flex;
   align-items: center;
   justify-content: space-between;
   
   img{
      height: 24px;

   }
   nav{
       display: flex;
       gap:0.5rem;
   }
  a{
   width: 3rem;
   height: 3rem;

   display: flex;
   justify-content: center;

   color: ${(props)=>props.theme["gray-100"]};
   border: 3px solid transparent;
   border-bottom: 3px solid transparent;

   &:hover{
      border-bottom:  3px solid ${(props)=>props.theme["green-500"]};
   }
     &:hover{
      color: ${(props)=>props.theme["green-500"]};
     }
  }
`