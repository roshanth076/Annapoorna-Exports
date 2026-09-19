export type Product = {
  name: string;
  slug: string;
  detail: string;
  code: string;
  tone: string;
  category: "vegetables" | "spices" | "poultry";
  categoryLabel: string;
  image: string;
  imageAlt: string;
  description: string;
  formats: string[];
  logistics: string;
  moq: string;
};

const imagePaths = {
  vegetables: "/assets/catalog-vegetables.jpg",
  onions: "/assets/onions.jpg",
  chilli: "/assets/chilli.jpg",
  drychilli: "/assets/drychilli.jpg",
  moringa: "/assets/moringa.jpg",
  turmeric: "/assets/turmeric.jpg",
  spices: "/assets/catalog-spices.jpg",
  riceDal: "/assets/catalog-rice-dal.jpg",
  coconut: "/assets/catalog-coconut.jpg",
  poultry: "/assets/catalog-poultry-equipment.jpg",
};

export const products: Product[] = [
  { name: "Coconut", slug: "coconut", detail: "Fresh, dry & processed formats", code: "01", tone: "ochre", category: "vegetables", categoryLabel: "Vegetables & fresh produce", image: imagePaths.coconut, imageAlt: "Whole and cut coconuts prepared for export", description: "From fresh whole coconuts to dry and processed formats, we help buyers source a dependable coconut program from Indian origin markets.", formats: ["Fresh whole coconut", "Dry coconut / copra", "Processed coconut formats", "Custom pack sizes on request"], logistics: "Air freight is available for time-sensitive fresh requirements; ocean freight supports planned bulk programs and container shipments.", moq: "From 100 kg" },
  { name: "Onions", slug: "onions", detail: "Selected fresh export grades", code: "02", tone: "sage", category: "vegetables", categoryLabel: "Vegetables & fresh produce", image: imagePaths.onions, imageAlt: "Fresh Indian onions prepared for export", description: "Selected Indian onions for importers and distributors seeking consistent fresh produce, considered packing, and reliable dispatch planning.", formats: ["Fresh export-grade onions", "Mesh bags and sacks", "Custom calibrated sizes", "Destination-ready labels"], logistics: "We plan grading, packing, customs documentation, and air or ocean movement around your delivery window.", moq: "From 500 kg" },
  { name: "Green chilli", slug: "green-chilli", detail: "Fresh & market-ready", code: "03", tone: "ink", category: "vegetables", categoryLabel: "Vegetables & fresh produce", image: imagePaths.chilli, imageAlt: "Fresh green chillies in a woven basket", description: "Fresh green chillies selected for foodservice, wholesale, and retail supply chains across the Middle East and Southeast Asia.", formats: ["Fresh green chilli", "Wholesale export cartons", "Ventilated produce packing", "Market-specific labeling"], logistics: "Air freight can support time-sensitive freshness requirements; route selection is confirmed against destination and season.", moq: "From 100 kg" },
  { name: "Dry chilli", slug: "dry-chilli", detail: "Whole, flakes & powder", code: "04", tone: "rust", category: "spices", categoryLabel: "Spices & staple foods", image: imagePaths.drychilli, imageAlt: "Dried red chillies prepared for export", description: "Aromatic Indian dry chilli for manufacturers, distributors, and food brands, available in whole, flake, and powder formats.", formats: ["Whole dried chilli", "Chilli flakes", "Chilli powder", "Food-grade inner liners"], logistics: "Ocean freight is suited to planned bulk spice shipments, with air freight available for samples or urgent smaller programs.", moq: "From 100 kg" },
  { name: "Drumsticks", slug: "drumsticks", detail: "Fresh moringa pods", code: "05", tone: "olive", category: "vegetables", categoryLabel: "Vegetables & fresh produce", image: imagePaths.moringa, imageAlt: "Fresh moringa drumsticks prepared for export", description: "Fresh moringa drumsticks sourced for buyers looking for an Indian agricultural product with careful handling and export-ready preparation.", formats: ["Fresh moringa pods", "Export cartons", "Protective liners", "Custom pack weights"], logistics: "We coordinate handling, documentation, and the most practical air or ocean route for your destination.", moq: "From 100 kg" },
  { name: "Rice & dal", slug: "rice-dal", detail: "Staples for global kitchens", code: "06", tone: "sand", category: "spices", categoryLabel: "Spices & staple foods", image: imagePaths.riceDal, imageAlt: "Rice and dal in export-ready sacks and bowls", description: "Everyday Indian staples for wholesalers, distributors, and food businesses, with flexible pack sizes for different market needs.", formats: ["Rice varieties", "Toor, moong, masoor and other dals", "Jute, PP and retail-ready packs", "Private-label packing by brief"], logistics: "Ocean freight is the efficient route for planned bulk quantities; we can also scope smaller trial shipments.", moq: "From 500 kg" },
  { name: "Turmeric", slug: "turmeric", detail: "Roots, fingers & powder", code: "07", tone: "ochre", category: "spices", categoryLabel: "Spices & staple foods", image: imagePaths.turmeric, imageAlt: "Turmeric roots and powder arranged for export", description: "Bright, aromatic Indian turmeric for food manufacturers, spice distributors, and international kitchens.", formats: ["Whole turmeric fingers", "Turmeric powder", "Bulk sacks and cartons", "Food-grade sealed inner packs"], logistics: "We can plan documentation, packing, and ocean or air freight according to your product specification and destination.", moq: "From 100 kg" },
  { name: "Spices", slug: "spices", detail: "Cumin, coriander & more", code: "08", tone: "sage", category: "spices", categoryLabel: "Spices & staple foods", image: imagePaths.spices, imageAlt: "Indian spices arranged in bowls for export", description: "A flexible range of Indian spices including cumin, coriander, black pepper, and other aromatic ingredients for global buyers.", formats: ["Whole seeds and spices", "Cracked and flaked formats", "Powdered formats", "Custom specifications"], logistics: "Ocean freight supports planned bulk orders, while air freight can serve samples and urgent replenishment.", moq: "From 100 kg" },
  { name: "Chicken feeders", slug: "chicken-feeders", detail: "Reliable agricultural supplies", code: "09", tone: "ink", category: "poultry", categoryLabel: "Poultry equipment", image: imagePaths.poultry, imageAlt: "Chicken feeder equipment arranged for export", description: "Practical poultry equipment for farms, distributors, and agricultural supply businesses looking for dependable feed management products.", formats: ["Chicken feeders", "Poultry drinker equipment", "Bulk cartons", "Equipment specifications on request"], logistics: "Ocean freight is suited to planned equipment orders; packing and container planning are aligned to the shipment volume.", moq: "From 50 units" },
];
