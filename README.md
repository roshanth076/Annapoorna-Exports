# Annapoorna Exports

Annapoorna Exports is a modern international export website designed to connect quality Indian agricultural and food products with buyers across the Middle East, Southeast Asia, and other global markets.

The website provides a professional platform for showcasing export products, explaining logistics and freight services, displaying product details, and allowing potential customers to submit enquiries and quotation requests.

---

## 🌐 Project Overview

Annapoorna Exports is a responsive web application built with React, TypeScript, Tailwind CSS, and Vite.

The project is designed to provide an online presence for an export business dealing with Indian agricultural and food products.

The website focuses on:

- Product catalogue presentation
- Product category browsing
- Individual product details
- International export services
- Air freight information
- Ocean freight information
- Freight route visualisation
- Customer quotation requests
- Customer enquiries
- Certification and registration information
- Responsive design for desktop and mobile devices

---

## ✨ Features

### 📦 Product Catalogue

The website provides a product catalogue where visitors can:

- Browse available products
- View products by category
- View product images
- Read product information
- Open individual product detail pages
- Submit enquiries regarding products

Product information is maintained within the project's source code for easier editing and maintenance.

### 🌾 Export Products

The catalogue includes Indian agricultural and food products such as:

- Coconut
- Onions
- Green Chilli
- Dry Chilli
- Drumsticks
- Rice
- Dal
- Turmeric
- Spices
- Chicken Feeders

The product catalogue can be expanded as new products are added to the business.

### 🚢 Export & Freight Services

The website provides information about international export and logistics services, including:

- Air Freight
- Ocean Freight
- International shipping
- Freight routes
- Export logistics information
- Global delivery information

The freight section is designed to help potential buyers understand the available transportation options.

### 🗺️ Freight Route Visualisation

The website includes visual information related to freight routes and international transportation.

This helps communicate how products can be transported from India to international markets.

### 📝 Product Quotation Flow

Customers can explore products and submit quotation enquiries based on their requirements.

The quotation flow is intended to make communication between potential buyers and Annapoorna Exports easier.

### 📩 Customer Enquiry Form

The website includes an enquiry form powered by Web3Forms.

Customers can use the form to send their requirements and questions to the configured business email.

The form is intended for general business enquiries, product enquiries, and quotation requests.

### 🏆 Certification & Registration Section

The website contains a section for displaying company certifications, registrations, and other business information.

Any certification, registration, licence, or verification information shown on the production website should be checked and replaced with accurate and verified information before publishing.

### 📱 Responsive Design

The website is designed to work across different screen sizes, including:

- Desktop computers
- Laptops
- Tablets
- Smartphones

The layout, navigation, product sections, images, and enquiry forms are designed to adapt to different screen sizes.

---

## 🛠️ Technology Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- HTML5
- CSS3

### Build & Development

- Vite
- Node.js
- pnpm

### Services

- Web3Forms for customer enquiries

### Development Tools

- Visual Studio Code
- Git
- GitHub

---

## 📁 Project Structure

```text
APEX-EX/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── const.ts
│   │   ├── index.css
│   │   └── main.tsx
│   │
│   └── index.html
│
├── patches/
│   └── wouter@3.7.1.patch
│
├── server/
│   └── index.ts
│
├── shared/
│   └── const.ts
│
├── .gitignore
├── .gitkeep
├── .prettierignore
├── .prettierrc
├── .project-config.json
├── APEX_LOCAL_SETUP.md
├── components.json
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── README.md
├── template.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

> `node_modules/` is intentionally not included in the repository. Dependencies can be recreated locally using `pnpm install`.

---

## 💻 Requirements

Before running the project locally, make sure the following are installed:

- Node.js
- pnpm
- Git

You can check the installed versions using:

```bash
node --version
pnpm --version
git --version
```

---

## 🚀 Installation

### 1. Clone the Repository

Clone the repository using Git:

```bash
git clone <YOUR-GITHUB-REPOSITORY-URL>
```

Move into the project directory:

```bash
cd APEX-EX
```

### 2. Install Dependencies

Install the project dependencies using pnpm:

```bash
pnpm install
```

This will install the required packages and recreate the `node_modules` directory locally.

---

## ▶️ Run the Project Locally

Start the development server:

```bash
pnpm dev
```

The terminal will display the local development address.

It will typically be similar to:

```text
http://localhost:5173
```

Open the displayed address in a web browser to view the website.

---

## 🔍 Check the Project

Run the project's checking command:

```bash
pnpm check
```

This can be used to identify TypeScript and project-related issues.

---

## 🏗️ Build for Production

To create a production build:

```bash
pnpm build
```

The generated production build can then be deployed using a suitable hosting platform.

---

## 📝 Editing Product Information

Product information is maintained within the project's React source code.

The relevant product-related components and data can be found inside:

```text
client/src/
```

If product data is maintained in a dedicated page or data file, update the corresponding file there.

When adding or modifying a product, make sure the associated product image and information are also updated.

---

## 🖼️ Managing Images

Website images should be stored inside the project's public assets directory when applicable.

For example:

```text
client/public/assets/
```

An image can then be referenced from the application using a path such as:

```tsx
image: "/assets/catalog-onions.jpg"
```

### Image Guidelines

When replacing or adding images:

1. Place the image in the correct assets directory.
2. Check that the filename is correct.
3. Make sure the filename used in the code matches the actual filename.
4. Avoid unnecessary spaces and special characters in filenames.
5. Check uppercase and lowercase characters carefully.
6. Test the website after replacing images.

For example:

```text
catalog-onions.jpg
```

should match:

```tsx
"/assets/catalog-onions.jpg"
```

---

## 🏷️ Editing Certifications and Registration Information

Certification and registration information is displayed within the website's React components.

Before publishing the website:

- Verify all certification information.
- Verify registration numbers.
- Verify company information.
- Remove placeholder information.
- Do not publish unverified certifications or registrations.

Only genuine and verifiable business information should be displayed.

---

## 📩 Web3Forms Configuration

The enquiry form uses Web3Forms to process customer submissions.

The service allows visitors to submit enquiries through the website and deliver them to the configured business email.

Before publishing the project, verify that the Web3Forms configuration is correct.

### Security

Never commit sensitive credentials to GitHub.

Do not upload:

- Passwords
- Private API keys
- SMTP credentials
- GitHub tokens
- Database passwords
- Authentication secrets
- Private access tokens
- Confidential business credentials

If environment variables are used, sensitive `.env` files should not be committed to the repository.

Example `.gitignore` entries:

```text
.env
.env.local
.env.*.local
```

---

## 🔐 Security

Before making the repository public, check the entire project for sensitive information.

Make sure the repository does not contain:

- API secrets
- Access tokens
- Passwords
- Private credentials
- Customer information
- Database credentials
- Internal confidential documents

If a secret is accidentally committed to Git history, deleting the file later may not completely remove the secret from the repository history.

Any exposed credential should be revoked or rotated as appropriate.

---

## 📄 Local Setup Documentation

Additional project-specific local setup information is available in:

```text
APEX_LOCAL_SETUP.md
```

Refer to this file if additional configuration is required for running the project locally.

---

## 🔄 Development Workflow

A typical development workflow for this project is:

```text
Edit Code
    ↓
