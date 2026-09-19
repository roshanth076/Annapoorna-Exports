import { type FormEvent, useEffect, useState } from "react";
import { Link } from "wouter";
import { products } from "./productData";
import { toast } from "sonner";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleCheck,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Plane,
  Quote,
  ShieldCheck,
  Ship,
  Sparkles,
  X,
} from "lucide-react";

const heroImage = "/assets/bharat-rooted-hero.jpg";

const catalogCategories = [
  { id: "all", label: "All offerings", note: "09 products" },
  { id: "vegetables", label: "Vegetables", note: "Fresh produce" },
  { id: "spices", label: "Spices & staples", note: "Everyday essentials" },
  { id: "poultry", label: "Poultry equipment", note: "Farm supplies" },
];

const assurances = [
  {
    icon: Leaf,
    title: "Rooted in origin",
    text: "We work close to India’s growing regions to protect provenance, freshness, and flavor.",
  },
  {
    icon: ShieldCheck,
    title: "Made for confidence",
    text: "Clear specifications, considered packing, and export-ready documentation from the start.",
  },
  {
    icon: Globe2,
    title: "Ready for your market",
    text: "Flexible formats and freight planning for importers, distributors, and food brands worldwide.",
  },
];

const process = [
  [
    "01",
    "Align",
    "We understand your product brief, market needs, volume, and delivery window.",
  ],
  [
    "02",
    "Source",
    "We select from trusted Indian origin networks with quality at the first mile.",
  ],
  [
    "03",
    "Prepare",
    "Your order is graded, packed, documented, and made ready for its journey.",
  ],
  [
    "04",
    "Deliver",
    "We coordinate air or ocean freight with visibility from dispatch to destination.",
  ],
];

const routes = [
  {
    id: "middle-east",
    label: "Middle East",
    lead: "Fast, dependable access to Gulf markets.",
    countries: [
      "United Arab Emirates",
      "Saudi Arabia",
      "Qatar",
      "Oman",
      "Kuwait",
      "Bahrain",
    ],
    detail:
      "Air freight for time-sensitive fresh produce and ocean freight for planned bulk shipments.",
    port: "India → Jebel Ali / Dammam",
  },
  {
    id: "southeast-asia",
    label: "Southeast Asia",
    lead: "A practical route for growing food markets.",
    countries: ["Singapore", "Malaysia", "Indonesia", "Thailand", "Vietnam"],
    detail:
      "Consolidated and full-container options for staples, spices, and agricultural products.",
    port: "India → Singapore / Port Klang",
  },
  {
    id: "global",
    label: "Global enquiries",
    lead: "Tell us where your next shipment needs to go.",
    countries: [
      "Africa",
      "Europe",
      "Indian Ocean markets",
      "Custom destination",
    ],
    detail:
      "We can scope the best route, documents, and packing approach around your destination rules.",
    port: "Origin India → destination port or airport",
  },
];

