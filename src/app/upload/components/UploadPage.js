"use client";
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-50">
      <div className="w-[80%] h-[80%]">
        <Card className="w-full h-full flex flex-col">
          <CardHeader>
            <h2 className="text-xl font-semibold text-center">
              بارگذاری ویدیو
            </h2>
          </CardHeader>

          <CardContent className="flex items-center justify-center flex-1">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`flex flex-col items-center justify-center gap-4 border-2 border-dashed rounded-2xl w-full h-full transition-colors duration-300 ${
                isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
            >
              <Upload size={80} className="text-gray-400" />

              {file ? (
                <p className="text-gray-700 text-sm">
                  فایل انتخاب‌شده:{" "}
                  <span className="font-medium text-blue-600">{file.name}</span>
                </p>
              ) : (
                <>
                  <p className="text-gray-600">
                    فایل‌ ویدیوی خود را اینجا بکشید یا از دکمه زیر انتخاب کنید.
                  </p>
                  <Input
                    id="video"
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="video">
                    <Button as="span">انتخاب ویدیو</Button>
                  </label>
                </>
              )}
            </div>
          </CardContent>

          <div className="text-xs p-3 text-center text-gray-500 border-t">
            لطفاً قبل از بارگذاری، قوانین انتشار را مطالعه کنید و از ارسال
            ویدیوهای دارای حق نشر خودداری نمایید.
          </div>
        </Card>
      </div>
    </div>
  );
}
