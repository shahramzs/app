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

export default function Videos() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-2">
      {videos.map((video, i) => (
        <Card className="mt-2 w-full h-[280px] lg:w-[320px] md:w-[360px] sm:w-[410px] xs:w-[420px] ">
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
 