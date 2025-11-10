import { MenuBar } from "@/components/component/MenuBar";
import { AppSidebar } from "@/components/component/appSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-1">
        {/* <SidebarTrigger /> */}
        <main className="flex-1 p-2">
          <MenuBar />
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p>اینجا محتوای اصلی صفحه است.</p>
        </main>
      </div>
    </SidebarProvider>
  );
}
