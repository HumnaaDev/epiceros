import { SidebarWrapper } from "./sidebar.style"
import { Typography } from "@mui/material"

export const Sidebar = () => {
    return (
        <SidebarWrapper className="left-area">
            <Typography className="text-white" variant="h2" component="h2">Join the team</Typography>
            <ul className="list text-white">
              <li>Alexandre</li>
              <li>Christian</li>
              <li>Filip</li>
              <li>Hjalmar</li>
              <li>Joakim</li>
              <li>Samuel</li>
            </ul>
        </SidebarWrapper>
    )
}