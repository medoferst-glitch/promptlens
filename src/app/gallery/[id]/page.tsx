import { notFound } from "next/navigation";
import Link from "next/link";
import CopyButton from "@/components/CopyButton";

const GALLERY_ITEMS = [
  {
    id: "1",
    title: "Cyberpunk cityscape at night",
    tags: ["Architecture", "Sci-Fi"],
    prompt:
      "A towering neon-lit cyberpunk city at midnight, rain-slicked streets reflecting holographic advertisements, cinematic composition, volumetric fog, blade runner aesthetic, ultra-detailed, 8k, photorealistic rendering, dark atmosphere, dramatic shadows, neon blue and pink color palette, moody noir lighting",
  },
  {
    id: "2",
    title: "Impressionist portrait",
    tags: ["Portrait", "Art"],
    prompt:
      "Impressionist oil painting portrait, soft brushstrokes, warm golden hour light, Monet style, muted earthy tones, expressive face, painterly texture, museum quality, loose brushwork, dappled light, vintage color grading, canvas texture visible",
  },
  {
    id: "3",
    title: "Abstract digital wave",
    tags: ["Abstract", "Digital"],
    prompt:
      "Abstract generative art, flowing sine waves in electric blue and violet, dark background, mathematical precision, glowing edges, data visualization aesthetic, high contrast, digital art, 4k resolution, clean lines, neon glow effect",
  },
  {
    id: "4",
    title: "Fantasy mountain fortress",
    tags: ["Architecture", "Fantasy"],
    prompt:
      "Epic fantasy fortress built into a jagged mountain peak, surrounded by storm clouds, dramatic lighting, concept art style, cinematic wide angle, detailed stone architecture, dragons circling overhead, dark fantasy atmosphere, epic scale, matte painting quality",
  },
  {
    id: "5",
    title: "Ethereal forest spirit",
    tags: ["Nature", "Fantasy"],
    prompt:
      "Mystical forest spirit glowing with bioluminescent light, ancient trees with glowing roots, foggy night, studio ghibli style, soft pastel colors, hand-painted look, whimsical atmosphere, magical realism, delicate light particles",
  },
  {
    id: "6",
    title: "Retro synthwave sunset",
    tags: ["Landscape", "Retro"],
    prompt:
      "Retro synthwave sunset over the ocean, neon pink and purple sky, chrome grid horizon, 80s aesthetic, palm tree silhouettes, retrowave, outrun style, highly stylized, vaporwave colors, synthpop vibes, geometric sun half below horizon",
  },
];

type Props = {
  params: Promise<{ id: string }>;
};

export default async function GalleryItemPage({ params }: Props) {
  const { id } = await params;
  const item = GALLERY_ITEMS.find((i) => i.id === id);
  if (!item) notFound();

  return (
    <main className="flex-1 bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-[#787671] hover:text-[#1a1a1a] text-sm mb-8 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Gallery
        </Link>

        {/* Image placeholder */}
        <div className="aspect-video bg-[#f6f5f4] rounded-[12px] flex items-center justify-center mb-8 border border-[#e5e3df]">
          <svg
            className="w-12 h-12 text-[#c8c4be]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3.75h18M3 20.25h18M12 12a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
            />
          </svg>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-[#e6e0f5] text-[#391c57] font-semibold px-3 py-1 rounded-[6px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl font-semibold text-[#1a1a1a] mb-8 tracking-[-0.5px]">{item.title}</h1>

        {/* Prompt box */}
        <div className="bg-white border border-[#e5e3df] rounded-[12px] overflow-hidden mb-8">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e3df] bg-[#f6f5f4]">
            <span className="text-[#1a1a1a] font-semibold text-sm">Prompt</span>
            <CopyButton
              text={item.prompt}
              className="text-sm text-[#5645d4] hover:text-[#4534b3] font-medium transition-colors"
            />
          </div>
          <div className="p-5">
            <p className="text-[#37352f] text-sm leading-relaxed font-mono">{item.prompt}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/studio"
            className="bg-[#5645d4] hover:bg-[#4534b3] text-white font-medium text-sm px-[18px] py-[10px] rounded-[8px] transition-colors inline-block"
          >
            Try with your own image →
          </Link>
        </div>
      </div>
    </main>
  );
}