function scrollToId(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
const [menuOpen, setMenuOpen] = useState(false);
const [email, setEmail] = useState("");
const [submitting, setSubmitting] = useState(false);
const [activeRoute, setActiveRoute] = useState(routes[0]);
useEffect(() => {
  if (window.location.hash === "#contact") {
    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}, []);

const [activeCategory, setActiveCategory] = useState("all");


  const goTo = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };
 const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (!email || !email.includes("@")) {
    toast.error("Please enter a valid email address.");
    return;
  }

  setSubmitting(true);
  const form = event.currentTarget;


  try {
const formData = new FormData(form);

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      },
     );

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Unable to send enquiry");
    }

    toast.success(
      "Thank you. Your enquiry has been sent successfully.",
    );

    form.reset();
    setEmail("");
  } catch {
    toast.error(
      "We could not send your enquiry. Please try again.",
    );
  } finally {
    setSubmitting(false);
  }
};


  const visibleProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f0e7] text-[#183b30]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#163a2e]/92 text-[#f7f4eb] shadow-[0_10px_30px_rgba(18,48,39,0.14)] backdrop-blur-lg">
        <div className="container flex h-[78px] items-center justify-between">
          <button
            className="group flex items-center gap-3 text-left"
            onClick={() => goTo("top")}
            aria-label="Annapoorna Exports home"
          >
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#e9ad4e]/70 bg-[#e9ad4e] text-[#163a2e]">
              <Leaf
                className="absolute -bottom-1 h-7 w-7 -rotate-12 fill-current transition-transform duration-200 group-hover:rotate-6"
                strokeWidth={1.6}
              />
              <span className="absolute left-1/2 top-0 h-2 w-px bg-[#163a2e]/60" />
            </span>

            <span className="leading-[0.9]">
              <span className="block font-display text-[1.13rem] font-semibold tracking-[-0.02em]">
                Annapoorna Exports
              </span>
              <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.26em] text-[#e9ad4e]">
                India / Global trade
              </span>
            </span>
          </button>

          <nav
            className="hidden items-center gap-8 text-[0.72rem] font-semibold uppercase tracking-[0.16em] md:flex"
            aria-label="Primary navigation"
          >
            <button onClick={() => goTo("story")} className="nav-link">
              Our story
            </button>
            <button onClick={() => goTo("products")} className="nav-link">
              Products
            </button>
            <button onClick={() => goTo("trade-info")} className="nav-link">
              Trade info
            </button>
            <button
              onClick={() => goTo("certifications")}
              className="nav-link"
            >
              Trust
            </button>
            <button onClick={() => goTo("routes")} className="nav-link">
              Routes
            </button>
            <button
              onClick={() => goTo("contact")}
              className="nav-link flex items-center gap-2 text-[#e9ad4e]"
            >
              <span>Get a quotation</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </nav>

          <button
            className="rounded-full border border-white/25 p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#163a2e] px-5 py-5 md:hidden">
            <div className="container flex flex-col gap-4 text-sm font-semibold uppercase tracking-[0.16em]">
              <button onClick={() => goTo("story")} className="text-left">
                Our story
              </button>
              <button onClick={() => goTo("products")} className="text-left">
                Products
              </button>
              <button onClick={() => goTo("trade-info")} className="text-left">
                Trade info
              </button>
              <button
                onClick={() => goTo("certifications")}
                className="text-left"
              >
                Trust
              </button>
              <button onClick={() => goTo("routes")} className="text-left">
                Routes
              </button>
              <button
                onClick={() => goTo("contact")}
                className="text-left text-[#e9ad4e]"
              >
                Get a quotation →
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="top">
<section className="relative flex min-h-[680px] items-center overflow-hidden bg-[#183b30] pt-[78px] text-[#faf8ef]">
          <img
            src={heroImage}
            alt="Indian spices and export cartons prepared for global shipment"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,45,35,0.97)_0%,rgba(17,54,42,0.78)_36%,rgba(20,58,45,0.12)_75%),linear-gradient(0deg,rgba(9,34,27,0.55),transparent_50%)]" />

          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.55)_0.7px,transparent_0.7px)] [background-size:6px_6px]" />

