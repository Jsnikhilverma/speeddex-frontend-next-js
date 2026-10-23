
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { testimonials as fallbackTestimonials } from "@/data/construction-data";
import {
  fetchPublicTestimonials,
  resolveMediaUrl,
  type CmsTestimonial,
} from "@/lib/cmsApi";

export function TestimonialsSection() {
  const [cmsTestimonials, setCmsTestimonials] = useState<CmsTestimonial[]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadTestimonials = async () => {
      try {
        const data = await fetchPublicTestimonials();
        if (isMounted && data.length > 0) setCmsTestimonials(data);
      } catch (err) {
        console.warn("Failed to load testimonials from CMS API:", err);
      }
    };

    loadTestimonials();
    return () => {
      isMounted = false;
    };
  }, []);

  const items =
    cmsTestimonials.length > 0
      ? cmsTestimonials.map((t, index) => ({
          id: `cms-${index}`,
          name: t.name,
          role: t.role,
          project: t.project || t.company || "Institutional Development",
          avatar:
            resolveMediaUrl(t.avatar) ||
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
          quote: t.quote,
          rating: t.rating || 5,
        }))
      : fallbackTestimonials.map((t, index) => ({
          ...t,
          id: `fallback-${index}`,
          rating: 5,
        }));

  const sliderItems = [...items, ...items];

  return (
    <section
      id="reviews"
      className="overflow-hidden bg-secondary py-14 md:py-[108px]"
    >
      <style>{`
        @keyframes testimonialScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonial-motion { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto mb-12 max-w-[1440px] px-5 text-center md:mb-16 md:px-12">

        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl -mt-12">
          What Industry Leaders Say.
        </h2>

        <div className="mx-auto my-5 h-1 w-20 rounded-full bg-accent md:my-6" />

        <p className="mx-auto max-w-[640px] text-base leading-[1.7] text-muted-foreground md:text-xl">
          Hear from our clients about the quality, reliability, and
          craftsmanship we bring to every construction project.
        </p>
      </div>

      <div className="group w-full overflow-hidden">
        <div
          className="testimonial-motion flex w-max gap-6 pr-6 [animation:testimonialScroll_45s_linear_infinite] group-hover:[animation-play-state:paused]"
        >
          {sliderItems.map(
            ({ id, name, role, project, avatar, quote, rating }, index) => (
              <article
                key={`${id}-${index}`}
                className="flex w-[85vw] max-w-[400px] shrink-0 flex-col justify-between rounded-3xl border border-border bg-background p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:w-[360px] sm:p-8 lg:w-[400px]"
              >
                <div>
                  <div className="mb-6 flex gap-1 text-orange">
                    {[...Array(Math.min(Math.max(rating || 5, 1), 5))].map(
                      (_, idx) => (
                        <Star
                          key={idx}
                          size={18}
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      )
                    )}
                  </div>

                  <p className="mb-8 text-base italic leading-7 text-foreground sm:text-[17px]">
                    “{quote}”
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-border pt-5">
                  <img
                    src={avatar}
                    alt={name}
                    loading="lazy"
                    className="h-14 w-14 shrink-0 rounded-full border-2 border-accent object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300";
                    }}
                  />

                  <div className="min-w-0">
                    <div className="truncate text-base font-extrabold">
                      {name}
                    </div>
                    <div className="mt-1 truncate text-sm text-muted-foreground">
                      {role}
                    </div>
                    {project && (
                      <div className="mt-1 truncate text-[11px] font-bold uppercase tracking-wider text-orange">
                        {project}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
