# English Dictation

Application web statique pour pratiquer la dictée et l’anglais. Cette version fonctionne **sans compte et sans connexion Google**. La progression est enregistrée dans le stockage local du navigateur (`localStorage`) sur l’appareil utilisé.

## Lancer localement

Sers le dossier en HTTP, par exemple :

```bash
python3 -m http.server 8000
```

Puis ouvre `http://localhost:8000`.

## Déploiement

Le dossier contient uniquement les fichiers nécessaires à l’application sans authentification. Pour un déploiement statique, publie `index.html`, `style.css`, `script.js` et `naruto-data.js` avec ce README.

> La progression locale n’est pas synchronisée entre appareils. Aucun compte Firebase ou Google n’est requis par cette version.
