
import { SidebarProvider, SidebarTrigger } from "@/components/ui"
import { ChevronDown, User2, Plus } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  SidebarMenuButton,
  DropdownMenuItem,
  DropdownMenuContent,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
} from "@/components/ui"

export function AppSidebar() {

  const projects = [
    {
      name:"a",
      url:"#",
      name:"A",
      icon:"Plus"
    },
    {
      name:"b",
      url:"#",
      name:"B",
      icon:"Plus"
    },
    {
      name:"c",
      url:"#",
      name:"C",
      icon:"Plus"
    },
  ]



  return (
    <div>
      <Sidebar>
        <SidebarHeader>
          <SidebarTrigger className="flex ms-auto" />
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    Select Workspace
                    <ChevronDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                  <DropdownMenuItem>
                    <span>Acme Inc</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupAction>
              <Plus /> <span className="sr-only">Add Project</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
            {projects.map((project) => (
              <SidebarMenuItem key={project.name}>
                <SidebarMenuButton asChild>
                  <a href={project.url}>
                    <project.icon />
                    <span>{project.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            </SidebarGroupContent>
          </SidebarGroup>



        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <User2 /> Username
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  )
}

export function SidebarDemo() {
  return (
    <div className="w-full h-[300px]">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />

      </SidebarProvider>
    </div>
  )
}