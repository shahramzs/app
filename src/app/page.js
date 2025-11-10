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
          <MenuBar />
          <Chips />
          <h7 className="text-md font-bold">ویدیئو ها</h7>
          <Videos />
        </main>
      </div>
    </SidebarProvider>
  );
}
