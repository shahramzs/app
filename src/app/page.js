import Chips from "@/components/component/Chips";
import { MenuBar } from "@/components/component/MenuBar";
import Videos from "@/components/component/Videos";
import { AppSidebar } from "@/components/component/appSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full overflow-hidden">
        <main className=" flex-1 p-2">
          <div className="fixed top-0 left-0 w-full z-50 bg-white">
            <MenuBar />
            <Chips />
          </div>

          <h2 className="text-md font-bold mt-23">ویدیئو ها</h2>
          <Videos />
        </main>
      </div>
    </SidebarProvider>
  );
}
