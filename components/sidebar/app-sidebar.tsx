import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
  } from "@/components/ui/sidebar";
  import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
  import { ChevronUp, User2 } from "lucide-react";
  
  export function AppSidebar() {
    return (
      
        <Sidebar>
          {/* Header */}
          <SidebarHeader>
            <div className="p-4 text-lg font-semibold">My Anime List</div>
          </SidebarHeader>
  
          {/* Content */}
          <SidebarContent>
            {/* Primary Navigation */}
            <SidebarGroup className="border-b">
              <ul className="space-y-2">
                <li>
                  <a href="/" className="block px-4 py-2">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="block px-4 py-2">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="block px-4 py-2">
                    Contact
                  </a>
                </li>
              </ul>
            </SidebarGroup>
  
            {/* Secondary Navigation */}
            <SidebarGroup>
              <ul className="space-y-2">
                <li>
                  <a href="/settings" className="block px-4 py-2 ">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="/profile" className="block px-4 py-2 ">
                    Profile
                  </a>
                </li>
              </ul>
            </SidebarGroup>
          </SidebarContent>
  
          {/* Footer */}
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton>
                      <User2 /> Username
                      <ChevronUp className="ml-auto" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="top"
                    className="w-[--radix-popper-anchor-width]"
                  >
                    <DropdownMenuItem>
                      <span>Account</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Billing</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
      
    );
  }
  