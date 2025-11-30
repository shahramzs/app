"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MenuBar } from "@/components/component/MenuBar";
import Form from "./components/Form";
import VideoUploading from "./components/VideoUploading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useFile } from "@/components/component/FileContext";

export default function Home() {
  const [cards, setCards] = useState([{ id: 1, video: null }]);
  const { file } = useFile();
  const [dataForm, setDataForm] = useState({
    title: "",
    description: "",
    category: "",
    tag: [],
    saveInList: "",
    commentSetting: "",
  });

  const handleAddCardClick = () => {
    document.getElementById("videoPicker").click();
  };

  const handlePickVideo = (e) => {
    const video = e.target.files[0];
    if (!video) return;
    const newCard = {
      id: Date.now(),
      video: video,
    };
    setCards([...cards, newCard]);
  };

  const handleChildData = (data) => {
    setDataForm((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <div className="w-screen h-screen overflow-y-auto custom-scrollbar bg-gray-50 flex items-center justify-center">
      {/* نوار منو ثابت بالا */}
      <div className="fixed top-0 left-0 w-full z-50">
        <MenuBar />
      </div>
      <div className="w-[90%] h-[90%] mt-12 flex flex-col">
        {cards.map((cardIndex) => (
          <Card key={cardIndex.id} className="w-full h-full flex mb-4">
            <CardContent className="flex flex-1 p-1 overflow-y-auto">
              <div className="w-full h-full transition-colors duration-300 p-2">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-1 h-full">
                  {/* ستون سمت راست */}
                  <div className="md:col-span-3 flex flex-col w-full h-full overflow-y-auto p-2 custom-scrollbar">
                    <Form onSendData={handleChildData} />
                  </div>
                  {/* ستون سمت چپ */}
                  <div className="md:col-span-2 flex flex-col w-full h-full items-center justify-center overflow-y-auto custom-scrollbar">
                    <VideoUploading
                      video={cardIndex.video}
                      data={dataForm}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {/* دکمه افزودن تصویر */}
        <div className="mb-2">
          {/* انتخاب ویدئو (input مخفی) */}
          <input
            id="videoPicker"
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handlePickVideo}
          />
          <Button variant="outline" onClick={handleAddCardClick}>
            <Plus className="mr-2" />
            افزودن تصویر
          </Button>
        </div>
      </div>
    </div>
  );
}
