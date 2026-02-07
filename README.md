# ManifestR Landing Page

A minimal Next.js landing page setup.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## Project Structure

```
├── app/
│   ├── api/              # API routes
│   │   └── example/      # Example API endpoint
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/           # Reusable components
│   ├── Hero.tsx
│   └── Hero.module.css
├── package.json
└── next.config.js
```

## API Routes

- **GET** `/api/example` - Example API endpoint

## Adding New Pages

Create a new folder in the `app/` directory:

```
app/
  └── about/
      └── page.tsx
```

Access at: `http://localhost:3000/about`

## Adding New API Endpoints

Create a new folder in `app/api/`:

```
app/
  └── api/
      └── your-endpoint/
          └── route.ts
```

Access at: `http://localhost:3000/api/your-endpoint`
