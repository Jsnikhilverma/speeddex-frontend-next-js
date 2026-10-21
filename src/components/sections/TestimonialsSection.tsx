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
        if (isMounted && data.length > 0) {
          setCmsTestimonials(data);
        }
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
      ? cmsTestimonials.map((t) => ({
          name: t.name,
          role: t.role,
          project: t.project || t.company || "Institutional Development",
          avatar:
            resolveMediaUrl(t.avatar) ||
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
          quote: t.quote,
          rating: t.rating || 5,
        }))
      : fallbackTestimonials.map((t) => ({
          ...t,
          rating: 5,
        }));

  return (
    <section id="reviews" className="bg-secondary py-14 md:py-[108px] px-5 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block border border-border bg-background text-foreground rounded-[24px] text-xs font-bold px-4 py-3 mb-6 md:mb-8 uppercase tracking-wider">
            CLIENT ENDORSEMENTS
          </span>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2] mt-4">
            What Industry Leaders Say.
          </h2>
          <div className="h-1 md:h-1.5 w-20 mx-auto my-5 md:mt-6 md:mb-12 rounded-[3px] bg-accent" />
          <p className="max-w-[640px] text-muted-foreground text-[17px] md:text-xl mx-auto mb-8 md:mb-14 leading-[1.6]">
            Read direct testimonials from managing directors, institutional developers, and
            master architects who entrust their largest investments to our engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-14">
          {items.map(({ name, role, project, avatar, quote, rating }) => (
            <article
              key={name}
              className="bg-background rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between border border-border"
            >
              <div>
                <div className="flex gap-1 text-orange mb-6">
                  {[...Array(rating || 5)].map((_, idx) => (
                    <Star key={idx} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-[17px] leading-[1.65] text-foreground mb-8 italic">{quote}</p>
              </div>

              <div className="flex items-center gap-4 border-t border-border pt-5">
                <img
                  src={avatar}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent shrink-0"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300";
                  }}
                />
                <div className="min-w-0">
                  <div className="text-base font-extrabold leading-[1.2] truncate">{name}</div>
                  <div className="text-[13px] text-muted-foreground mt-0.5 truncate">{role}</div>
                  {project && (
                    <div className="text-[11px] font-bold text-accent tracking-[0.5px] uppercase mt-1 truncate">
                      {project}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
