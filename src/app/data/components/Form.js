import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Form() {
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
              <Input type="text" id="title" placeholder="عنوان ویدیو" />
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
        <Select>
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
        <Label className="text-black mr-2" htmlFor="description">
          برچسبهای ویدیو
        </Label>
        <Select>
          <Tooltip>
            <TooltipTrigger asChild>
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="برچسب های ویدیو" />
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

      {/* فیلد  ذخیره در لیست پخش */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-black mr-2" htmlFor="description">
          ذخیره در لیست پخش
        </Label>
        <Select>
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
        <Select>
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
