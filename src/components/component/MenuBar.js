"use client";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../ui/menubar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Search, User2, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";

export function MenuBar() {
  const { theme, setTheme } = useTheme();
  const [openMain, setOpenMain] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  const handleGoToLogin = () => {
    setOpenMain(false);
    setOpenPassword(false);
    setTimeout(() => setOpenLogin(true), 150);
  };

  const handleGoToMain = () => {
    setOpenLogin(false);
    setOpenPassword(false);
    setTimeout(() => setOpenMain(true), 150);
  };

  const handleGoToPassword = () => {
    setOpenMain(false);
    setOpenLogin(false);
    setTimeout(() => setOpenPassword(true), 150);
  };

  return (
    <Menubar className="w-full flex justify-between h-[50px]">
      <div className="flex items-center gap-2">
        <MenubarMenu>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={35}
            height={35}
            unoptimized
            className="mr-2"
          />
        </MenubarMenu>
        <MenubarMenu>
          <p className="text-md font-italic text-xl">اکران</p>
        </MenubarMenu>
      </div>
      <MenubarMenu>
        <div className="sm:flex flex-row items-center hidden">
          <Input
            type="text"
            className="w-sm bg-white "
            placeholder="جستجوی ویدئو"
          />
          <Search
            size={40}
            className="mr-1 cursor-pointer bg-gray-300 p-2 rounded-md hover:bg-gray-600 "
          />
        </div>
      </MenubarMenu>
      <div className="flex items-center gap-5">
        <MenubarMenu>
          <Button className="cursor-pointer">
            <Download className="cursor-pointer" />
          </Button>
        </MenubarMenu>
        <MenubarMenu>
          <Dialog open={openMain} onOpenChange={setOpenMain}>
            <DialogTrigger>
              <Button variant="outline" className="cursor-pointer">
                <User2 />
                <p className="text-sm text-gray-500">ورود به اکران</p>
              </Button>
            </DialogTrigger>
            <DialogContent
              className="sm:max-w-[425px]"
              onInteractOutside={(e) => e.preventDefault()}
              onEscapeKeyDown={(e) => e.preventDefault()}
            >
              <DialogHeader>
                <DialogTitle className="self-center text-xl">
                  ورود یا ثبت نام در اکران
                </DialogTitle>
                <DialogDescription className="self-center">
                  برای ورود یا ثبت‌نام، اطلاعات کاربری خود را وارد کنید
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name-1">ایمیل</Label>
                  <Input
                    id="email"
                    name="پست الکترونیکی"
                    placeholder="john.doe@gmail.com"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">شماره موبایل</Label>
                  <Input id="mobile" name="mobile" placeholder="09125910037" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">کلمه عبور</Label>
                  <Input id="password" name="password" placeholder="********" />
                </div>
                <div className="grid gap-3">
                  <div className="flex flex-row justify-between gap-5">
                    <Button
                      className="w-[25%]"
                      variant="Ghost"
                      onClick={handleGoToLogin}
                    >
                      ورود به اکران
                    </Button>
                    <Button variant="Ghost" onClick={handleGoToPassword}>
                      فراموشی رمز ورود
                    </Button>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">لغو</Button>
                </DialogClose>
                <Button type="submit">ثبت نام</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="mr-auto">
            <Settings />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>
              {theme == "light" ? (
                <Button variant="outline" onClick={() => setTheme("dark")}>
                  <Image
                    src="/images/moon.png"
                    width={20}
                    height={20}
                    unoptimized
                    alt="mode"
                  />
                  <p>dark</p>
                </Button>
              ) : (
                <Button variant="outline" onClick={() => setTheme("light")}>
                  <Image
                    src="/images/sun.png"
                    width={20}
                    height={20}
                    unoptimized
                    alt="mode"
                  />
                  <p>light</p>
                </Button>
              )}
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
      <Dialog open={openLogin} onOpenChange={setOpenLogin}>
        <DialogContent
          className="sm:max-w-[400px]"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="self-center text-xl">
              ورود به حساب کاربری
            </DialogTitle>
            <DialogDescription className="self-center">
              لطفاً ایمیل و رمز عبور خود را وارد کنید
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="login-email">ایمیل</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="you@email.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="login-password">کلمه عبور</Label>
              <Input
                id="login-password"
                type="password"
                placeholder="********"
              />
            </div>
            <Button>ورود</Button>
            <div className="flex flex-row justify-between gap-5">
              <Button variant="Ghost" onClick={handleGoToMain}>
                ثبت نام در اکران
              </Button>
              <Button variant="Ghost" onClick={handleGoToPassword}>
                فراموشی رمز ورود
              </Button>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">بازگشت</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={openPassword} onOpenChange={setOpenPassword}>
        <DialogContent
          className="sm:max-w-[400px]"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="self-center text-xl">
              بازیابی کلمه عبور
            </DialogTitle>
            <DialogDescription className="self-center ">
              لطفاً ایمیل خود را وارد کنید
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="login-email">ایمیل</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="you@email.com"
              />
            </div>
            <Button>ارسال</Button>
            <div className="flex flex-row justify-between gap-5">
              <Button variant="Ghost" onClick={handleGoToMain}>
                ثبت نام در اکران
              </Button>
              <Button variant="Ghost" onClick={handleGoToLogin}>
                ورود به اکران
              </Button>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">بازگشت</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Menubar>
  );
}
