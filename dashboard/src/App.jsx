import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Layout from './layot/Layout'
import Login from './pages/login/Login'
import { selectIsAuth } from './store/slice/loginSlice'

function App() {
  const isAuth = useSelector(selectIsAuth)
  useEffect(() => {
    console.log(isAuth)
  },[isAuth])
  return (
    <>
       {isAuth ? <Layout/> : <Login/>}     
    </>
  )
}

export default App
