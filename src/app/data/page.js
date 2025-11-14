"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MenuBar } from "@/components/component/MenuBar";
import Form from "./components/Form";
import { ScrollArea } from "@/components/ui/scroll-area";
import VideoUploading from "./components/VideoUploading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [cards, setCards] = useState([1]);
  const addCard = () => {
    setCards([...cards, cards.length + 1]); // افزودن کارت جدید
  };

  return (
    <div className="w-screen h-screen overflow-y-auto custom-scrollbar bg-gray-50 flex items-center justify-center">
      {/* نوار منو ثابت بالا */}
      <div className="fixed top-0 left-0 w-full z-50">
        <MenuBar />
      </div>
      <div className="w-[90%] h-[90%] mt-12 flex flex-col">
        {cards.map((cardIndex) => (
          <Card key={cardIndex} className="w-full h-full flex mb-4">
            <CardContent className="flex flex-1 p-1 overflow-y-auto">
              <div className="w-full h-full transition-colors duration-300 p-2">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-1 h-full">
                  {/* ستون سمت راست */}
                  <div className="md:col-span-3 flex flex-col w-full h-full overflow-y-auto p-2 custom-scrollbar">
                    <Form />
                  </div>
                  {/* ستون سمت چپ */}
                  <div className="md:col-span-2 flex flex-col w-full h-full items-center justify-center overflow-y-auto custom-scrollbar">
                    <VideoUploading />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {/* دکمه افزودن تصویر */}
        <div className="mb-2">
          <Button variant="outline" onClick={addCard}>
            <Plus className="mr-2" />
            افزودن تصویر
          </Button>
        </div>
      </div>
    </div>
  );
}
