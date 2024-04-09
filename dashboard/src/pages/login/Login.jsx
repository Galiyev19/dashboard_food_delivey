import React from 'react';
import {Container,TextField,Button,Box} from "@mui/material";
import {useForm} from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { loginFetch, selectIsAuth } from '../../store/slice/loginSlice';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const isAuth = useSelector(selectIsAuth)

    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        reset,
    }= useForm({
        defaultValues:{
            email:"test@gmail.com",
            password:"qwerty123",
        },
        mode: "onChange"
    })

    const onSubmit = async (data) => {
        const response = await dispatch(loginFetch(data))
        console.log(response.payload)
        if ("token" in response.payload.data) {
            window.localStorage.setItem("token", response.payload.data.token)
        }
    }

    if (isAuth) {
        return <Navigate to="/" />;
    }

  return (
    <Container maxWidth="xl">
        <Box sx={{
           display: "flex",
           flexDirection: "column",
           width: "100%",
           height: "100vh",
           alignItems:"center",
           justifyContent:"center",
        }}>
        <h1>Вход</h1>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className='modal_form_wrapper'>
        <Box sx={{
           display: "flex",
           flexDirection: "column",
        }}>
            <TextField size='medium' sx={{marginBottom: 2}} label="email" type="email"  {...register("email", {required: "Введите почту",})}/>
            <TextField size='medium' sx={{marginBottom: 2}} label="Password" type="password" {...register("password", {required: "Введите пароль",})}/>
            <Button variant="contained" type='submit'>вход</Button>
        </Box>
        </form>
         </Box>
    </Container>
  )
}

export default Login