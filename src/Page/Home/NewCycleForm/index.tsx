import { useForm } from "react-hook-form";
import { FormContainer, MinutsAmoutInput, TaskInput } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from 'zod'

export function NewCycleForm(){
    const newCycleFormValidationSchema = zod.object({
        task:zod.string().min(5,'Informe a Trefa'),
        minutesAmount:zod.number().min(5).max(60)
      })
    type NewCycleFormData = zod.infer< typeof newCycleFormValidationSchema>
    
   const {register,handleSubmit,watch,reset} = useForm <NewCycleFormData> (
    {
      resolver:zodResolver(newCycleFormValidationSchema),

      defaultValues:{
        task:'',    
        minutesAmount:0
      }

    }
   )

    return(
        <FormContainer>
        <label htmlFor="task">Vou Trabalha Em</label>
        <TaskInput 
        id="task"
        list="task-suggestions" 
        placeholder='Dê um nome para o seu Projecto'
        disabled={!!activeCycle}
        {...register('task')}
        />

       <datalist id='task-suggestions'>
        
        <option value="Projecto 1"></option>
        <option value="Projecto 2"></option>
        <option value="Projecto 3"></option>
        <option value="Projecto 4"></option>
        
       </datalist>

       <label htmlFor="minutesAmount">Durante</label>
       <MinutsAmoutInput
        step={5} 
        min={5}
        max={60} 
        type="number" 
        id="minutesAmount"
        placeholder='00'
        disabled={!!activeCycle}
        {...register('minutesAmount' ,{valueAsNumber:true})}
           />
       
       <span>minutos.</span>
        </FormContainer>
    )
}