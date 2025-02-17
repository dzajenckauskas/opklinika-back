# API Opklinika - Strapi CMS

## Overview
API Opklinika is the backend system for Opklinika, a medical services platform. This project is built with Strapi CMS to manage content and provide a structured API for the frontend application.

Website: [www.api.opklinika.lt](https://www.api.opklinika.lt)

## Tech Stack
- **Backend:** Strapi CMS (Headless CMS)
- **Database:** PostgreSQL
- **Authentication:** JWT-based authentication
- **Deployment:** VPS (Linux-based)

## Features
- **Custom API endpoints** to manage medical services, appointments, and content.
- **Admin panel** for content and appointment management.
- **Role-based authentication** for admins and medical professionals.
- **SEO-friendly content management** for better discoverability.
- **Secure REST API** with authentication and permissions.

## Setup & Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 16.x)
- npm or yarn
- PostgreSQL

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/dzajenckauskas/api-opklinika.git
   cd api-opklinika
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add necessary environment variables (e.g., database connection, Strapi admin credentials).
4. Run database migrations and seed data if necessary.
5. Start the development server:
   ```sh
   npm run develop  # or yarn develop
   ```
6. Access the Strapi admin panel at `http://localhost:1337/admin`.

## Deployment
- The project is deployed on a VPS with Nginx as a reverse proxy.
- Uses **PM2** for process management.
- CI/CD automation with **GitHub Actions**.

## Future Improvements
- Implement **GraphQL API** support.
- Add **multi-language content management**.
- Improve **security and performance**.

## Contributing
Contributions are welcome! Feel free to fork the repo, submit issues, or suggest improvements.

## License
This project is licensed under the MIT License.

---
For any inquiries or collaborations, reach out via [GitHub](https://github.com/dzajenckauskas/).

