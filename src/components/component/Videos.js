"use client";

import { videos } from "@/utils/Constants";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check } from "lucide-react";

export default function Videos() {
  return (
    <div
      className="
      grid gap-3 mt-2
      grid-cols-[repeat(auto-fit,minmax(260px,1fr))]
      justify-items-center
    "
    >
      {videos.map((video, i) => (
        <div className="w-full max-w-full bg-transparent border-0 shadow-none hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
          <div className="p-0 relative w-full h-50">
            <Image
              src={video.image}
              alt={video.title}
              fill
              className="object-cover w-full h-full rounded-xl"
              priority={false}
              unoptimized
            />
            <div className="absolute bottom-0 left-0 text-white bg-gray-700 rounded-md p-1 items-center justify-center text-xs mb-2 ml-2">
              {video.duration}
            </div>
          </div>

          <div className="p-2">
            <p className="text-sm font-medium">{video.title}</p>
            <div className="flex flex-row gap-3 mt-2 items-center">
              <Avatar>
                <AvatarImage src={video.avatar} />
                <AvatarFallback>{video.channel}</AvatarFallback>
              </Avatar>
              <p className="text-sm font-small">{video.channel}</p>
              <Check
                size={18}
                color={"green"}
                strokeWidth={8}
                className="border bg-gray-200 rounded-xl p-1"
              />
            </div>
            <div className="flex flex-row gap-2 mt-1">
              <p className="text-xs font-small text-gray-500">
                {video.view} بازدید
              </p>{" "}
              -<p className="text-xs font-small text-gray-500">{video.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
