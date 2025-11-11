# Résistance Anarchiste pour YunoHost

[![Niveau d'intégration](https://dash.yunohost.org/integration/resistance-anarchiste.svg)](https://dash.yunohost.org/appci/app/resistance-anarchiste) ![Statut du fonctionnement](https://ci-apps.yunohost.org/ci/badges/resistance-anarchiste.status.svg) ![Statut de maintenance](https://ci-apps.yunohost.org/ci/badges/resistance-anarchiste.maintain.svg)

[![Installer Résistance Anarchiste avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=resistance-anarchiste)

*[Read this README in other languages.](./ALL_README.md)*

> *Ce package vous permet d'installer Résistance Anarchiste rapidement et simplement sur un serveur YunoHost.*  
> *Si vous n'avez pas YunoHost, consultez [ce guide](https://yunohost.org/install) pour savoir comment l'installer et en profiter.*

## Vue d'ensemble

**Résistance Anarchiste** est une plateforme web dédiée à la diffusion des idées anarchistes et à la coordination des collectifs de résistance.

### Fonctionnalités principales

- 📜 **Manifeste anarchiste** - Texte de résistance et d'émancipation
- 🎨 **Galerie de visuels** - Collection d'affiches militantes avec partage social
- 🏴 **Réseau CNT-AIT** - Contacts des collectifs locaux par région
- 📱 **Liens sociaux** - Coordination sur Telegram, Twitter, etc.
- 🗺️ **Carte interactive** - Localisation des collectifs (à venir)

### Technologies

- **Frontend** : React 19 + Tailwind CSS + Radix UI
- **Backend** : Flask + Python 3.8+
- **Base de données** : SQLite/PostgreSQL
- **Déploiement** : Optimisé pour YunoHost

**Version livrée :** 1.0~ynh1

**Démo :** https://demo.resistance-anarchiste.org

## Installation

### Installation automatique (recommandée)

```bash
sudo yunohost app install https://github.com/AnARCHIS12/ResistanceAnarchiste_ynh
```

### Installation manuelle

1. Cloner ce dépôt :
```bash
git clone https://github.com/AnARCHIS12/ResistanceAnarchiste_ynh.git
cd ResistanceAnarchiste_ynh
```

2. Installer l'application :
```bash
sudo yunohost app install . --debug
```

## Configuration

L'application sera accessible à l'adresse configurée lors de l'installation (par défaut `/resistance`).

### Paramètres d'installation

- **Domaine** : Domaine où installer l'application
- **Chemin** : Chemin d'accès (par défaut `/resistance`)
- **Administrateur** : Utilisateur YunoHost administrateur
- **Langue** : Français ou Anglais
- **Visibilité** : Public ou privé

## Documentation et ressources

- **Dépôt officiel** : https://github.com/AnARCHIS12/ResistanceAnarchiste_ynh
- **Documentation YunoHost** : https://yunohost.org/packaging_apps
- **Signaler un bug** : https://github.com/AnARCHIS12/ResistanceAnarchiste_ynh/issues

## Informations pour les développeurs

### Structure du package

```
ResistanceAnarchiste_ynh/
├── manifest.toml           # Métadonnées de l'application
├── scripts/                # Scripts d'installation et maintenance
│   ├── install            # Installation
│   ├── remove             # Suppression
│   ├── upgrade            # Mise à jour
│   ├── backup             # Sauvegarde
│   ├── restore            # Restauration
│   └── change_url         # Changement d'URL
├── conf/                  # Fichiers de configuration
│   ├── nginx.conf         # Configuration NGINX
│   ├── systemd.service    # Service systemd
│   └── app.py            # Application Flask
└── doc/                   # Documentation
```

### Tests

Pour tester le package :

```bash
# Installation en mode debug
sudo yunohost app install . --debug

# Vérifier les logs
sudo journalctl -u resistance-anarchiste -f

# Tester l'API
curl http://localhost:PORT/api/health
```

### Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -am 'Ajouter nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créer une Pull Request

### Branche testing

Pour essayer la branche `testing` :

```bash
sudo yunohost app install https://github.com/AnARCHIS12/ResistanceAnarchiste_ynh/tree/testing --debug
# ou
sudo yunohost app upgrade resistance-anarchiste -u https://github.com/AnARCHIS12/ResistanceAnarchiste_ynh/tree/testing --debug
```

## Licence

Ce projet est sous licence **GPL v3** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## Support

- **Issues GitHub** : https://github.com/AnARCHIS12/ResistanceAnarchiste_ynh/issues
- **Forum YunoHost** : https://forum.yunohost.org
- **Chat YunoHost** : https://chat.yunohost.org

---

<div align="center">

### ⚡ Ni dieu, ni maître, ni patron ! ⚡

*La résistance continue...*

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red.svg)](#)
[![YunoHost](https://img.shields.io/badge/YunoHost-ready-brightgreen.svg)](https://yunohost.org)
[![GPL v3](https://img.shields.io/badge/License-GPL%20v3-red.svg)](LICENSE)

</div>