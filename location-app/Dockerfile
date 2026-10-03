# ---- Étape 1 : construction de l'application Next.js ----
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---- Étape 2 : servir les fichiers statiques avec Apache ----
FROM httpd:2.4
COPY --from=build /app/out/ /usr/local/apache2/htdocs/

EXPOSE 80