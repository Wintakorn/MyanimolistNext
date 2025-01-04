'use client';

import React, { useEffect, useState } from "react";
import { fetchProfileDetail } from "@/actions/actions";
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

export function AppSidebar({ clerkId }: { clerkId: string | undefined }) {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        const profileData = await fetchProfileDetail(clerkId);
        console.log("Fetched profile:", profileData);
        setProfile(profileData);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setLoading(false);
      }
    };

    if (clerkId) {
      loadProfile();
    }
  }, [clerkId]);

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
                Anime
              </a>
            </li>
            <li>
              <a href="/contact" className="block px-4 py-2">
                กำลังมาแรง
              </a>
            </li>
            <li>
              <a href="/contact" className="block px-4 py-2">
                หมวดหมู่
              </a>
            </li>
          </ul>
        </SidebarGroup>

        {/* Profile Information */}
        {/* <SidebarGroup>
          <div className="p-4">
            {loading ? (
              <p>Loading profile...</p>
            ) : profile ? (
              <div className="flex items-center gap-4">
                <img
                  // src={profile.avatar || "/default-avatar.png"}
                  src="https://sodovjgejbzbmwxidvtg.supabase.co/storage/v1/object/public/landmark-bucket/Roitai-1735494404482-love2000.jpg"
                  alt={profile.name || "User Avatar"}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{profile.username || "Anonymous"}</p>
                  <p className="text-sm text-gray-500">
                    {profile.email || "No email available"}
                  </p>
                </div>
              </div>
            ) : (
              <p>Profile not found.</p>
            )}
          </div>
        </SidebarGroup> */}
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 />
                  {profile?.name || "User"}
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
