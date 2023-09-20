"use client"

import { AuthLayout } from "@/styles/authLayout.style"
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material"

export default function Home() {
  return (
    <div>
       <AuthLayout className="auth-layout">
          <Box className="left-area">
            <Typography className="text-white" variant="h2" component="h2">Join the team</Typography>
            <ul className="list text-white">
              <li>Alexandre</li>
              <li>Christian</li>
              <li>Filip</li>
              <li>Hjalmar</li>
              <li>Joakim</li>
              <li>Samuel</li>
            </ul>
          </Box>
          <Box className="right-area">
            <Typography variant="h3" component='h3' mb={4}>Register</Typography>
            <Box className="form-area">
              <Typography variant="h4" component='h4'>Team Player - Be Positive - Beat yesterday</Typography>
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
