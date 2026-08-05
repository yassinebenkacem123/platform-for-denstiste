# DentaPro

Responsive Next.js homepage implemented from Figma, including a server-backed appointment request form.

## Development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Google Sheets appointment integration

1. Create a Google Cloud service account and enable the Google Sheets API.
2. Create a sheet tab named `Leads` with these columns in row 1:
   `Submitted At`, `Full Name`, `Email`, `Phone`, `Preferred Date`, `Preferred Time`, `Service`, `Message`, `Status`.
3. Share the sheet with the service account email as an Editor.
4. Copy `.env.example` to `.env.local` and provide the service account values.

`GOOGLE_PRIVATE_KEY` supports either a quoted multiline key or a single-line value containing escaped `\n` characters. These variables are read only by the Node.js Route Handler and must never be prefixed with `NEXT_PUBLIC_`.

The optional `GOOGLE_SHEET_RANGE` defaults to `Leads!A:I`.
