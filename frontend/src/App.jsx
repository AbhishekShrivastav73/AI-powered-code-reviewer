
import { Route, Routes } from 'react-router-dom';
import CodeAI from './pages/CodeAI';
import Code from './pages/Code';
import Home from './pages/Home';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/1' element={<Code/>}/>
      <Route path='/code-review' element={<CodeAI/>}/>
    </Routes>
   </>
  )
} 

export default App;