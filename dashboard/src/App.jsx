import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuth } from './store/slice/loginSlice'
import { AuthMe } from './store/slice/adminInfoSlice'

import Layout from './layot/Layout'
import Login from './pages/login/Login'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
  const [authChecked, setAuthChecked] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(AuthMe());
        // setAuthChecked(true);
      } catch (error) {
        console.error("Error while checking authentication:", error);
  
      }
    };

    fetchData();
  },[dispatch,isAuth])

  // if (!authChecked) {
  //   return null;
  // }
  return (
    <>
       {isAuth ? <Layout/> : <Login/>}     
    </>
  )
}

export default App
