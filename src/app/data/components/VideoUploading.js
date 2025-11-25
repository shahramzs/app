"use client";

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { MoreVertical, Play, Delete, Upload } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function VideoUploading({ file, video }) {
  const [videoURL, setVideoURL] = useState(null);
  const [autoPlay, setAutoPlay] = useState(false);
  const [publishTime, setPublishTime] = useState("");
  const [image, setImage] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [enabled, setEnabled] = useState(false);
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!file) {
      setVideoURL(null);
      router.push("upload/");
    }

    const url = file ? URL.createObjectURL(file) : null;
    setVideoURL(url);

    if (file != null) {
      setAutoPlay(true);
    }

    return () => {
      URL.revokeObjectURL(url);
      setVideoURL(null);
    };
  }, [file]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubtitleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSubtitle(e.target.files[0]);
    }
  };

  const submit = () => {};

  return (
    <div className="flex flex-col w-full h-full gap-1">
      <div className="flex flex-row justify-between gap-3">
        <p className="text-xs text-red-600 mr-2 hidden">بارگزاری متوقف شده </p>
        <p className="text-xs ml-2 hidden">29.59 مگ از 591.72 مگ</p>
      </div>
      <div className="w-full bg-black relative">
        <ReactPlayer
          url={videoURL}
          playing={autoPlay}
          controls={false}
          width="100%"
          height="auto"
          style={{ width: "100%", height: "170px" }}
          muted
          loop={true}
        />
        <div className="absolute top-0 left-0 mt-2 bg-gray-300 rounded p-1 ml-2 hover:bg-gray-500">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical className="mt-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                ادامه بارگزاری <Play />
              </DropdownMenuItem>
              <DropdownMenuItem>
                حذف ویدیو <Delete />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="w-96 relative mt-0.5">
        {/* نوار پیشرفت */}
        <Progress
          value={progress}
          className="w-118 h-2 items-center justify-center "
        />

        {/* Tooltip سفارشی که روی نوار حرکت می‌کند */}
        <div
          className="mt-9 absolute -translate-x-1/2 -translate-y-8 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow transition-all duration-300"
          style={{
            left: `${progress}%`,
          }}
        >
          {progress}%
        </div>
      </div>
      <div className="mt-2">
        <Label htmlFor="picture">
          بارگزاری تصویر <Upload />
        </Label>
        <Input
          id="picture"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <hr className="w-full h-2 mt-1" />
      <div
        dir="ltr"
        className="flex flex-row justify-between gap-3 items-center space-x-2 mt-5"
      >
        <Switch
          id="airplane-mode"
          checked={enabled}
          onCheckedChange={(val) => setEnabled(val)}
        />
        <Label htmlFor="airplane-mode">واترمارک ویدیو</Label>
      </div>
      <hr className="w-full h-2 mt-1" />
      <div className="grid w-full max-w-full items-center gap-3 mt-2">
        <Label htmlFor="sub">فایل زیرنویس</Label>
        <Input
          id="sub"
          type="file"
          accept="file/*"
          onChange={handleSubtitleChange}
        />
      </div>
      <hr className="w-full h-2 mt-1" />
      <div className="mt-1">
        <Select
          value={publishTime}
          onValueChange={(val) => setPublishTime(val)}
        >
          <SelectTrigger dir="rtl" className="w-full">
            <SelectValue placeholder="انتخاب زمان انتشار" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-row justify-between gap-3 mt-3">
        <Button variant="outline">انصراف</Button>
        <Button onClick={submit}>انتشار ویدیو</Button>
      </div>
    </div>
  );
}
