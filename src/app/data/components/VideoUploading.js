"use client";

import { useState } from "react";
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

export default function VideoUploading() {
  const [progress, setProgress] = useState(30);

  return (
    <div className="flex flex-col w-full h-full gap-1">
      <div className="flex flex-row justify-between gap-3">
        <p className="text-xs text-red-600 mr-2">بارگزاری متوقف شده </p>
        <p className="text-xs ml-2">29.59 مگ از 591.72 مگ</p>
      </div>
      <div className="w-full h-[60%] bg-black relative">
        <ReactPlayer
          url="/videos/sample.mp4"
          playing={false}
          controls={false}
          width="100%"
          height="100%"
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
        <Progress value={progress} className="w-116 h-2" />

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
      <div className="mt-5">
        <Button variant="outline">
          بارگزاری تصویر <Upload />
        </Button>
      </div>
      <hr className="w-full h-2 mt-0.5" />
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">واترمارک ویدیو</Label>
      </div>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="picture">فایل زیرنویس</Label>
        <Input id="picture" type="file" />
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="انتخاب زمان انتشار" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-row justify-between gap-3">
        <Button variant="outline">انصراف</Button>
        <Button>انتشار ویدیو</Button>
      </div>
    </div>
  );
}
