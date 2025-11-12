"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { video, videos } from "@/utils/Constants";
import Chips from "./Chips";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Heart,
  Command,
  Save,
  ChevronDownIcon,
  AlertTriangleIcon,
  CheckIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
  Share2,
  MoreVertical,
  Book,
} from "lucide-react";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function VideoDetails() {
  const [comments, setComments] = useState([
    { user: "Ali", text: "خیلی عالی بود 👏" },
    { user: "Sara", text: "منتظر ویدیوهای بعدی‌ام!" },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;
    setComments([...comments, { user: "کاربر ناشناس", text: newComment }]);
    setNewComment("");
  };

  return (
    <div className="flex flex-col md:flex-row gap-1">
      {/* بخش اصلی ویدیو */}
      <div className="flex-1  md:w-auto sm:w-full min-w-0">
        <Card className="w-full aspect-video bg-black overflow-hidden">
          <ReactPlayer
            url={video.url}
            width="100%"
            height="100%"
            controls
            playing
            style={{ borderRadius: "12px" }}
          />
        </Card>

        {/* توضیحات و کامنت‌ها */}
        <div className="mt-4 mr-2">
          <h2 className="text-xl font-bold">{video.title}</h2>

          <div className="mt-3 text-center flex flex-row justify-between">
            <div className="flex flex-row">
              <Avatar>
                <AvatarImage src={video.avatar} />
                <AvatarFallback>{video.channel}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="text-sm text-nowrap mr-2">{video.channel}</div>
                <div className="text-xs text-gray-400 mt-1 ">
                  {video.view} دنبال کننده
                </div>
              </div>
            </div>
            <div className="text-center item-center ">
              <Button className="p-5 mr-5 item-center">دنبال کردن</Button>
            </div>
            <Drawer>
              <DrawerTrigger>
                <Button variant="outline">
                  <MoreVertical />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>اطلاعات</DrawerTitle>
                  <DrawerDescription>
                    در این قسمت می توانید ویدئو ی مورد نظر خود را پسندیده یا به
                    اشتراک بگزارید
                  </DrawerDescription>
                </DrawerHeader>
                <div className="flex flex-row justify-space item-center gap-5 sm:self-center sm:gap-20">
                  <div className=" text-center">
                    <Button variant="outline">
                      <Heart /> 10
                    </Button>
                  </div>
                  <div className="text-center">
                    <Button variant="outline">
                      <Command /> دیدگاهها
                    </Button>
                  </div>
                  <div className=" text-center ">
                    <ButtonGroup dir="ltr">
                      <Button variant="outline">
                        <Save />
                        ذخیره
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="!pl-2">
                            <ChevronDownIcon />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="[--radius:1rem]"
                        >
                          <DropdownMenuGroup>
                            <DropdownMenuItem>
                              <VolumeOffIcon />
                              Mute Conversation
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <CheckIcon />
                              Mark as Read
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <AlertTriangleIcon />
                              Report Conversation
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <UserRoundXIcon />
                              Block User
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <ShareIcon />
                              Share Conversation
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <CopyIcon />
                              Copy Conversation
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuItem variant="destructive">
                              <TrashIcon />
                              Delete Conversation
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </ButtonGroup>
                  </div>
                  <div className="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <Share2 />
                          اشتراک
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="[--radius:1rem]"
                      >
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <VolumeOffIcon />
                            Mute Conversation
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CheckIcon />
                            Mark as Read
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <AlertTriangleIcon />
                            Report Conversation
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UserRoundXIcon />
                            Block User
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ShareIcon />
                            Share Conversation
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CopyIcon />
                            Copy Conversation
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem variant="destructive">
                            <TrashIcon />
                            Delete Conversation
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <MoreVertical />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="[--radius:1rem]"
                      >
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <VolumeOffIcon />
                            Mute Conversation
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CheckIcon />
                            Mark as Read
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <AlertTriangleIcon />
                            Report Conversation
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UserRoundXIcon />
                            Block User
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ShareIcon />
                            Share Conversation
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CopyIcon />
                            Copy Conversation
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem variant="destructive">
                            <TrashIcon />
                            Delete Conversation
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>

          <hr className="my-3 border-gray-300" />
          <div className="flex flex-row justify-space gap-3">
            <div>{video.view} بازدید</div>.<div>{video.time}</div>.
            <div className="text-blue-500">
              {video.tag.replace(",", "#").replace("", "#")}
            </div>
          </div>
          <div className="mt-5 text-md">{video.desription}</div>
          <hr className="my-3 border-gray-300" />
          <h3 className="text-lg font-semibold mb-2">💬 نظرات</h3>

          {/* فرم افزودن کامنت */}
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="نظر خود را بنویسید..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleCommentSubmit}>ارسال</Button>
          </div>

          {/* لیست کامنت‌ها */}
          <div className="space-y-2">
            {comments.map((c, i) => (
              <Card key={i} className="p-2">
                <div className="flex flex-row gap-2 item-center">
                  <Avatar>
                    <AvatarImage src={video.avatar} />
                    <AvatarFallback>{video.channel}</AvatarFallback>
                  </Avatar>
                  <p className="font-small mt-1 text-gray-500 text-md">
                    {c.user}
                  </p>
                  <p className="font-small mt-2 mr-3 text-gray-400 text-xs">
                    {video.time}
                  </p>
                </div>
                <p className="text-sm text-gray-700">{c.text}</p>
                <div className="flex flex-row gap-3">
                  <Button variant="outline">
                    <Heart />
                  </Button>
                  <Button variant="outline">
                    پاسخ <Book />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* بخش ویدیوهای پیشنهادی */}
      <div className="w-full md:w-[350px] flex flex-col gap-3">
        <Chips />
        {videos.map((v, i) => (
          <div
            key={i}
            onClick={() => setCurrentVideo(v)}
            className="flex py-3 -mt-5 items-center gap-3 cursor-pointer p-2 rounded-lg transition"
          >
            <div className="relative">
              <Image
                src={v.image}
                alt={v.title}
                className="min-w-[180px] max-w-[300px] h-30 object-cover rounded-md flex-shrink-0"
                width={40}
                height={25}
                unoptimized
                priority
              />
              <div className="absolute bottom-0 left-0 text-white bg-gray-700 rounded-md p-1 items-center justify-center text-xs mb-1 ml-1">
                {v.duration}
              </div>
            </div>

            <div className="flex flex-col gap-5 justify-between">
              <Link
                href="#"
                className="inline-block text-xs font-bold text-gray-500 "
              >
                {v.title}
              </Link>
              <Link href="#" className="text-xs font-extralight text-gray-500 ">
                {v.channel}
              </Link>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-xs font-extralight">{video.time}</p>.
                <p className="text-xs font-extralight">{video.view} بازدید </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
