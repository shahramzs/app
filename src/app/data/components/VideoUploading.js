"use client";

import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { MoreVertical, Play, Delete, Upload, Pause } from "lucide-react";
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
import { useFile } from "@/components/component/FileContext";
import { Helper } from "@/utils/Helper";
import ApiService from "@/api/apiService";
import {
  pauseUpload,
  resumeUpload,
  uploadVideoWithTus,
  startUpload,
  tusUpload,
  deleteUpload,
} from "@/api/apiTus";

export default function VideoUploading({ id, video, data, cards }) {
  const router = useRouter();
  const [videoURL, setVideoURL] = useState(null);
  const [autoPlay, setAutoPlay] = useState(false);
  const [publishTime, setPublishTime] = useState("");
  const [image, setImage] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [token, setToken] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState("hidden");
  const [toggle, setToggle] = useState(false);
  const [videosToUpload, setVideosToUpload] = useState([]);
  const { file } = useFile();
  const uploadsRef = useRef(new Map());

  const getTokenCookie = async () => {
    setToken(await Helper.getStorage("token"));
  };

  const getJwtTokenCookie = async () => {
    setJwtToken(await Helper.getStorage("jwtToken"));
  };

  useEffect(() => {
    getTokenCookie();
    getJwtTokenCookie();

    let source = null;

    if (video) {
      source = video;
    } else if (file) {
      source = file;
    } else {
      setVideoURL(null);
      router.push("upload/");
      return;
    }

    // ---------- preview ----------
    let objectUrl = null;

    if (source instanceof File || source instanceof Blob) {
      objectUrl = URL.createObjectURL(source);
      setVideoURL(objectUrl);
      setAutoPlay(true);
    } else if (typeof source === "string") {
      setVideoURL(source);
    }

    // ---------- ساخت لیست آپلود ----------
    const list = [];

    // ویدئوی اصلی
    if (file) {
      list.push({
        id: "main", // 🔑 id یکتا و ثابت
        file,
        progress: 0,
        status: "idle",
      });
    }

    // ویدئوهای کارت‌ها
    cards.forEach((card) => {
      if (card.video) {
        list.push({
          id: `card-${card.id}`, // 🔑 جلوگیری از تداخل
          file: card.video,
          progress: 0,
          status: "idle",
        });
      }
    });

    setVideosToUpload(list);

    // ---------- cleanup ----------
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [video, file, cards]);

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

  // const submit = () => {
  //   setShowProgress("block");
  //   ApiService.UploadingVideo(
  //     data.title,
  //     data.description,
  //     data.category,
  //     data.tag,
  //     data.saveInList,
  //     data.commentSettings,
  //     video ? video : file,
  //     image,
  //     enabled,
  //     subtitle,
  //     publishTime,
  //     token,
  //     jwtToken,
  //     (res) => {
  //       console.log("responses", res);
  //     },
  //     (progressEvent) => {
  //       setShowProgressEvent(progressEvent);
  //       setProgress(
  //         parseInt(
  //           Math.round((progressEvent.loaded / progressEvent.total) * 100)
  //         )
  //       );
  //     }
  //   );
  // };

  const submit = async () => {
    setShowProgress("block");
    try {
      const uploadedUrls = [];
      for (const videoItem of videosToUpload) {
        // اگر قبلاً آپلود شده، ردش کن
        if (videoItem.status === "done") continue;
        const url = await tusUpload({
          id: videoItem.id,
          file: videoItem.file,
          jwtToken,
          uploadsRef, // 👈 مهم
          setVideosToUpload,
          onProgress: setProgress,
        });

        uploadedUrls.push({
          id: videoItem.id,
          url,
        });
      }

      await ApiService.UploadingVideo(
        data.title,
        data.description,
        data.category,
        data.tag,
        data.saveInList,
        data.commentSettings,
        uploadedUrls, // 👈 آرایه‌ی امن
        image,
        enabled,
        subtitle,
        publishTime,
        token,
        jwtToken,
        (res) => {
          console.log("responses", res);
        }
      );

      console.log("🎉 Upload + Save done");
    } catch (err) {
      console.error("❌ submit error:", err);
    }
  };

  const loadedMB = parseFloat((progress.loaded / (1024 * 1024)).toFixed(2));
  const totalMB = parseFloat((progress.total / (1024 * 1024)).toFixed(2));

  const continueUploading = (id) => {
    setToggle(false);
    resumeUpload(id);
  };

  const stopUploading = (id) => {
    setToggle(true);
    pauseUpload(id);
  };

  const deleteVideo = (id) => {
    deleteUpload(id);
  };

  function pauseUpload(id) {
    const upload = uploadsRef.current.get(id);
    if (upload) {
      upload.abort();
      setVideosToUpload((prev) =>
        prev.map((v) => (v.id === id ? { ...v, status: "paused" } : v))
      );
      console.log("Paused upload for id:", id);
    }
  }

  function resumeUpload(id) {
    const upload = uploadsRef.current.get(id);
    if (upload) {
      upload.start();
      setVideosToUpload((prev) =>
        prev.map((v) => (v.id === id ? { ...v, status: "uploading" } : v))
      );
      console.log("Resumed upload for id:", id);
    }
  }

  function deleteUpload(id) {
    const upload = uploadsRef.current.get(id);
    if (upload) {
      upload.abort(true); // توقف + پاک‌کردن resumable data
      uploadsRef.current.delete(id);
    }
    setVideosToUpload((prev) => prev.filter((v) => v.id !== id));
    if (id === "main") {
      setFile(null); // اگر setter داری
    } else {
      setCards((prev) => prev.filter((c) => `card-${c.id}` !== id));
    }
    console.log("Deleted upload for id:", id);
  }

  return (
    <div className="flex flex-col w-full h-full gap-1">
      <div className="flex flex-row justify-between gap-3">
        <p className="text-xs text-red-600 mr-2 hidden">بارگزاری متوقف شده </p>
        <p className={`text-xs ml-2  ${showProgress}`}>
          {loadedMB} -- {totalMB} مگابایت
        </p>
      </div>
      <div className="w-full bg-black relative h-[170px]">
        {videoURL && (
          <ReactPlayer
            src={videoURL}
            playing={autoPlay}
            controls={false}
            height={170}
            width={500}
            muted
            loop
          />
        )}
        <div className="absolute top-0 left-0 mt-2 bg-gray-300 rounded p-1 ml-2 hover:bg-gray-500">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical className="mt-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => continueUploading(id)}
                className={!toggle ? "hidden" : "block"}
              >
                <div className="flex flex-row gap-2">
                  <p>ادامه بارگزاری</p>
                  <Play />
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => stopUploading(id)}
                className={!toggle ? "block" : "hidden"}
              >
                <div className="flex flex-row gap-2">
                  <p>توقف بارگزاری</p>
                  <Pause />
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => deleteVideo(id)}>
                <div className="flex flex-row gap-2">
                  <p> حذف ویدیو </p>
                  <Delete />
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="w-96 relative mt-0.5">
        {/* نوار پیشرفت */}
        <Progress
          value={progress.percent}
          className={`w-115 h-2 items-center justify-center ${showProgress}`}
        />

        {/* Tooltip سفارشی که روی نوار حرکت می‌کند */}
        <div
          className={`mt-9  absolute -translate-x-1/2 -translate-y-8 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow transition-all duration-300 ${showProgress}`}
          style={{
            left: `${progress.percent - 7}%`,
          }}
        >
          {progress.percent}%
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
