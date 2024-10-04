import {Routes,Route} from "react-router-dom";
import { Home } from "./Page/Home/components";
import { History } from "./Page/History";
import { DefaultLayout } from "./layouts/DefaultLeyout";

export function Router (){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
    <Route path="/" element={<Home/>}/>  
    <Route path="/history" element={<History/>}/>
    </Route>
    </Routes>
  )

}