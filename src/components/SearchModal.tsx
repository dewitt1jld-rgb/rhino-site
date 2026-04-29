"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { trainingSearchIndex } from "@/data/trainingSearchIndex";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({ open, onClose }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Reset when closed
  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

const results = useMemo(() => {
  if (!query.trim()) return [];

  const q = query.toLowerCase();

  return trainingSearchIndex
    .map((item) => {
      let score = 0;

      if (item.title.toLowerCase().includes(q)) score += 3;
      if (item.tags.some((tag) => tag.toLowerCase().includes(q))) score += 2;
      if (item.description.toLowerCase().includes(q)) score += 1;

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}, [query]);

  const handleNavigate = (href: string) => {
    onClose();
    router.push(href);
  };

  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* INPUT */}
        <input
          autoFocus
          type="text"
          placeholder="Search training..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="searchInput"
        />

        {/* RESULTS */}
        <div className="results">
          {!query && (
            <div className="empty">Start typing to search...</div>
          )}

          {query && results.length === 0 && (
            <div className="empty">No results found</div>
          )}

          {results.map((item, i) => (
            <div
              key={i}
              className="resultItem"
              onClick={() => handleNavigate(item.href)}
            >
              <div className="resultTitle">{item.title}</div>
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
          max-width: 720px;
          background: #0b0f17;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
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
          max-height: 400px;
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

        .resultTitle {
          font-weight: 800;
          color: #fff;
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