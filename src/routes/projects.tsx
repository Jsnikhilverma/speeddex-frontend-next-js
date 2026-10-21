import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { TrustShowcase } from "@/components/sections/TrustShowcase";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { projectsList as fallbackProjects } from "@/data/construction-data";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Maximize2,
  Calendar,
  DollarSign,
  ArrowUpRight,
  Clock,
  HardHat,
  CheckCircle2,
  Film,
  Sparkles,
} from "lucide-react";
import {
  fetchPublicProjects,
  resolveMediaUrl,
  type CmsProject,
} from "@/lib/cmsApi";

const safeLocation = (loc: any): string => {
  if (!loc) return "Indore, MP";
  if (typeof loc === "string") return loc;
  if (typeof loc === "object") {
    if (loc.city && loc.state) return `${loc.city}, ${loc.state}`;
    if (loc.city) return loc.city;
    if (loc.address) return loc.address;
  }
  return "Indore, MP";
};

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Landmark Projects Portfolio — V Power Construction" },
      {
        name: "description",
        content:
          "Browse our portfolio of Upcoming, Ongoing, and Completed projects spanning commercial high-rises, civil bridges, and automated industrial logistics parks.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [statusFilter, setStatusFilter] = useState<string>("ALL"); // 'ALL' | 'UPCOMING' | 'ONGOING' | 'COMPLETED'
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [cmsProjects, setCmsProjects] = useState<CmsProject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const loadProjects = async () => {
      try {
        setIsLoading(true);
        const data = await fetchPublicProjects();
        if (isMounted && data.length > 0) {
          setCmsProjects(data);
        }
      } catch (err) {
        console.warn("Failed to fetch projects from CMS:", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    loadProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  // Standardize projects either from CMS or fallback data
  const allProjects =
    cmsProjects.length > 0
      ? cmsProjects.map((p) => ({
          id: p._id || p.slug || p.title,
          title: p.title,
          category: p.categoryLabel || p.category,
          categoryKey: (p.category || "").toLowerCase(),
          status: p.status || "COMPLETED",
          location: safeLocation(p.location),
          area: p.area || "Turnkey Build",
          value: p.value || "Confidential",
          timeline: p.timeline || "Delivered",
          image: resolveMediaUrl(p.featuredImage),
          videoUrl: p.videoUrl,
          description: p.description || "",
          features: p.features || [],
          isFeatured: p.isFeatured || false,
        }))
      : fallbackProjects.map((p, idx) => ({
          ...p,
          status: idx === 1 ? "ONGOING" : idx === 3 ? "UPCOMING" : "COMPLETED",
          videoUrl: "",
          features: [],
          isFeatured: true,
        }));

  const statusOptions = [
    { key: "ALL", label: "All Projects" },
    { key: "UPCOMING", label: "Upcoming Builds", icon: Clock },
    { key: "ONGOING", label: "Ongoing Sites", icon: HardHat },
    { key: "COMPLETED", label: "Completed Landmarks", icon: CheckCircle2 },
  ];

  const categories = [
    { key: "all", label: "All Sectors" },
    { key: "commercial", label: "Commercial Towers" },
    { key: "civil", label: "Civil Infrastructure" },
    { key: "industrial", label: "Industrial & Warehouses" },
    { key: "residential", label: "Luxury Residential" },
  ];

  // Filtering
  const filteredProjects = allProjects.filter((p) => {
    // Status filter
    if (statusFilter !== "ALL" && p.status !== statusFilter) {
      return false;
    }
    // Category filter
    if (categoryFilter !== "all") {
      const pCat = p.categoryKey.toLowerCase();
      const pCatLabel = p.category.toLowerCase();
      if (!pCat.includes(categoryFilter) && !pCatLabel.includes(categoryFilter)) {
        return false;
      }
    }
    return true;
  });

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="LANDMARK PORTFOLIO"
          title="Engineered With Precision. Built To Endure."
          description="Explore our full pipeline of landmark developments—from upcoming megaprojects and ongoing live construction sites to delivered institutional towers."
          ctaText="Discuss Your Project"
          ctaLink="/contact"
        />

        {/* Portfolio Gallery Section */}
        <section className="py-20 px-6 md:px-12 bg-background">
          <div className="max-w-[1440px] mx-auto">
            {/* Primary Status Filters (Upcoming, Ongoing, Completed) */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {statusOptions.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setStatusFilter(key)}
                  className={`px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 ${
                    statusFilter === key
                      ? key === "UPCOMING"
                        ? "bg-blue-600 text-white shadow-blue-600/30 ring-2 ring-blue-600/20"
                        : key === "ONGOING"
                        ? "bg-amber-500 text-slate-950 shadow-amber-500/30 ring-2 ring-amber-500/20"
                        : key === "COMPLETED"
                        ? "bg-emerald-600 text-white shadow-emerald-600/30 ring-2 ring-emerald-600/20"
                        : "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "bg-card hover:bg-muted text-muted-foreground border border-border"
                  }`}
                >
                  {Icon && <Icon size={15} />}
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Category Sub-Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
              {categories.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCategoryFilter(key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition ${
                    categoryFilter === key
                      ? "bg-primary text-primary-foreground font-bold"
                      : "text-muted-foreground hover:text-foreground bg-muted/50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            {filteredProjects.length === 0 ? (
              <div className="text-center py-24 bg-card rounded-3xl border border-border max-w-xl mx-auto">
                <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                <h3 className="text-lg font-bold">No Projects Found</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-6">
                  There are currently no projects matching your filter criteria.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setStatusFilter("ALL");
                    setCategoryFilter("all");
                  }}
                  className="rounded-full"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <article
                    key={project.id}
                    className="rounded-3xl overflow-hidden bg-card border border-border shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Media Header */}
                      <div className="relative h-64 overflow-hidden bg-slate-950">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f9?q=80&w=1200";
                          }}
                        />

                        {/* Status Badge (Upcoming / Ongoing / Completed) */}
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-lg ${
                              project.status === "UPCOMING"
                                ? "bg-blue-600 text-white"
                                : project.status === "ONGOING"
                                ? "bg-amber-500 text-slate-950"
                                : "bg-emerald-600 text-white"
                            }`}
                          >
                            {project.status === "UPCOMING"
                              ? "Upcoming Pipeline"
                              : project.status === "ONGOING"
                              ? "Ongoing Site"
                              : "Completed Build"}
                          </span>
                        </div>

                        {/* Category Tag */}
                        <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                          {project.category}
                        </div>

                        {project.videoUrl && (
                          <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md text-blue-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                            <Film size={14} /> Video Walkthrough
                          </div>
                        )}
                      </div>

                      {/* Content Body */}
                      <div className="p-6">
                        <div className="flex items-center justify-between text-xs text-primary font-bold uppercase tracking-wider mb-2">
                          <span>{project.timeline}</span>
                          {project.isFeatured && (
                            <span className="flex items-center gap-1 text-amber-500">
                              <Sparkles size={13} /> Featured
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-muted-foreground border-t border-border pt-4">
                          <div className="flex items-center gap-2 truncate">
                            <MapPin size={15} className="text-primary shrink-0" />
                            <span className="truncate">{project.location}</span>
                          </div>
                          <div className="flex items-center gap-2 truncate">
                            <Maximize2 size={15} className="text-primary shrink-0" />
                            <span className="truncate">{project.area}</span>
                          </div>
                          <div className="flex items-center gap-2 truncate">
                            <DollarSign size={15} className="text-primary shrink-0" />
                            <span className="truncate">Value: {project.value}</span>
                          </div>
                          <div className="flex items-center gap-2 truncate">
                            <Calendar size={15} className="text-primary shrink-0" />
                            <span className="truncate">Turnkey EPC</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <Button variant="outline" asChild className="w-full rounded-2xl">
                        <a href="/contact">
                          Inquire About Similar Build <ArrowUpRight size={16} />
                        </a>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <TrustShowcase />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
