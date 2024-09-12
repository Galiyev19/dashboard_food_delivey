import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuth } from './store/slice/loginSlice'
import { AuthMe } from './store/slice/adminInfoSlice'

import Layout from './layot/Layout'
import Login from './pages/login/Login'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.adminInfo)
  const [authChecked, setAuthChecked] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(AuthMe());
        localStorage.setItem("token",data.data.token)
      } catch (error) {
        console.error("Error while checking authentication:", error);
      }
    };
    const token = localStorage.getItem("token");
    if (token) {
      setAuthChecked(true);
    } else {
      fetchData(); // Вызов fetchData только если нет токена
    }
  },[dispatch,authChecked,data])

  if (!authChecked) {
    return <Login />;
  }
  return (
    <>
       {authChecked ? <Layout/> : <Login/>}     
    </>
  )
}

export default App
