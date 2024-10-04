
import { createContext,useContext, useState } from "react"

const CycleContext = createContext({
    activeCycle : 5
    
} as any)

export function Home(){
    const [activeCycle , setActiveCycle] = useState(0)


    return( 
        <CycleContext.Provider value={{activeCycle,setActiveCycle}}>
        <div>
            <CountDown/>
            <NewCycleForm/>
        </div>
        </CycleContext.Provider>
         )
}

export function CountDown(){

let  { activeCycle} = useContext(CycleContext)
    return(
        <div>
            <h1>CountDown : {activeCycle}</h1>
         
        </div>
       
    )


}

export function NewCycleForm(){

    const  { activeCycle, setActiveCycle} = useContext(CycleContext)
    return(
        <h1>NewCycleForm : {activeCycle}
        <button onClick={()=>{
            setActiveCycle(2)
        }}>Alterar o Ciclo Ativo</button>
        </h1>
        
    )

}