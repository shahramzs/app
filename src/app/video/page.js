"use client";
import Chips from "./components/Chips";
import { MenuBar } from "@/components/component/MenuBar";
import { AppSidebar } from "./components/appSideBar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";
import VideoDetails from "./components/VideoDetails";

export default function Home() {
  return (
    <SidebarProvider>
      <SidebarWithBackdrop />

      <div className="relative w-full overflow-hidden">
        <main className="flex-1 p-2 mr-13">
          <MenuBar />
          <Chips />
          <VideoDetails />
        </main>
      </div>
    </SidebarProvider>
  );
}

function SidebarWithBackdrop() {
  const { open } = useSidebar();
  return (
    <>
      <div className="fixed right-0 top-0 z-150 h-full">
        <AppSidebar variant="floating" collapsible="icon" />
      </div>
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-140 transition-all duration-300">
          <div className="items-center justify-center justify-items-center content-center self-center mt-20">
            <Image
              src="/images/logo.png"
              width={300}
              height={300}
              alt="logo"
              className="opacity-10"
            />
          </div>
        </div>
      )}
    </>
  );
}
