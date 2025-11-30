"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Form({ onSendData }) {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);

  const addTag = (raw) => {
    const word = String(raw).trim();
    if (!word) return;

    if (tags.some((t) => t.value === word)) return;

    setTags((prev) => {
      const newTags = [...prev, word];
      if (onSendData) onSendData({ tag: newTags.map((t) => t) });
      return newTags;
    });
  };

  const removeTag = (id) => {
    setTags((prev) => {
      const newTags = prev.filter((t) => t !== id);
      if (onSendData) onSendData({ tag: newTags.map((t) => t) });
      return newTags;
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      addTag(value);
      setValue("");
    }

    if (e.key === "Backspace" && value === "") {
      setTags((prev) => {
        const newTags = prev.slice(0, -1);
        if (onChangeTags) onChangeTags(newTags.map((t) => t));
        return newTags;
      });
    }
  };

  return (
    <div className="flex flex-col gap-7 w-full h-full -mt-2">
      {/* فیلد عنوان ویدیو */}
      <div className="flex flex-col gap-2 w-full">
        <div className="grid w-full max-w-full items-start gap-2">
          <Label className="text-black mr-2" htmlFor="title">
            عنوان ویدیو
          </Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Input
                type="text"
                id="title"
                placeholder="عنوان ویدیو"
                onChange={(e) => onSendData({ title: e.target.value })}
              />
            </TooltipTrigger>
            <TooltipContent className="max-w-[300px] leading-relaxed text-sm">
              <p>
                از کلمات کلیدی (انگلیسی و فارسی) جذاب و مرتبط با ویدیو استفاده
                کنید. همچنین یک عنوان معنادار بنویسید تا بیننده موضوع ویدیوی شما
                را بفهمد.
              </p>
            </TooltipContent>
          </Tooltip>
          <p className="text-xs text-red-600 -mt-1 mr-2 hidden">
            عنوان ویدیو اجباریست
          </p>
        </div>
      </div>

      {/* فیلد توضیحات */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-black mr-2" htmlFor="description">
          توضیحات ویدیو
        </Label>
        <Tooltip>
          <TooltipTrigger asChild>
            <Textarea
              id="description"
              placeholder="توضیحات کوتاه درباره ویدیو بنویسید..."
              className="w-full h-28 p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => onSendData({ description: e.target.value })}
            />
          </TooltipTrigger>
          <TooltipContent className="max-w-[300px] leading-relaxed text-sm">
            <p>
              راهنما می‌توانید ویدیوها را به قسمت‌های کوچک‌تر تقسیم کنید و توجه
              بیننده را به بخش‌های مورد نظر جلب کنید. کافیست نام و زمان شروع هر
              قسمت را در توضیحات ویدیو ثبت کنید.
            </p>
          </TooltipContent>
        </Tooltip>

        <p className="text-xs text-red-600 -mt-1 mr-2 hidden">
          توضیحات ویدیو اجباریست
        </p>
      </div>

      {/* فیلد دسته بندی ها */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-black mr-2" htmlFor="description">
          دسته بندی های ویدیو
        </Label>
        <Select onValueChange={(val) => onSendData({ category: val })}>
          <Tooltip>
            <TooltipTrigger asChild>
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="دسته بندی ویدیو" />
              </SelectTrigger>
            </TooltipTrigger>
            <TooltipContent className="max-w-[300px] leading-relaxed text-sm">
              <p>
                راهنما می‌توانید ویدیوها را به قسمت‌های کوچک‌تر تقسیم کنید و
                توجه بیننده را به بخش‌های مورد نظر جلب کنید. کافیست نام و زمان
                شروع هر قسمت را در توضیحات ویدیو ثبت کنید.
              </p>
            </TooltipContent>
          </Tooltip>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <p className="text-xs text-red-600 -mt-1 mr-2 hidden">
          توضیحات ویدیو اجباریست
        </p>
      </div>

      {/* فیلد برچسب ها */}
      <div className="flex flex-col gap-2 w-full">
        <div className="grid w-full max-w-full items-start gap-2">
          <Label className="text-black mr-2" htmlFor="tag">
            برچسب ها
          </Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Input
                type="text"
                id="tag"
                placeholder="برچسب های ویدئو"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </TooltipTrigger>
            <TooltipContent className="max-w-[300px] leading-relaxed text-sm">
              <p>
                از کلمات کلیدی (انگلیسی و فارسی) جذاب و مرتبط با ویدیو استفاده
                کنید. همچنین یک عنوان معنادار بنویسید تا بیننده موضوع ویدیوی شما
                را بفهمد.
              </p>
            </TooltipContent>
          </Tooltip>
          <p className="text-xs text-red-600 -mt-1 mr-2 hidden">
            حداقل 3 برچسب برای ویدئوی خود انتخاب نمایید.
          </p>
        </div>
      </div>

      {/* Chips */}
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="flex items-center gap-1 px-2 py-1"
          >
            {tag}
            <div className="cursor-pointer" onClick={() => removeTag(tag)}>
              <X size={16} color="red" />
            </div>
          </Badge>
        ))}
      </div>

      {/* فیلد  ذخیره در لیست پخش */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-black mr-2" htmlFor="description">
          ذخیره در لیست پخش
        </Label>
        <Select onValueChange={(val) => onSendData({ saveInList: val })}>
          <Tooltip>
            <TooltipTrigger asChild>
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder=" ذخیره در لیست پخش " />
              </SelectTrigger>
            </TooltipTrigger>
            <TooltipContent className="max-w-[300px] leading-relaxed text-sm">
              <p>
                راهنما می‌توانید ویدیوها را به قسمت‌های کوچک‌تر تقسیم کنید و
                توجه بیننده را به بخش‌های مورد نظر جلب کنید. کافیست نام و زمان
                شروع هر قسمت را در توضیحات ویدیو ثبت کنید.
              </p>
            </TooltipContent>
          </Tooltip>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-red-600 -mt-1 mr-2 hidden">
          توضیحات ویدیو اجباریست
        </p>
      </div>

      {/* فیلد  تنظیمات دیدگاه */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-black mr-2" htmlFor="description">
          تنظیمات دیدگاه
        </Label>
        <Select onValueChange={(val) => onSendData({ commentSetting: val })}>
          <Tooltip>
            <TooltipTrigger asChild>
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="تنظیمات دیدگاه" />
              </SelectTrigger>
            </TooltipTrigger>
            <TooltipContent className="max-w-[300px] leading-relaxed text-sm">
              <p>
                راهنما می‌توانید ویدیوها را به قسمت‌های کوچک‌تر تقسیم کنید و
                توجه بیننده را به بخش‌های مورد نظر جلب کنید. کافیست نام و زمان
                شروع هر قسمت را در توضیحات ویدیو ثبت کنید.
              </p>
            </TooltipContent>
          </Tooltip>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-red-600 -mt-1 mr-2 hidden">
          توضیحات ویدیو اجباریست
        </p>
      </div>
    </div>
  );
}
