# Manara Stay

Vitrine de conversion pour propriétaires (Tanger) — conciergerie locative courte durée. Ce n'est pas une plateforme de réservation voyageurs.

## Stack

- Next.js 14 (App Router) + Tailwind CSS
- next-intl : FR (défaut), ES, AR (RTL), NL
- Supabase : `testimonials`, `leads_owners`, `contacts`
- Netlify

## Local

```bash
cp .env.example .env.local
npm install
npm run dev
```

Ouvrir http://localhost:3000

## Supabase

1. Créer un projet.
2. Exécuter `supabase/schema.sql` dans le SQL Editor.
3. Renseigner `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Publier les avis réels (`published = true`) via le Table Editor — pas d'avis inventés.

Sans ces variables, le site s'affiche ; le formulaire indique qu'il n'est pas encore branché.

## Netlify

Variables d'environnement à copier depuis `.env.example` (URL de prod : `https://manarastay.com`).

DNS : domaine chez Hostinger, CNAME/nameservers vers Netlify une fois le site déployé.

## Contenu encore à fournir

- Photos réelles des biens
- Captures / extraits d'avis voyageurs
- Liste exacte des communes « alentours »
- Numéro WhatsApp
