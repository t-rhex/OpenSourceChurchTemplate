import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play, Facebook, Youtube } from "lucide-react";

interface VideoDialogProps {
  platform: "youtube" | "facebook";
  videoId: string;
  title: string;
}

export function VideoDialog({ platform, videoId, title }: VideoDialogProps) {
  const PlatformIcon = platform === "youtube" ? Youtube : Facebook;
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full gap-2">
          <Play className="w-4 h-4" />
          Watch on {platform === "youtube" ? "YouTube" : "Facebook"}
          <PlatformIcon className="w-4 h-4 ml-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full sm:w-11/12 mx-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video mt-2">
          <iframe
            src={
              platform === "youtube"
                ? `https://www.youtube.com/embed/${videoId}`
                : `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F${videoId}%2F&show_text=false`
            }
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
} 