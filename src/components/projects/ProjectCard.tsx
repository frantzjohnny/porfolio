import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  size?: "normal" | "wide";
}

export default function ProjectCard({
  project,
  index,
  size = "normal",
}: ProjectCardProps) {
  return (
    <div
      className={`group relative pb-2 sm:pb-3 ${
        size === "wide" ? "col-span-1 md:col-span-2" : ""
      }`}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        {/* 1. IMAGE: 16/10 aspect ratio, 22px border radius, subtle hover scale */}
        <div className="relative overflow-hidden rounded-[22px] bg-[#F3F4F6] aspect-[16/10] w-full border border-[#E5E7EB]/40 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            loading={index < 2 ? "eager" : "lazy"}
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 650px"
          />
          <div className="absolute inset-0 bg-[#080B12]/0 group-hover:bg-[#080B12]/5 transition-colors duration-200" />
        </div>

        {/* 2. PROJECT META & INFO */}
        <div className="mt-5 flex items-end justify-between gap-6">
          <div className="flex-1 min-w-0">
            {/* Category */}
            <div className="mb-1.5">
              <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6F737A]">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[19px] sm:text-[20px] font-bold text-[#080B12] group-hover:text-[#4A4E56] transition-colors leading-snug mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] text-[#6F737A] leading-[1.5] line-clamp-2 mb-3">
              {project.shortDescription}
            </p>

            {/* Year */}
            <div className="text-[12px] font-medium text-[#9CA3AF]">
              {project.year}
            </div>
          </div>

          {/* 3. Circular Action Button */}
          <div className="w-[44px] h-[44px] rounded-full border border-[#D9DDE2] bg-white flex items-center justify-center flex-shrink-0 mb-1 transition-all duration-200 group-hover:bg-[#080B12] group-hover:border-[#080B12] shadow-sm">
            <ArrowUpRight
              size={18}
              strokeWidth={1.8}
              className="text-[#080B12] transition-colors duration-200 group-hover:text-white"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
