import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Sidebar from './Components/Sidebar'
import ForgotPassword from './Components/ForgotPassword'
import ResetPassword from './Components/ResetPassword'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Sidebar/>}></Route>
          <Route path='/forgetPassword' element={<ForgotPassword/>}></Route>
          <Route path='/resetPassword/:token' element={<ResetPassword/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
