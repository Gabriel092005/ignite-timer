

import { CountdownContainer,  HomeContainer,  StartCountdownButton, StopCountdownButton} from '../components/styles'
import { createContext, useState  } from 'react'
import {  HandPalm, Play } from 'phosphor-react'
import { NewCycleForm } from '../NewCycleForm'




interface Cycle{
  id:string,
  task:string,
  minutesAmount: number,
  startDate:Date,
  interruptedDate? : Date
  FineshedDate ? : Date
}

interface  CycleContextType {

  activeCycle : Cycle | undefined;
  activeCycleId : string | null
  markCurrentCycleAsFinished : () => void
}
export const CyclesContext =  createContext({} as CycleContextType)

export function Home(){
//O nosso estado vai armazenar um Array de Ciclos;

  const [Cycles,SetCycles] = useState<Cycle[]>([])
  const [activeCycleId, SetActiveCycleId] = useState<string | null>(null)
 



   
   const activeCycle = Cycles.find(cycle=>cycle.id===activeCycleId);

   function markCurrentCycleAsFinished(){

      SetCycles(state=> state.map((cycle)=>{
        if(cycle.id === activeCycleId){
          return { ... cycle , FineshedDate : new Date()}
        } else{
          return cycle
        }
      }))   

   }

  //  const totalSeconds =  activeCycle ? activeCycle.minutesAmount*60:0


  //  function handleCreateNewCycle(data:NewCycleFormData){
  //   const id = String(new Date().getTime)
   
  //      const newCycle: Cycle  = {
  //          id,
  //          task:data.task,
  //          minutesAmount:data.minutesAmount,
  //          startDate: new Date()

  //      }

  //      SetCycles((state)=>[...state, newCycle])
  //      SetActiveCycleId(id)
  //      SetAmountSecondsPassed(0)
  //      reset()
  //  }


  //  const currentSecond = activeCycle?totalSeconds-amountSecondsPassed:0
  //  const minutesAmount = Math.floor(currentSecond/60)
  //  const secondAmount = currentSecond % 60
  //  const minutes =  String(minutesAmount).padStart(2,'0')
  //  const seconds=  String(secondAmount).padStart(2,'0')

  //  useEffect(()=>{
  //   if(activeCycle){

  //         document.title = `${minutes}: ${seconds}`
  //   }


  //  },[minutes,seconds])



  //  const task = watch('task')
  //  const isSubmitDisable= !task

   function HandleInterruptCycle(){

  
     SetCycles(state=>
      state.map(cycles=>{
      if(cycles.id===activeCycleId){
        return {...cycles, interruptedDate : new Date( )}
      }
      else{
        return cycles
      }
   
     }))
   
     SetActiveCycleId(null)

  
   }

   console.log(Cycles);


  return (
    <HomeContainer>
       <form action=""/* onSubmit={handleSubmit(handleCreateNewCycle)}> */>
        <CyclesContext.Provider value={{activeCycle,activeCycleId,markCurrentCycleAsFinished}}>
            <NewCycleForm/>
            <CountdownContainer/>
        </CyclesContext.Provider>
      

          {
            activeCycle?(
              <div>
        <StopCountdownButton onClick={HandleInterruptCycle} type="button">
                     <HandPalm size={24}/>
                     Interromper
        </StopCountdownButton>

              </div>
            ):(
              <StartCountdownButton /*disabled={isSubmitDisable}*/ type="submit">
              Começar <Play size={24} />
            </StartCountdownButton>
            )
          }

   
        </form>
    </HomeContainer>

  
    
    
  )
}