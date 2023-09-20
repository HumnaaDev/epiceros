import { useGetTeamData } from "@/services/registration"
import { SidebarWrapper } from "./sidebar.style"
import { Typography } from "@mui/material"

export const Sidebar = () => {
    const { data: team } = useGetTeamData()

    return (
        <SidebarWrapper className="left-area">
            <Typography className="text-white" variant="h2" component="h2">Join the team</Typography>
            <ul className="list text-white">
                {
                    team?.map((name) => (<li>{name}</li>))
                }
            </ul>
        </SidebarWrapper>
    )
}