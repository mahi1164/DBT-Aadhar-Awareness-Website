DBT Awareness & Verification Portal (SIH 2025 Prototype)

A modern, multilingual, awareness-driven web platform designed for students, colleges, and Gram Panchayat officers to learn, verify, monitor, and track Direct Benefit Transfer (DBT) readiness.

This portal is built as a Smart India Hackathon (SIH) 2025 prototype, addressing the problem of low awareness and delayed scholarship disbursal due to incomplete Aadhaar seeding, bank issues, or DBT mismatch.

🌟 Project Overview

The platform aims to create a complete awareness ecosystem for DBT by integrating:

Student awareness & learning modules

Self-verification of DBT readiness using mock PFMS data

Dashboards for colleges & local Panchayat bodies

Analytics & transparency reports

Local language support for better adoption

🧩 Key Features
1. Awareness & Education Module

Animated explainers: What is DBT?, Why does money not come sometimes?

Local language toggle (Hindi & regional languages)

Downloadable posters, pamphlets & awareness kits

Student quiz → earn “DBT-Smart Badge”

Interactive “Know Your Bank” chart based on user reports

2. Student Self-Verification Tool

Enter name, bank name, last 4 digits of account

Optional upload: Aadhaar seeding proof screenshot

System evaluates using mock/placeholder PFMS-style data

Output:

🟢 DBT-Enabled

🔴 Not Yet Enabled

Shows next-step guidance

3. College Dashboard

Secure login for institutions

View registered students + DBT readiness

Upload CSV after verification camps

Awareness performance reports

Access training material & posters

4. Panchayat / Local Admin Dashboard

Ward/village-wise student view

Schedule DBT-Aadhaar awareness camps

Print attendance sheets

Upload photos & records of awareness sessions

Map view: DBT readiness % by village

5. Analytics & Transparency

State/district-wise DBT awareness scoreboard

Bank-wise average disbursal time

Top performing Panchayats

Number of awareness sessions conducted

Downloadable PDF analytics report

🏗️ Tech Stack
Layer	Technology
Frontend	React.js / HTML-CSS-JS prototype
Backend	Node.js + Express OR FastAPI
Database	MongoDB
Charts	Chart.js / Recharts
Hosting	Render / Vercel / Netlify
Multilingual	i18next / Client-side language packs
🔐 Privacy & Security

This prototype does NOT use real Aadhaar or banking data.
We use:

Mock student data

Masked account numbers (e.g., XXXX1234)

Static simulation of PFMS-style verification

This ensures the project is demo-safe and compliant with SIH rules.

🚀 How to Run the Project
1. Clone the Repository
git clone https://github.com/your-username/dbt-awareness-portal.git
cd dbt-awareness-portal

2. Install Dependencies
npm install

3. Start Development Server
npm start

4. Build for Production
npm run build

📂 Project Structure
/src
  /components
  /pages
  /dashboard
  /analytics
  /assets
  /mock-data
backend/
  server.js
  routes/
  models/
README.md
package.json
