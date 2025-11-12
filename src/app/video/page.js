"use client";
import Chips from "./components/Chips";
import { MenuBar } from "@/components/component/MenuBar";
import { AppSidebar } from "./components/appSideBar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";
import VideoDetails from "./components/VideoDetails";

export default function Home() {
  return (
    <SidebarProvider defaultOpen={false}>
      <SidebarWithBackdrop />
      <div className="relative w-full overflow-hidden">
        <div className="fixed top-0 left-0 w-full z-50">
          <MenuBar />
        </div>
        <main className="flex-1 p-2 mt-12 mr-11">
          <VideoDetails />
        </main>
      </div>
    </SidebarProvider>
  );
}

function SidebarWithBackdrop() {
  const { open, isMobile } = useSidebar();
  return (
    <>
      <div className="fixed right-0 top-0 z-150 h-full ">
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