<div className="container relative z-10 grid w-full items-end gap-14 py-16 lg:grid-cols-[1fr_330px]">
            <div className="max-w-[780px]">
              <div className="mb-8 flex items-center gap-3 text-[0.67rem] font-bold uppercase tracking-[0.27em] text-[#e9ad4e]">
                <span className="h-px w-12 bg-[#e9ad4e]" />
                From India, with integrity
              </div>

              <h1 className="max-w-4xl font-display text-[clamp(3.7rem,8vw,7.7rem)] font-medium leading-[0.86] tracking-[-0.065em] text-[#fbf8ed]">
                Good food
                  

                <em className="font-display text-[#e9ad4e]">
                  travels far.
                </em>
              </h1>

              <p className="mt-9 max-w-[545px] text-[1.07rem] leading-8 text-[#e7e9dc]">
                Annapoorna Exports connects quality Indian agricultural and food
                products with buyers across the Middle East, Southeast Asia,
                and global markets.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => goTo("contact")}
                  className="button-primary"
                >
                  Request a quotation
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => goTo("story")}
                  className="button-quiet"
                >
                  Why Annapoorna
                  <ArrowDownRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="hidden border-l border-white/25 pl-7 lg:block">
              <div className="mb-8 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#e9ad4e]">
                <Sparkles className="h-3.5 w-3.5" />
                Our promise
              </div>

              <p className="font-display text-[1.56rem] leading-[1.05] tracking-[-0.025em] text-[#faf8ef]">
                Indian origin you can trust, with delivery planning you can
                depend on.
              </p>

              <div className="mt-10 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/60">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#e9ad4e]" />
                Air & ocean freight
              </div>
            </div>
          </div>
        </section>

        <section
          id="story"
          className="relative overflow-hidden bg-[#f4f0e7] py-24 md:py-32"
        >
          <div className="container grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
            <div className="relative">
              <div className="section-kicker">The short version</div>

              <h2 className="mt-5 max-w-[430px] font-display text-[clamp(2.9rem,5vw,5.2rem)] leading-[0.93] tracking-[-0.055em]">
                A little closer
                  

                <em>to the source.</em>
              </h2>

              <div className="mt-12 flex items-center gap-5">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d5cbb7] text-[#c67a2b]">
                  <Leaf className="h-6 w-6" />
                </span>
                <span className="max-w-[180px] text-sm leading-6 text-[#52635a]">
                  Rooted in India.
                    

                  Ready for the world.
                </span>
              </div>
            </div>

            <div className="max-w-[690px] lg:pt-12">
              <p className="font-display text-[1.8rem] leading-[1.18] tracking-[-0.03em] text-[#244b3d] md:text-[2.35rem]">
                Annapoorna Exports is a professional international export
                partner for the ingredients that make food feel like home.
              </p>

              <p className="mt-8 max-w-[590px] text-[1rem] leading-8 text-[#647169]">
                We connect trusted Indian agricultural and food products with
                importers, distributors, and food businesses across the Middle
                East, Southeast Asia, and beyond. From product quality
                management to customs clearance and final delivery, we make the
                route simple, visible, and dependable.
              </p>

              <div className="mt-10 grid gap-6 border-t border-[#d9d2c4] pt-7 sm:grid-cols-3">
                {[
                  "Origin-led sourcing",
                  "Clear specifications",
                  "Global freight planning",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-2 text-[0.73rem] font-bold uppercase leading-5 tracking-[0.13em] text-[#315746]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c67a2b]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e9ad4e] py-5 text-[#183b30]">
          <div className="container flex flex-col justify-between gap-3 text-[0.69rem] font-bold uppercase tracking-[0.17em] md:flex-row md:items-center">
            <span>Carefully selected in India</span>
            <span className="hidden h-px flex-1 bg-[#183b30]/25 md:block" />
            <span>
              Prepared for the world
              <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" />
            </span>
          </div>
        </section>

        <section
          id="products"
          className="bg-[#183b30] py-24 text-[#f7f4eb] md:py-32"
        >
          <div className="container">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div className="section-kicker text-[#e9ad4e]">
                  The product edit
                </div>

                <h2 className="mt-5 max-w-[570px] font-display text-[clamp(3rem,6vw,5.8rem)] leading-[0.9] tracking-[-0.06em]">
                  The pantry,
                    

                  <em className="text-[#e9ad4e]">properly sourced.</em>
                </h2>
              </div>

              <p className="max-w-[270px] text-sm leading-6 text-[#b9c8bc]">
                A practical range for international buyers, from fresh
                agricultural produce to everyday staples and aromatic spices.
              </p>
            </div>

            <div className="catalog-toolbar">
              <div
                className="catalog-tabs"
                role="tablist"
                aria-label="Product categories"
              >
                {catalogCategories.map((category) => (
                  <button
                    key={category.id}
                    role="tab"
                    aria-selected={activeCategory === category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`catalog-tab ${
                      activeCategory === category.id ? "active" : ""
                    }`}
                  >
                    <span>{category.label}</span>
                    <small>{category.note}</small>
                  </button>
                ))}
              </div>

              <div className="catalog-count">
                <span className="catalog-count-dot" />
                Showing {visibleProducts.length.toString().padStart(2, "0")}{" "}
                offerings
              </div>
            </div>

            <div className="mt-8 grid gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <Link
                  href={`/products/${product.slug}`}
                  key={product.code}
                  className={`product-card group ${product.tone}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[0.66rem] font-bold tracking-[0.22em] text-[#183b30]/65">
                      {product.code}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#183b30]/55 transition-transform duration-200 group-hover:rotate-45" />
                  </div>

                  <div className="catalog-card-image">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="font-display text-[2rem] tracking-[-0.04em] text-[#183b30]">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#183b30]/65">
                      {product.detail}
                    </p>

                    <span className="catalog-card-link">
                      View product
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
              <span className="text-[0.72rem] uppercase tracking-[0.16em] text-[#aebcaf]">
                Need a specific grade or format?
              </span>

              <button
                onClick={() => goTo("contact")}
                className="flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#e9ad4e] transition-colors hover:text-white"
              >
                Talk to our sourcing team
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section
          id="trade-info"
          className="bg-[#f4f0e7] py-24 md:py-32"
        >
          <div className="container">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <div className="section-kicker">Trade information</div>

                <h2 className="mt-5 max-w-[650px] font-display text-[clamp(3rem,6vw,5.7rem)] leading-[0.9] tracking-[-0.06em]">
                  Clear terms.
                    

                  <em>Better planning.</em>
                </h2>
              </div>

              <p className="max-w-[330px] text-sm leading-7 text-[#647169]">
                A starting point for your buying brief. Final specifications,
                documents, and pricing are confirmed product by product.
              </p>
            </div>

            <div className="mt-16 grid gap-5 lg:grid-cols-3">
              <article className="info-card">
                <div className="info-icon">
                  <CircleCheck />
                </div>

                <div className="mt-8 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#bd6f2b]">
                  Certifications & compliance
                </div>

                <h3 className="mt-3 font-display text-3xl">
                  Export-ready paperwork
                </h3>

                <ul className="mt-7 space-y-4 text-sm leading-6 text-[#5c6d60]">
                  <li>
                    <Check /> Certificate of Origin
                  </li>
                  <li>
                    <Check /> Phytosanitary / health documents as applicable
                  </li>
                  <li>
                    <Check /> Product specifications and lab documents as
                    required
                  </li>
                  <li>
                    <Check /> Customs clearance coordination
                  </li>
                </ul>

                <p className="mt-7 border-t border-[#d9d2c4] pt-5 text-xs leading-5 text-[#7b8277]">
                  Required certifications vary by product and destination; we
                  share the relevant set with every quotation.
                </p>
              </article>

              <article className="info-card">
                <div className="info-icon">
                  <PackageCheck />
                </div>

                <div className="mt-8 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#bd6f2b]">
                  Indicative MOQs
                </div>

                <h3 className="mt-3 font-display text-3xl">
                  Built around your brief
                </h3>

                <div className="mt-7 space-y-4">
                  <div className="metric-row">
                    <span>Trial / sample order</span>
                    <strong>From 100 kg</strong>
                  </div>
                  <div className="metric-row">
                    <span>Commercial shipment</span>
                    <strong>From 500 kg</strong>
                  </div>
                  <div className="metric-row">
                    <span>Container planning</span>
                    <strong>By product</strong>
                  </div>
                </div>

                <p className="mt-7 border-t border-[#d9d2c4] pt-5 text-xs leading-5 text-[#7b8277]">
                  MOQs are indicative and may change by item, season,
                  destination, and packaging format. Ask us for an exact quote.
                </p>
              </article>

              <article className="info-card">
                <div className="info-icon">
                  <ShieldCheck />
                </div>

                <div className="mt-8 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#bd6f2b]">
                  Packaging formats
                </div>

                <h3 className="mt-3 font-display text-3xl">
                  Made for the journey
                </h3>

                <ul className="mt-7 space-y-4 text-sm leading-6 text-[#5c6d60]">
                  <li>
                    <Check /> Woven PP / jute sacks for bulk produce
                  </li>
                  <li>
                    <Check /> Corrugated cartons for protected handling
                  </li>
                  <li>
                    <Check /> Food-grade liners and sealed inner packs
                  </li>
                  <li>
                    <Check /> Custom labels and pack sizes on request
                  </li>
                </ul>

                <p className="mt-7 border-t border-[#d9d2c4] pt-5 text-xs leading-5 text-[#7b8277]">
                  Final pack design is aligned to product, shelf life, handling,
                  and destination-market requirements.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="certifications" className="trust-section">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-24">
              <div>
                <div className="section-kicker text-[#e9ad4e]">
                  Trust, documented
                </div>

                <h2 className="mt-5 font-display text-[clamp(3rem,6vw,5.8rem)] leading-[0.88] tracking-[-0.06em]">
                  Credentials
                    

                  <em className="text-[#e9ad4e]">that travel.</em>
                </h2>
              </div>

              <div>
                <p className="max-w-[600px] text-base leading-7 text-[#b9c8bc]">
                  Our export documentation is prepared to support confident
                  international trade. Explore our registrations, certifications,
                  and compliance records that help buyers verify our business
                  identity, product standards, and shipment readiness from India
                  to markets worldwide.
                </p>

                <div className="mt-7 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#e9ad4e]">
                  <ShieldCheck className="h-4 w-4" />
                  Buyer-ready documentation
                </div>
              </div>
            </div>

            <div className="trust-grid">
              {[
                {
                  name: "Add certificate or registration name",
                  authority: "Add issuing authority",
                  registration: "Add registration number / ID",
                  validity: "Add validity / issue date",
                },
                {
                  name: "Add certificate or registration name",
                  authority: "Add issuing authority",
                  registration: "Add registration number / ID",
                  validity: "Add validity / issue date",
                },
                {
                  name: "Add certificate or registration name",
                  authority: "Add issuing authority",
                  registration: "Add registration number / ID",
                  validity: "Add validity / issue date",
                },
              ].map((certificate, index) => (
                <article
                  className="trust-card"
                  key={`${certificate.name}-${index}`}
                >
                  <div className="trust-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="trust-status">
                    <CircleCheck className="h-4 w-4" />
                    Export documentation
                  </div>

                  <h3 className="mt-7 font-display text-2xl text-[#183b30]">
                    {certificate.name}
                  </h3>

                  <div className="mt-5 space-y-3 text-sm text-[#68766c]">
                    <div className="trust-field">
                      <span>Issuing authority</span>
                      <strong>{certificate.authority}</strong>
                    </div>

                    <div className="trust-field">
                      <span>Registration no. / ID</span>
                      <strong>{certificate.registration}</strong>
                    </div>

                    <div className="trust-field">
                      <span>Validity / issue date</span>
                      <strong>{certificate.validity}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-7 text-xs leading-5 text-[#9caf9f]">
              Documentation is available upon request. Certification details and
              registration records are shared with buyers during quotation and
              compliance review.
            </p>
          </div>
        </section>

        <section
          id="journey"
          className="bg-[#dfe6d9] py-24 md:py-32"
        >
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
              <div>
                <div className="section-kicker text-[#bd6f2b]">
                  The journey
                </div>

                <h2 className="mt-5 font-display text-[clamp(3rem,6vw,5.8rem)] leading-[0.88] tracking-[-0.06em] text-[#183b30]">
                  From field
                    

                  to <em>far away.</em>
                </h2>

                <p className="mt-8 max-w-[330px] text-sm leading-7 text-[#52665a]">
                  Every shipment has a story. Ours is built on knowing what
                  happens between the harvest and your warehouse.
                </p>
              </div>

              <div className="grid gap-0 border-t border-[#315746]/20">
                {process.map(([number, title, description]) => (
                  <div
                    key={number}
                    className="grid gap-5 border-b border-[#315746]/20 py-7 sm:grid-cols-[70px_150px_1fr] sm:items-start"
                  >
                    <span className="font-display text-2xl text-[#bd6f2b]">
                      {number}
                    </span>
                    <h3 className="font-display text-2xl tracking-[-0.03em] text-[#183b30]">
                      {title}
                    </h3>
                    <p className="max-w-[370px] text-sm leading-6 text-[#5c6d60]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="routes"
          className="bg-[#183b30] py-24 text-[#f7f4eb] md:py-32"
        >
          <div className="container">
            <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
              <div>
                <div className="section-kicker text-[#e9ad4e]">
                  Where we serve
                </div>

                <h2 className="mt-5 font-display text-[clamp(3rem,6vw,5.8rem)] leading-[0.88] tracking-[-0.06em]">
                  Routes that
                    

                  <em className="text-[#e9ad4e]">move with you.</em>
                </h2>

                <p className="mt-8 max-w-[340px] text-sm leading-7 text-[#b9c8bc]">
                  Choose a corridor to see the markets and freight approach we
                  can help you plan from India.
                </p>

                <div className="mt-10 flex flex-wrap gap-2">
                  {routes.map((route) => (
                    <button
                      key={route.id}
                      onClick={() => setActiveRoute(route)}
                      className={`route-tab ${
                        activeRoute.id === route.id ? "active" : ""
                      }`}
                    >
                      {route.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="route-visual">
                <div className="route-map">
                  <div className="map-grid" />
                  <div className="map-label india-label">
                    <span className="map-pin" />
                    India
                    <small>Origin</small>
                  </div>
                  <div className="route-line line-one" />
                  <div className="route-line line-two" />
                  <div className="route-line line-three" />
                  <div className="map-destination destination-one">Gulf</div>
                  <div className="map-destination destination-two">SEA</div>
                  <div className="map-destination destination-three">
                    World
                  </div>
                  <Plane className="route-plane plane-one" />
                  <Ship className="route-ship" />
                </div>

                <div className="route-copy">
                  <div>
                    <div className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#e9ad4e]">
                      {activeRoute.label}
                    </div>
                    <h3 className="mt-3 font-display text-3xl">
                      {activeRoute.lead}
                    </h3>
                  </div>

                  <div className="max-w-[300px] text-sm leading-6 text-[#b9c8bc]">
                    <div className="mb-3 flex items-center gap-2 text-[#f7f4eb]">
                      <MapPin className="h-4 w-4 text-[#e9ad4e]" />
                      {activeRoute.port}
                    </div>
                    {activeRoute.detail}
                  </div>
                </div>

                <div className="country-list">
                  {activeRoute.countries.map((country) => (
                    <span key={country}>
                      <Check className="h-3.5 w-3.5 text-[#e9ad4e]" />
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f0e7] py-24 md:py-32">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              {assurances.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="border-t border-[#cfc6b5] pt-6"
                >
                  <Icon
                    className="h-6 w-6 text-[#bd6f2b]"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-8 font-display text-2xl tracking-[-0.03em] text-[#183b30]">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-[280px] text-sm leading-6 text-[#68766c]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#c8752e] py-24 text-[#fbf8ed] md:py-28">
          <div className="absolute -right-4 -top-10 font-display text-[22rem] leading-none text-white/10">
            “
          </div>

          <div className="container relative z-10">
            <Quote className="h-8 w-8 text-[#f8d28a]" strokeWidth={1.3} />

            <blockquote className="mt-9 max-w-[850px] font-display text-[clamp(2.25rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.055em]">
              “The best partnerships are the ones that make distance feel like
              a detail.”
            </blockquote>

            <div className="mt-10 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#ffe1ab]">
              <span className="h-px w-9 bg-[#ffe1ab]" />
              Our way of working
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-[#183b30] py-24 text-[#f7f4eb] md:py-32"
        >
          <div className="container grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
            <div>
              <div className="section-kicker text-[#e9ad4e]">
                Let’s make a route
              </div>

              <h2 className="mt-5 max-w-[650px] font-display text-[clamp(3rem,6vw,6.4rem)] leading-[0.87] tracking-[-0.06em]">
                Tell us what
                  

                <em className="text-[#e9ad4e]">you’re building.</em>
              </h2>

              <p className="mt-8 max-w-[510px] text-base leading-7 text-[#bdcabe]">
                Share what you’re looking to source, where it needs to go, and
                when you need it there. We’ll come back with the right
                conversation.
              </p>

              <div className="mt-12 flex flex-col gap-5 text-sm text-[#bdcabe]">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#e9ad4e]" />
                  annapoornaexports11@gmail.com
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#e9ad4e]" />
                  54, Maharajapuram Thirukkokaranam(Post), Pudukottai(Dt), Tamil Nadu - 622002, India.
                </div>
              </div>
            </div>

            <div className="lg:pt-20">
              <form
  onSubmit={handleSubmit}
  className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm md:p-8"
>
<input
  type="hidden"
  name="access_key"
  value="e0f251be-ede7-4f57-a3ac-c1e1977bdfa9"
/>

<input
  type="hidden"
  name="subject"
  value="New Annapoorna Exports enquiry"
/>

<input
  type="hidden"
  name="from_name"
  value="Annapoorna Exports website"
/>


                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <span className="font-display text-xl">Start here</span>
                  <span className="text-[0.63rem] font-bold uppercase tracking-[0.16em] text-[#e9ad4e]">
                    01 / 01
                  </span>
                </div>

                <label
                  htmlFor="email"
                  className="mt-8 block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#b9c8bc]"
                >
                  Your work email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event ) => setEmail(event.target.value)}
                  placeholder="you@yourcompany.com"
                  className="mt-3 w-full border-b border-white/25 bg-transparent px-0 py-3 text-lg text-white outline-none placeholder:text-white/35 focus:border-[#e9ad4e]"
                />

                <label
                  htmlFor="message"
                  className="mt-7 block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#b9c8bc]"
                >
                  What would you like to source?
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  placeholder="Product, quantity, destination, timing..."
                  className="mt-3 w-full resize-none border-b border-white/25 bg-transparent px-0 py-3 text-base text-white outline-none placeholder:text-white/35 focus:border-[#e9ad4e]"
                />

              <p className="mt-5 text-xs leading-5 text-[#9caf9f]">
Your enquiry will be submitted securely and our team will get back to you shortly.
</p>


            <button
  type="submit"
  disabled={submitting}
  className="button-primary mt-8 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
>
  {submitting ? "Sending…" : "Send enquiry"}
  <ArrowUpRight className="h-4 w-4" />
</button>

              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#102d24] py-7 text-[#aab9ad]">
        <div className="container flex flex-col justify-between gap-4 text-[0.66rem] font-bold uppercase tracking-[0.16em] md:flex-row md:items-center">
          <span>© 2026 Annapoorna Exports</span>
          <span>Indian origin / Global reach</span>

          <button
            onClick={() => goTo("top")}
            className="flex items-center gap-2 text-[#e9ad4e]"
          >
            Back to top
            <ChevronDown className="h-3.5 w-3.5 rotate-180" />
          </button>
        </div>
      </footer>
    </div>
  );
}
