import { MenuBar } from "@/components/component/MenuBar";
import UploadPage from "./components/UploadPage";

export default function Home() {
  return (
    <section className="w-full">
      <div className="fixed top-0 left-0 w-full z-50">
        <MenuBar />
      </div>
      <div className="flex w-full items-center justify-center h-screen bg-gray-200">
        <UploadPage />
      </div>
    </section>
  );
}
