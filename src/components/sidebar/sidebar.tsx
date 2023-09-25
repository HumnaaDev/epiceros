import { useGetTeamData } from "@/services/register"
import { SidebarWrapper } from "./sidebar.style"
import { Typography } from "@mui/material"
import { useStoreContext } from "@/store/storeContext"
import { useEffect } from "react"

export const Sidebar = () => {
    const { data } = useGetTeamData()
    const { states: { team }, actions: { setTeam } } = useStoreContext()

    useEffect(() => {
        if(data) {
            setTeam(data?.team)
        }
    }, [data])

    return (
        <SidebarWrapper className="left-area">
            <Typography data-testid="join-team" className="text-white" variant="h2" component="h2">Join the team</Typography>
                <ul className="list text-white">
                    {
                        team?.map((name: string, index: number) => (<li data-testid={name} key={`${name}-${index}`}>{name}</li>))
                    }
                </ul>
        </SidebarWrapper>
    )
}