import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MenuBar } from "@/components/component/MenuBar";
import Form from "./components/Form";
import { ScrollArea } from "@/components/ui/scroll-area";
import VideoUploading from "./components/VideoUploading";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-50 flex items-center justify-center">
      {/* نوار منو ثابت بالا */}
      <div className="fixed top-0 left-0 w-full z-50">
        <MenuBar />
      </div>
      {/* محتوای اصلی */}
      <div className="w-[90%] h-[90%] mt-12">
        <Card className="w-full h-full flex ">
          <CardContent className="flex flex-1 p-4 overflow-y-auto">
            <div className="w-full h-full transition-colors duration-300 p-2">
              {/* ساختار گرید ریسپانسیو */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 h-full">
                {/* ستون سمت راست (اصلی و بزرگ‌تر) */}
                <div className="md:col-span-3 flex flex-col w-full h-full overflow-y-auto p-2 custom-scrollbar">
                  <Form />
                </div>
                {/* ستون سمت چپ (کوچک‌تر) */}
                <div className="md:col-span-2 flex flex-col w-full h-full items-center justify-center overflow-y-auto custom-scrollbar">
                  <VideoUploading />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
