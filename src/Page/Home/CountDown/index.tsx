import { useContext, useEffect, useState } from "react";
import { CountdownContainer, Separator } from "./style";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../components";

export function CountDown(){
  const {activeCycle,activeCycleId,markCurrentCycleAsFinished } = useContext(CyclesContext)

   const [amountSecondsPassed,SetAmountSecondsPassed] = useState(0)

   const totalSeconds =  activeCycle ? activeCycle.minutesAmount*60:0
  
  

  useEffect(()=>{
    let Interval : number;
     if(activeCycle){
     const SecondsDifference=differenceInSeconds( new Date(),activeCycle.startDate )
      Interval = setInterval(()=>{
        if(SecondsDifference >= totalSeconds){
          
          markCurrentCycleAsFinished()
            SetAmountSecondsPassed(totalSeconds)
            clearInterval(Interval)
           
        }else{
       
          SetAmountSecondsPassed( SecondsDifference)
          
        }

    


      },1000)
     }
   

     return ()=>{
      clearInterval(Interval)
     }

   },[activeCycle, totalSeconds, activeCycleId,markCurrentCycleAsFinished])

   
   const currentSecond = activeCycle?totalSeconds-amountSecondsPassed:0
   const minutesAmount = Math.floor(currentSecond/60)
   const secondAmount = currentSecond % 60
   const minutes =  String(minutesAmount).padStart(2,'0')
   const seconds=  String(secondAmount).padStart(2,'0')

   useEffect(()=>{
    if(activeCycle){

          document.title = `${minutes}: ${seconds}`
    }


   },[minutes,seconds])



    return(
        <CountdownContainer>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
        <Separator>:</Separator>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span> 
      </CountdownContainer>
    )
}