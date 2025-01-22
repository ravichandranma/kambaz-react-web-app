import Labs from "./Labs";
import Kambaz from "./kambaz";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
export default function App() {
 return (
  <HashRouter>
   <div>
    <a href="https://github.com/ravichandranma/kambaz-react-web-app/tree/master">Github Mahadharsan Ravichandran</a>
    <Routes>
     <Route path="/" element={<Navigate to="Kambaz"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kambaz/*" element={<Kambaz />} />
    </Routes>
   </div>
  </HashRouter>
);}
