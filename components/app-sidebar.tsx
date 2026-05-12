"use client"

import * as React from "react"
import { Stethoscope, Newspaper, BriefcaseBusiness, Phone, Calendar, User } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon } from "lucide-react"
import Link from "next/link"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      items: [
        {
          title: "Appointments",
          url: "/dashboard/appointments",
          icon: <Calendar className="text-brand-1!" />
        },
        {
          title: "Contacts",
          url: "/dashboard/contacts",
          icon: <Phone className="text-brand-1!" />
        },
        {
          title: "Subscribers",
          url: "/dashboard/subscribers",
          icon: <User className="text-brand-1!" />
        },
        {
          title: "Doctors",
          url: "/dashboard/doctors",
          icon: <Stethoscope className="text-brand-1!" />
        },
        {
          title: "News",
          url: "/dashboard/news",
          isActive: true,
          icon: <Newspaper className="text-brand-1!" />
        },
        {
          title: "Services",
          url: "/dashboard/services",
          icon: <BriefcaseBusiness className="text-brand-1!" />
        },
      ],
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-brand-1 text-sidebar-primary-foreground">
                  <GalleryVerticalEndIcon className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold! text-brand-1 text-xl!">Meddical</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-semibold mb-4 text-lg!">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={false}>
                          <Link className="tracking-tighter mb-2 block font-medium text-[1rem]!" href={item.url}>
                            {item.icon}
                            {item.title}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
