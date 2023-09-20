"use client"

import { Sidebar } from "@/components/sidebar/sidebar"
import { AuthLayout } from "./register.style"
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material"

export default function Register() {
  return (
    <div>
       <AuthLayout className="auth-layout">
        <Sidebar />
          <Box className="right-area">
            <Typography variant="h3" component='h3' mb={4} className="text-blue">Register</Typography>
            <Box className="form-area">
              <Typography variant="h4" component='h4' className="text-blue">Team Player - Be Positive - Beat yesterday</Typography>
              <Typography className="text-muted" variant="body2" component='span' display={'block'} mt={2}>Together we re-define the experience of online gaming through gamification and novel technical solution.</Typography>
              <Box mb={2} mt={3}>
                <TextField size="small" variant="outlined" label="Name" placeholder="Name" fullWidth type="text" />
              </Box>
              <Box mb={2}>
                <TextField size="small" variant="outlined" label="Email" placeholder="Email" fullWidth type="email" />
              </Box>
              <Box mb={2}>
                <FormControlLabel control={<Checkbox size="small" />} label="I agree to the terms" />
              </Box>
              <Box>
                <Button size="large" variant="contained">I'm in, sign me up!</Button>
              </Box>
            </Box>
          </Box>
       </AuthLayout>
    </div>
  )
}