Run Development Server
    ↓
Test Website
    ↓
Fix Issues
    ↓
Run Project Checks
    ↓
Build Project
    ↓
Commit Changes
    ↓
Push to GitHub
```

Useful commands:

```bash
pnpm dev
pnpm check
pnpm build
```

Git commands:

```bash
git status
git add .
git commit -m "Update website"
git push
```

---

## 🧪 Testing Checklist

Before publishing changes, check the following:

- [ ] Home page loads correctly
- [ ] Navigation works correctly
- [ ] Mobile navigation works
- [ ] Product catalogue loads correctly
- [ ] Product filtering works
- [ ] Product detail pages work
- [ ] Product images load correctly
- [ ] Hero images load correctly
- [ ] Quotation flow works
- [ ] Enquiry form works
- [ ] Certification information is verified
- [ ] No broken links
- [ ] No missing images
- [ ] No unexpected console errors
- [ ] `pnpm check` completes successfully
- [ ] `pnpm build` completes successfully
- [ ] No private credentials are included in the repository

---

## 🌍 Target Markets

The website is designed to support international buyers and markets including:

- India
- Middle Eastern countries
- Southeast Asia
- Other global destinations

The website can be expanded to support additional markets and products as the business develops.

---

## 🚢 Deployment

Before deploying the website:

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run the Project Locally

```bash
pnpm dev
```

### 3. Test the Website

Check the main pages, navigation, products, images, forms, and responsive layouts.

### 4. Run Project Checks

```bash
pnpm check
```

### 5. Create a Production Build

```bash
pnpm build
```

### 6. Configure External Services

Make sure any required environment variables or external services are correctly configured.

### 7. Deploy

Deploy the production application using a compatible hosting platform.

### 8. Test the Live Website

After deployment, test the live website again and verify that all important features work correctly.

---

## 🔮 Future Improvements

Potential future improvements include:

- Advanced product search
- Product availability management
- Customer quotation tracking
- Admin dashboard
- Database-backed product management
- Shipment tracking
- Order management
- Customer account management
- Multi-language support
- Additional freight route information
- SEO improvements
- Analytics integration
- Performance optimization
- Additional international markets
- Additional product categories

---

## 📌 Project Status

**Status:** Active Development

The project is currently being developed and updated as new products, services, business information, and website features are added.

---

## 📜 License

This project is released under the MIT License.

See the `LICENSE` file for the complete license text.

### Copyright and Business Assets

The MIT License applies to the source code covered by the license.

Company branding, logos, photographs, generated images, product information, certification records, registration details, business content, and other proprietary materials may have separate rights and are **not automatically licensed for reuse** by the MIT License.

---

## 📞 Contact

### Annapoorna Exports

International export website for Indian agricultural and food products.

**Markets:**

India · Middle East · Southeast Asia · Global Destinations

For business enquiries, please use the enquiry/contact form provided on the website.

---

## 👨‍💻 Development

Developed as a modern React-based export business website focused on:

- Product presentation
- International export services
- Freight information
- Customer enquiries
- Quotation requests
- Responsive web design