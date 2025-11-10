"use client";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronDown,
  User2,
  ChevronUp,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Menu items.
const items = [
  {
    id: "home",
    title: "Home",
    url: "#",
    icon: Home,
    label: "Home",
  },
  {
    id: "inbox",
    title: "Inbox",
    url: "#",
    icon: Inbox,
    label: "Inbox",
  },
  {
    id: "calender",
    title: "Calendar",
    url: "#",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "search",
    title: "Search",
    url: "#",
    icon: Search,
    label: "Search",
  },
  {
    id: "settings",
    title: "Settings",
    url: "#",
    icon: Settings,
    label: "Settings",
  },
];

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  const [active, setActive] = useState("home");
  useEffect(() => {}, []);

  return (
    <main className="relative">
      {!isMobile ? (
        <Sidebar side="right" variant="floating" collapsible="icon">
          <SidebarTrigger
            className={
              state == "collapsed"
                ? "flex item-center self-center mr-1 items-center justify-center  rounded-md p-4 hover:bg-gray-100 transition-colors"
                : "hidden"
            }
          />
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <div className="flex flex-row">
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton>
                        <Settings /> Select Workspace
                        <ChevronDown className="ml-auto" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <SidebarTrigger
                      className={
                        state == "expanded"
                          ? "flex item-center self-center justify-center  rounded-md p-4 hover:bg-gray-100 transition-colors mt-1"
                          : "hidden"
                      }
                    />
                  </div>
                  <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                    <DropdownMenuItem>
                      <span>Acme Inc</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Acme Corp.</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
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
      ) : (
        <motion.nav
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 md:hidden shadow-lg"
        >
          <ul className="flex justify-around items-center py-2">
            {items.map(({ id, icon: Icon, label }) => (
              <motion.li
                key={id}
                onClick={() => setActive(id)}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center cursor-pointer relative"
              >
                <motion.div
                  initial={false}
                  animate={{
                    scale: active === id ? 1.3 : 1,
                    color: active === id ? "#2563eb" : "#6b7280",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center"
                >
                  <Icon className="w-6 h-6" />
                  <motion.span
                    className="text-xs mt-1"
                    animate={{
                      opacity: active === id ? 1 : 0.7,
                      y: active === id ? -2 : 0,
                    }}
                  >
                    {label}
                  </motion.span>
                </motion.div>

                {/* نوار آبی زیر آیکن هنگام فعال بودن */}
                {active === id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 w-6 h-[2px] bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </main>
  );
}
