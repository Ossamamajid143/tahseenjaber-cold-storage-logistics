This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Email subscriptions

The footer signup stores subscribers as contacts in [Resend](https://resend.com). Create a Resend API key and add it to your local `.env.local` and production environment:

```bash
RESEND_API_KEY=re_...
```

Without this key, the signup endpoint returns an error and does not claim the visitor subscribed. Resend contacts can be used to create and send broadcasts from the Resend dashboard.

Contact forms send messages to `Shuaib@tahseenjaber.com` using Resend. Set both values locally in `.env.local` and in production:

```bash
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL="Tahseen Jaber Website <website@your-verified-domain.com>"
```

Verify the sender domain in Resend and use an address on that verified domain for `RESEND_FROM_EMAIL`. The contact form keeps the visitor's email as the reply-to address. Without these settings, the form will show a send error and will not claim the message was delivered.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
