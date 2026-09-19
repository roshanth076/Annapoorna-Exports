import { ArrowLeft, ArrowUpRight, Check, Mail, PackageCheck, Ship } from "lucide-react";
import { Link, useParams } from "wouter";
import { products } from "./productData";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <div className="min-h-screen bg-[#f4f0e7] px-6 py-24 text-center text-[#183b30]"><h1 className="font-display text-5xl">Product not found</h1><Link href="/" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[.15em] text-[#bd6f2b]">Back to catalog</Link></div>;
  }

  return (
    <div className="min-h-screen bg-[#f4f0e7] text-[#183b30]">
      <header className="border-b border-[#183b30]/10 bg-[#163a2e] text-[#f7f4eb]"><div className="container flex h-[78px] items-center justify-between"><Link href="/" className="font-display text-xl">Annapoorna Exports</Link><Link href="/#products" className="flex items-center gap-2 text-[.68rem] font-bold uppercase tracking-[.15em] text-[#e9ad4e]"><ArrowLeft className="h-4 w-4" /> Back to catalog</Link></div></header>
      <main>
        <section className="product-detail-hero"><div className="container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-24"><div className="product-detail-image"><img src={product.image} alt={product.imageAlt} /></div><div><div className="section-kicker">{product.categoryLabel}</div><h1 className="mt-5 max-w-[640px] font-display text-[clamp(3.8rem,8vw,7.4rem)] leading-[.86] tracking-[-.06em]">{product.name}</h1><p className="mt-8 max-w-[590px] text-lg leading-8 text-[#5c6d60]">{product.description}</p><div className="mt-9 flex flex-wrap gap-3"><a href="#quote" className="button-primary">Request this product <ArrowUpRight className="h-4 w-4" /></a><a href="/#Contact" className="button-outline-light">Email the export team <Mail className="h-4 w-4" /></a></div></div></div></section>
        <section className="bg-[#183b30] py-20 text-[#f7f4eb]"><div className="container grid gap-12 md:grid-cols-3"><div><PackageCheck className="h-6 w-6 text-[#e9ad4e]" /><h2 className="mt-5 font-display text-2xl">Available formats</h2><ul className="mt-5 space-y-3 text-sm leading-6 text-[#b9c8bc]">{product.formats.map((item) => <li key={item} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-[#e9ad4e]" />{item}</li>)}</ul></div><div><Ship className="h-6 w-6 text-[#e9ad4e]" /><h2 className="mt-5 font-display text-2xl">Export planning</h2><p className="mt-5 text-sm leading-6 text-[#b9c8bc]">{product.logistics}</p></div><div><div className="text-[.66rem] font-bold uppercase tracking-[.2em] text-[#e9ad4e]">Indicative starting point</div><h2 className="mt-5 font-display text-4xl">{product.moq}</h2><p className="mt-4 text-sm leading-6 text-[#b9c8bc]">Final MOQ, grade, pricing, and documentation are confirmed based on destination and season.</p></div></div></section>
        <section id="quote" className="bg-[#dfe6d9] py-20"><div className="container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center"><div><div className="section-kicker">Build your brief</div><h2 className="mt-5 font-display text-5xl leading-[.9] tracking-[-.05em]">Need a quote<br /><em>for {product.name}?</em></h2></div><div className="rounded-2xl bg-[#f4f0e7] p-7 shadow-sm"><p className="text-base leading-7 text-[#5c6d60]">Tell us your quantity, destination, preferred packaging, and delivery window. Our export team will help shape the right shipment.</p><Link
  href="/#contact"
  className="button-primary mt-7"
>
  BUILD YOUR BRIEF
  <ArrowUpRight className="h-4 w-4" />
</Link>
</div></div></section>
      </main>
      <footer className="bg-[#102d24] py-7 text-[#aab9ad]"><div className="container flex justify-between gap-4 text-[.66rem] font-bold uppercase tracking-[.16em]"><span>© 2026 Annapoorna Exports</span><span>Indian origin / Global reach</span></div></footer>
    </div>
  );
}
