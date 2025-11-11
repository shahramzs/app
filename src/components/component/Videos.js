import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { videos } from "@/utils/Constants";
import Image from "next/image";

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
        <Card key={i} className="w-full max-w-full h-50">
          <CardContent>
            <Image
              src={video.image}
              alt={video.title}
              width={100}
              height={100}
            />
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
