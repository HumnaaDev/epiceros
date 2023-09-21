import { useGetTeamData } from "@/services/register"
import { SidebarWrapper } from "./sidebar.style"
import { Typography } from "@mui/material"

export const Sidebar = () => {
    const { data } = useGetTeamData()

    return (
        <SidebarWrapper className="left-area">
            <Typography className="text-white" variant="h2" component="h2">Join the team</Typography>
            <ul className="list text-white">
                {
                    data?.team?.map((name: string, index: number) => (<li key={`${name}-${index}`}>{name}</li>))
                }
            </ul>
        </SidebarWrapper>
    )
}