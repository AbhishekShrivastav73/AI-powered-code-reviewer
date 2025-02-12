
import { Route, Routes } from 'react-router-dom';
import CodeAI from './pages/CodeAI';
import Code from './pages/Code';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Code/>}/>
      <Route path='/2' element={<CodeAI/>}/>
    </Routes>
   </>
  )
} 

export default App;