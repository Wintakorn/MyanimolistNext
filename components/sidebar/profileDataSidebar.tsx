import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronUp, User2 } from "lucide-react";
import Link from "next/link";
import { ProfileProps } from "@/utils/types";
import Image from "next/image";

export function AppSidebar({ profile }: { profile: ProfileProps }) {
  return (
    <Sidebar>
      {/* Sidebar Header */}
      <SidebarHeader>
        <div className="p-4 text-lg font-semibold">My Anime List</div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        <SidebarGroup className="border-b">
          <ul className="space-y-2">
            <li className="hover:bg-gray-300">
              <Link href="/" className="block px-4 py-2">
                Home
              </Link>
            </li>
            <li className="hover:bg-gray-300">
              <Link href="/anime" className="block px-4 py-2">
                Anime
              </Link>
            </li>
            <li className="hover:bg-gray-300">
              <Link href="/contact" className="block px-4 py-2">
                Contact Us
              </Link>
            </li>
            <li className="hover:bg-gray-300">
              <Link href="/category" className="block px-4 py-2">
                Categories
              </Link>
            </li>
            <li className="hover:bg-gray-300">
              <Link href="/webboard" className="block px-4 py-2">
                Community
              </Link>
            </li>
          </ul>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  {/* Profile Image */}
                  <Image
                    src={profile?.profileImage || "/default-avatar.png"}
                    alt={profile?.userName || "Guest"}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <p className="ml-2">{profile?.userName || "Guest"}</p>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <Link href="/profile" className="block w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/billing" className="block w-full">
                    Billing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className="block w-full text-left">Sign out</button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
