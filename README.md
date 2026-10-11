# Manara Stay

Vitrine de conversion pour propriétaires (Tanger) — conciergerie locative courte durée. Ce n'est pas une plateforme de réservation voyageurs.

## Stack

- Next.js 14 (App Router) + Tailwind CSS
- next-intl : FR (défaut), ES, AR (RTL), NL
- Netlify (hébergement + Netlify Forms pour le formulaire propriétaires)

## Local

```bash
cp .env.example .env.local
npm install
npm run dev
```

Ouvrir http://localhost:3000

## Formulaire (Netlify Forms)

`LeadForm` envoie en POST url-encoded vers `/__forms.html`, formulaire de détection statique nommé `proprietaires` (dans `public/`). Tout champ ajouté au composant doit aussi être ajouté dans `public/__forms.html`.

En local (`npm run dev`), Netlify Forms n'existe pas : l'envoi affiche le message d'erreur. Tester sur un deploy preview Netlify.

## Netlify

Variables d'environnement à copier depuis `.env.example` (URL de prod : `https://manarastay.com`).

DNS : domaine chez Hostinger, CNAME/nameservers vers Netlify une fois le site déployé.

## Contenu encore à fournir

- Photos réelles des biens
- Captures / extraits d'avis voyageurs
- Liste exacte des communes « alentours »
- Numéro WhatsApp
