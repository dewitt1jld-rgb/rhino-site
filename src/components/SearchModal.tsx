"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { siteSearchIndex } from "@/data/siteSearchIndex";
import { createClient } from "@/lib/supabase";

const supabase = createClient();

type Props = {
  open: boolean;
  onClose: () => void;
};

type SearchItem = {
  title: string;
  href: string;
  category: string;
  description: string;
  tags: string[];
  type?: "Page" | "Video";
};

type TrainingVideo = {
  title: string;
  slug: string;
  category: string;
  subcategory: string | null;
  training_type: string | null;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  tags: string[] | null;
};

export default function SearchModal({ open, onClose }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState<TrainingVideo[]>([]);

  useEffect(() => {
    async function loadVideos() {
      const { data, error } = await supabase
        .from("training_videos")
        .select(
          "title, slug, category, subcategory, training_type, description, video_url, thumbnail_url, tags"
        );

      if (error) {
        console.error("Error loading video search results:", error);
        setVideos([]);
      } else {
        setVideos(data || []);
      }
    }

    if (open) {
      loadVideos();
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const searchableItems: SearchItem[] = useMemo(() => {
    const pageItems: SearchItem[] = siteSearchIndex.map((item) => ({
      title: item.title,
      href: item.href,
      category: item.category,
      description: item.description,
      tags: item.tags || [],
      type: "Page",
    }));

    const videoItems: SearchItem[] = videos.map((video) => ({
      title: video.title,
      href: video.video_url,
      category: video.subcategory || video.category,
      description:
        video.description ||
        `${video.training_type || "Tutorial"} • ${
          video.subcategory || video.category
        }`,
      tags: [
        ...(video.tags || []),
        video.category,
        video.subcategory || "",
        video.training_type || "",
      ].filter(Boolean),
      type: "Video",
    }));

    return [...pageItems, ...videoItems];
  }, [videos]);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();

    return searchableItems
      .map((item) => {
        let score = 0;

        if (item.title.toLowerCase().includes(q)) score += 5;
        if (item.category.toLowerCase().includes(q)) score += 3;
        if (item.tags.some((tag) => tag.toLowerCase().includes(q))) score += 2;
        if (item.description.toLowerCase().includes(q)) score += 1;
        if (item.type?.toLowerCase().includes(q)) score += 1;

        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
  }, [query, searchableItems]);

  const handleNavigate = (item: SearchItem) => {
    onClose();

    if (item.type === "Video") {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }

    router.push(item.href);
  };

  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <input
          autoFocus
          type="text"
          placeholder="Search training pages and tutorial videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="searchInput"
        />

        <div className="results">
          {!query && <div className="empty">Start typing to search...</div>}

          {query && results.length === 0 && (
            <div className="empty">No results found</div>
          )}

          {results.map((item, i) => (
            <div
              key={`${item.type}-${item.href}-${i}`}
              className="resultItem"
              onClick={() => handleNavigate(item)}
            >
              <div className="resultTopLine">
                <div className="resultTitle">{item.title}</div>
                <span
                  className={
                    item.type === "Video" ? "typeBadge video" : "typeBadge page"
                  }
                >
                  {item.type}
                </span>
              </div>

              <div className="resultCategory">{item.category}</div>
              <div className="resultDesc">{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 100px;
          z-index: 9999;
        }

        .modal {
          width: 100%;
          max-width: 760px;
          background: #0b0f17;
          border-radius: 20px;
          border: 1px solid rgba(245, 158, 11, 0.22);
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
        }

        .searchInput {
          width: 100%;
          padding: 18px 20px;
          border: none;
          outline: none;
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          font-size: 16px;
        }

        .results {
          max-height: 480px;
          overflow-y: auto;
        }

        .resultItem {
          padding: 16px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          transition: 0.2s;
        }

        .resultItem:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .resultTopLine {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .resultTitle {
          font-weight: 800;
          color: #fff;
        }

        .typeBadge {
          flex-shrink: 0;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border-radius: 999px;
          padding: 5px 8px;
        }

        .typeBadge.page {
          color: #111827;
          background: #f59e0b;
        }

        .typeBadge.video {
          color: #ffffff;
          background: rgba(34, 197, 94, 0.22);
          border: 1px solid rgba(34, 197, 94, 0.45);
        }

        .resultCategory {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 2px;
        }

        .resultDesc {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
          margin-top: 6px;
          line-height: 1.45;
        }

        .empty {
          padding: 20px;
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 700px) {
          .modal {
            margin: 0 12px;
          }
        }
      `}</style>
    </div>
  );
}