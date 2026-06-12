import { useEffect, useMemo, useState } from "react";
import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import { createClient } from "@/lib/supabase";

const supabase = createClient();

type TrainingVideo = {
  id: string;
  title: string;
  slug: string;
  category: string;
  subcategory: string | null;
  training_type: string | null;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  duration: string | null;
  page_slug: string | null;
  tags: string[] | null;
  featured: boolean | null;
};

export default function TutorialVideosPage() {
  const [videos, setVideos] = useState<TrainingVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function loadVideos() {
      const { data, error } = await supabase
        .from("training_videos")
        .select("*")
        .order("featured", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading training videos:", error);
        setVideos([]);
      } else {
        setVideos(data || []);
      }

      setLoading(false);
    }

    loadVideos();
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(videos.map((video) => video.category)));
    return ["All", ...unique];
  }, [videos]);

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const searchText = `${video.title} ${video.description || ""} ${
        video.category
      } ${video.subcategory || ""} ${(video.tags || []).join(
        " "
      )}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || video.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [videos, search, activeCategory]);

  const subcategories = useMemo(() => {
    return Array.from(
      new Set(filteredVideos.map((video) => video.subcategory || video.category))
    );
  }, [filteredVideos]);

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <div className="breadcrumb">
            Training Pages / Tutorial Video Library
          </div>

          <section className="heroPanel">
            <p className="eyebrow">Training Library</p>
            <h1>Tutorial Videos</h1>
            <p className="helperText">
              Search quick tutorials, walkthroughs, troubleshooting videos, and
              advanced training clips across Rhino Training, Glazier Studio, and
              PartnerPak.
            </p>
          </section>

          <section className="panel">
            <div className="videoControls">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search tutorial videos..."
                className="searchInput"
              />

              <div className="categoryTabs">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={activeCategory === category ? "activeTab" : ""}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {loading ? (
            <section className="panel">
              <p className="helperText">Loading tutorial videos...</p>
            </section>
          ) : filteredVideos.length === 0 ? (
            <section className="panel emptyState">
              <h2>No videos available yet</h2>
              <p>
                Once videos are added to Supabase, they will automatically show
                up here.
              </p>
            </section>
          ) : (
            <div className="videoRows">
              {subcategories.map((subcategory) => {
                const categoryVideos = filteredVideos.filter(
                  (video) =>
                    (video.subcategory || video.category) === subcategory
                );

                if (categoryVideos.length === 0) return null;

                return (
                  <section key={subcategory} className="videoRowSection">
                    <div className="rowHeader">
                      <h2>{subcategory}</h2>
                    </div>

                    <div className="horizontalScroller">
                      {categoryVideos.map((video) => (
                        <article key={video.id} className="videoMiniCard">
                          <a
                            href={video.video_url}
                            target="_blank"
                            rel="noreferrer"
                            className="miniThumbnailWrap"
                          >
                            {video.thumbnail_url ? (
                              <img src={video.thumbnail_url} alt={video.title} />
                            ) : (
                              <div className="placeholderThumb">▶</div>
                            )}

                            <div className="thumbnailOverlay">
                              <span className="playCircle">▶</span>
                            </div>

                            {video.duration && (
                              <span className="durationBadge">
                                {video.duration}
                              </span>
                            )}
                          </a>

                          <div className="miniVideoBody">
                            <p className="miniMeta">
                              {video.training_type || "Tutorial"}
                            </p>

                            <h3>{video.title}</h3>

                            {video.subcategory && (
                              <p className="miniSubcategory">
                                {video.subcategory}
                              </p>
                            )}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>

        <style jsx>{`
          .pageWrap {
            max-width: 1180px;
            width: 100%;
            margin: 0 auto;
            overflow-x: hidden;
          }

          .videoControls {
            display: grid;
            gap: 22px;
          }

          .searchInput {
            width: 100%;
            padding: 16px 18px;
            border-radius: 14px;
            border: 1px solid rgba(245, 158, 11, 0.22);
            background: rgba(255, 255, 255, 0.06);
            color: white;
            font-size: 1rem;
            outline: none;
          }

          .searchInput::placeholder {
            color: rgba(255, 255, 255, 0.45);
          }

          .categoryTabs {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }

          .categoryTabs button {
            border: 1px solid rgba(245, 158, 11, 0.22);
            background: rgba(255, 255, 255, 0.045);
            color: rgba(255, 255, 255, 0.78);
            padding: 10px 14px;
            border-radius: 999px;
            cursor: pointer;
            font-weight: 800;
          }

          .categoryTabs .activeTab {
            color: #111827;
            background: #f59e0b;
            border-color: #f59e0b;
          }

          .videoRows {
            display: grid;
            gap: 34px;
          }

          .videoRowSection {
            width: 100%;
            max-width: 100%;
            overflow: hidden;
            padding: 22px;
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.035);
            border: 1px solid rgba(245, 158, 11, 0.14);
          }

          .rowHeader {
            margin-bottom: 16px;
          }

          .rowHeader h2 {
            color: white;
            margin: 0;
            font-size: 1.35rem;
          }

          .horizontalScroller {
            width: 100%;
            max-width: 100%;
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: calc((100% - 54px) / 4);
            gap: 18px;
            overflow-x: auto;
            overflow-y: hidden;
            padding-bottom: 14px;
            scroll-snap-type: x mandatory;
          }

          .horizontalScroller::-webkit-scrollbar {
            height: 10px;
          }

          .horizontalScroller::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.06);
            border-radius: 999px;
          }

          .horizontalScroller::-webkit-scrollbar-thumb {
            background: rgba(245, 158, 11, 0.75);
            border-radius: 999px;
          }

          .videoMiniCard {
            width: 100%;
            min-width: 0;
            scroll-snap-align: start;
            background: linear-gradient(
              180deg,
              rgba(25, 31, 45, 0.95),
              rgba(18, 22, 32, 0.95)
            );
            border: 1px solid rgba(245, 158, 11, 0.35);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
            transition: transform 0.22s ease, border-color 0.22s ease,
              box-shadow 0.22s ease;
          }

          .videoMiniCard:hover {
            transform: translateY(-6px) scale(1.03);
            border-color: rgba(245, 158, 11, 0.45);
            box-shadow: 0 26px 55px rgba(0, 0, 0, 0.55);
          }

          .miniThumbnailWrap {
            position: relative;
            display: block;
            width: 100%;
            aspect-ratio: 16 / 9;
            overflow: hidden;
            cursor: pointer;
            text-decoration: none;
            background: #0b1220;
          }

          .miniThumbnailWrap img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center center;
            display: block;
            background: #0b1220;
          }

          .placeholderThumb {
            height: 100%;
            display: grid;
            place-items: center;
            font-size: 2.4rem;
            color: #f59e0b;
          }

          .thumbnailOverlay {
            position: absolute;
            inset: 0;
            display: grid;
            place-items: center;
            background: rgba(0, 0, 0, 0.35);
            opacity: 0;
            transition: opacity 0.2s ease;
          }

          .videoMiniCard:hover .thumbnailOverlay {
            opacity: 1;
          }

          .playCircle {
            width: 52px;
            height: 52px;
            border-radius: 999px;
            display: grid;
            place-items: center;
            background: #f59e0b;
            color: #111827;
            font-size: 1.4rem;
            font-weight: 900;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
          }

          .durationBadge {
            position: absolute;
            right: 10px;
            bottom: 10px;
            border-radius: 999px;
            padding: 5px 9px;
            font-size: 0.7rem;
            font-weight: 900;
            z-index: 2;
            background: rgba(0, 0, 0, 0.78);
            color: white;
          }

          .miniVideoBody {
            padding: 15px;
          }

          .miniMeta {
            color: #f59e0b;
            font-size: 0.72rem;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin: 0 0 8px;
          }

          .miniVideoBody h3 {
            color: white;
            font-size: 1rem;
            line-height: 1.3;
            margin: 0 0 8px;
          }

          .miniSubcategory {
            color: rgba(255, 255, 255, 0.55);
            font-size: 0.82rem;
            margin: 0 0 12px;
          }

          .emptyState {
            text-align: center;
          }

          .emptyState h2 {
            color: white;
            margin-bottom: 12px;
          }

          .emptyState p {
            color: rgba(255, 255, 255, 0.72);
          }

          @media (max-width: 900px) {
            .horizontalScroller {
              grid-auto-columns: calc((100% - 18px) / 2);
            }
          }

          @media (max-width: 560px) {
            .horizontalScroller {
              grid-auto-columns: 85%;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}