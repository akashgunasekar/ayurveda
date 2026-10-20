# Ayurkshetra — Premium Ayurveda Hospital Website

An authentic, cinematic, and SEO-engineered hospital website for **Ayurkshetra (Institute of Ayurvedic Research Pvt. Ltd)**, Chennai. Built with Next.js App Router, TypeScript, Tailwind CSS, Swiper.js, and Framer Motion.

---

## 🌿 Project Highlights

- **Cinematic Swiper.js Hero Slider**: Full-viewport responsive hero with autoplay, zoom transitions (scale 1.06 to 1.0), independent Framer Motion text reveals, slide progress indicator, and eager image preloading.
- **12 Homepage Sections**: Faithfully structured in accordance with creative direction (Hero, Trust & 27-Year Legacy, Ayurveda Philosophy & Tridoshas, 12 Treatments Grid, Why Choose Us, Verified Medical Faculty, 4-Stage Patient Journey, 36-Bed Facilities, Educational Clinical Blog, Expandable FAQ Accordion, High-Conversion CTA, and Comprehensive Editorial Footer).
- **Verified Clinical Content**: Real doctors (Dr. K.S. Ajalkumar, Dr. V. Sharda Ajalkumar, Dr. T.S. Aswin Raj), authentic Keraliya Panchakarma therapies (Uro Basti, Navarakizhi, Podikizhi, Avagaha Sweda, Shirodhara), and official hospital contact details in Arumbakkam, Chennai.
- **Functional Appointment Booking Suite**: React Hook Form + Zod schema validation (client and server), honeypot anti-spam protection, unique clinical booking reference generator (`AYUR-XXXX`), and clear development/production mode status.
- **Technical SEO & Schema.org**: Complete JSON-LD structured data (`Hospital`, `MedicalBusiness`, `Physician`, `MedicalProcedure`, `BlogPosting`, `FAQPage`, `BreadcrumbList`), dynamic XML sitemap (`/sitemap.xml`), and `robots.txt`.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18.18+ or v20+)
- npm (v9+)

### 2. Run the Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 3. Production Build & Static Generation
```bash
npm run build
npm run start
```
All 34 static and dynamic routes are prerendered cleanly.

---

## 📁 Key Routes

- `/` — Homepage (all 12 sections with cinematic Swiper hero)
- `/about` — Hospital heritage, 27-year clinical legacy, and social missions
- `/treatments` — Complete treatments directory categorized into Panchakarma, Clinical Specialities, and Wellness
- `/treatments/[slug]` — In-depth treatment pages with indications, procedure stages, duration, and booking CTA
- `/doctors` — Medical faculty directory
- `/doctors/[slug]` — Physician profiles with qualifications, specialities, awards, and consultation schedules
- `/facilities` — 36-bed inpatient wards, Panchakarma suites, pharmacy, and sattvic kitchen
- `/blog` — Educational clinical blog
- `/blog/[slug]` — Physician-reviewed articles with key takeaways and related treatments
- `/contact` — Hospital location, route guide from Chennai Airport/Railway, and phone/WhatsApp links
- `/book-appointment` — Interactive appointment booking suite with validation
- `/privacy-policy` — Healthcare patient data confidentiality policy
- `/sitemap.xml` — Dynamic XML sitemap
- `/robots.txt` — Search engine crawler directives

---

## ⚙️ Environment Variables (Optional for Production)

To connect production email/SMS alerts for appointment requests, create `.env.local`:

```env
# Optional: Resend API for transactional emails
RESEND_API_KEY=re_123456789
NOTIFICATION_RECIPIENT_EMAIL=dr.ksajalkumar@gmail.com

# Or standard SMTP:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```
*Note: In development mode, the app functions completely without these credentials and logs submissions with a verified booking reference.*
