"use client"

import { Sidebar } from "@/components/sidebar/sidebar"
import { AuthLayout } from "./register.style"
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"
import { IRegisterForm } from "./register.type"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { EMAIL_REGEX } from "@/utilities/regex"

const RegisterFormSchema = yup.object({
    name: yup
      .string()
      .required("name is required.")
      .max(20, 'name character limit is 300'),
    email: yup
      .string()
      .required("email is required.")
      .matches(EMAIL_REGEX, 'valid email is required.'),
    terms: yup.boolean()
  })

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IRegisterForm>({
        defaultValues: {name: '', email: '', terms: false},
        resolver: yupResolver(RegisterFormSchema),
        mode: "all",
    })

    const onSubmit: SubmitHandler<IRegisterForm> = (data) => console.log(data)

    return (
    <div>
       <AuthLayout className="auth-layout">
        <Sidebar />
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box className="right-area">
                <Typography variant="h3" component='h3' mb={4} className="text-blue">Register</Typography>
                <Box className="form-area">
                <Typography variant="h4" component='h4' className="text-blue">Team Player - Be Positive - Beat yesterday</Typography>
                <Typography className="text-muted" variant="body2" component='span' display={'block'} mt={2}>Together we re-define the experience of online gaming through gamification and novel technical solution.</Typography>
                <Box mb={2} mt={3}>
                    <TextField {...register("name")} name="name" size="small" variant="outlined" label="Name" placeholder="Name" fullWidth type="text" />
                    <span className="error">{errors.name?.message}</span>
                </Box>
                <Box mb={2}>
                    <TextField {...register("email")} name="email" size="small" variant="outlined" label="Email" placeholder="Email" fullWidth type="email" />
                    <span className="error">{errors.email?.message}</span>
                </Box>
                <Box mb={2}>
                    <FormControlLabel control={<Checkbox size="small" {...register("terms")} name="terms"/>} label="I agree to the terms" />
                </Box>
                <Box>
                    <Button size="large" variant="contained" type="submit">I'm in, sign me up!</Button>
                </Box>
                </Box>
            </Box>
        </form>
       </AuthLayout>
    </div>
  )
}
