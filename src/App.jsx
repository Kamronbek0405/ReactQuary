import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { User } from './pages/user/user'
import { EditTodo } from './pages/home/edit-todo/edit-todo'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user/:id' element={<User/>}/>
      <Route path='edit-todo/:id' element={<EditTodo/>}/>
     </Routes>
    </>
  )
}

export default App
