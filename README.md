# Le BOSS — prototype d’interface

Application Next.js, React et TypeScript pensée mobile-first pour la gestion de projets et de tâches de petites équipes.

## Routes
- `/` : landing page publique.
- `/dashboard` : tableau de bord de démonstration avec recherche, filtre, changement local de statut et ajout local de tâche.

## Démarrage local
Prérequis : Node.js 20.9+ et npm.
```bash
npm install
npm run dev
```
Puis ouvrir `http://localhost:3000`.

## Contrôles
```bash
npm run typecheck
npm run lint
npm run build
```

## Limites importantes
Ce dépôt contient le premier lot du prototype d’interface. Les données et indicateurs affichés sont fictifs. Les changements de tâche sont conservés uniquement dans l’état de la page et disparaissent au rechargement.

**Pas encore implémentés :** authentification, autorisations réellement appliquées côté serveur, base de données, isolation par organisation, migrations SQL, journal d’audit, notifications persistantes, calendrier complet, sauvegardes et tests de sécurité. Ne pas utiliser de données réelles ou confidentielles et ne pas considérer ce prototype comme prêt pour la production.

L’installation npm a précédemment dépassé le délai de 120 secondes dans l’environnement de travail. La compilation et ESLint n’ont donc pas été confirmés. Vérifier les commandes ci-dessus dans un environnement ayant accès au registre npm avant de déployer.

Ne jamais committer de secrets ou de fichiers `.env`. Avant tout usage réel, implémenter et tester les contrôles d’accès côté serveur, les politiques de base de données, les journaux d’audit, la gestion des secrets et les scénarios de non-divulgation.
