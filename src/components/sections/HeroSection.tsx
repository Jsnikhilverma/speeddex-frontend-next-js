import { useState, useEffect } from "react";
import heroVideo from "@/assets/main_2.mp4";
import {
  fetchPublicBanners,
  resolveMediaUrl,
  type CmsBanner,
} from "@/lib/cmsApi";
import { ChevronLeft, ChevronRight, Play, ArrowRight, ShieldCheck } from "lucide-react";

export function HeroSection() {
  const [banners, setBanners] = useState<CmsBanner[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadBanners = async () => {
      try {
        const data = await fetchPublicBanners("HERO");
        if (isMounted && data.length > 0) {
          setBanners(data);
        }
      } catch (err) {
        console.warn("Failed to load hero banners from CMS:", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    loadBanners();
    return () => {
      isMounted = false;
    };
  }, []);

  const activeBanner = banners[currentIndex];
  const hasMultiple = banners.length > 1;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Resolve media source (either dynamic from CMS or local fallback)
  const isVideo = activeBanner
    ? activeBanner.mediaType === "VIDEO"
    : true;

  const mediaSource = activeBanner
    ? resolveMediaUrl(activeBanner.mediaUrl)
    : heroVideo;

  return (
    <section
      id="home"
      className="relative h-[calc(100svh-88px)] md:h-[calc(100svh-56px)] min-h-[540px] md:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Media (Video or Image) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {isVideo ? (
          <video
            key={mediaSource}
            className="w-full h-full object-cover scale-105 transform motion-safe:animate-fade-in"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Construction and engineering project showcase"
          >
            <source src={mediaSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            key={mediaSource}
            src={mediaSource}
            alt={activeBanner?.title || "Hero banner"}
            className="w-full h-full object-cover scale-105 transform motion-safe:animate-fade-in"
          />
        )}

        {/* Ambient Dark Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/30" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-950/60" />
      </div>

      {/* Hero Content Overlay (If Banner has details) */}
      {activeBanner && (activeBanner.title || activeBanner.badge) && (
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          {activeBanner.badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in">
              <ShieldCheck size={16} />
              <span>{activeBanner.badge}</span>
            </div>
          )}

          {activeBanner.title && (
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl drop-shadow-md">
              {activeBanner.title}
            </h1>
          )}

          {activeBanner.subtitle && (
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed drop-shadow-sm font-normal">
              {activeBanner.subtitle}
            </p>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {activeBanner.ctaText && (
              <a
                href={activeBanner.ctaLink || "/projects"}
                className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm tracking-wider uppercase transition shadow-xl shadow-blue-600/30 flex items-center gap-2 hover:gap-3"
              >
                <span>{activeBanner.ctaText}</span>
                <ArrowRight size={18} />
              </a>
            )}

            {activeBanner.secondaryCtaText && (
              <a
                href={activeBanner.secondaryCtaLink || "/contact"}
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-extrabold text-sm tracking-wider uppercase transition flex items-center gap-2"
              >
                <span>{activeBanner.secondaryCtaText}</span>
              </a>
            )}
          </div>
        </div>
      )}

      {/* Carousel Multi-Banner Navigation Controls */}
      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition hover:scale-105"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition hover:scale-105"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-8 z-20 flex items-center gap-2.5">
            {banners.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-blue-500 shadow-lg shadow-blue-500/50"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
