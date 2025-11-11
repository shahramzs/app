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
import { Input } from "@/components/ui/input";
import { Settings, Search, User2, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function MenuBar() {
  const { theme, setTheme } = useTheme();
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
          <Button variant="outline" className="cursor-pointer">
            <User2 />
            <p className="text-sm text-gray-500">ورود به اکران</p>
          </Button>
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
    </Menubar>
  );
}
