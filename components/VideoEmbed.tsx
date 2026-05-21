import { extractYouTubeId } from "@/lib/youtube";

export default function VideoEmbed({ src, title }: { src: string; title?: string }) {
  const id = extractYouTubeId(src);
  if (!id) return null;
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-2xl border hairline bg-bone/5">
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
        title={title ?? "Video"}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
