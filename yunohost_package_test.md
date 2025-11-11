# Test du package YunoHost - Résistance Anarchiste

## Prérequis

1. Serveur YunoHost fonctionnel
2. Accès administrateur
3. Domaine configuré

## Installation

```bash
# Cloner le dépôt de l'app
git clone https://github.com/AnARCHIS12/ResistanceAnarchiste_ynh.git
cd ResistanceAnarchiste_ynh

# Installer l'application
sudo yunohost app install . --debug
```

## Tests à effectuer

### 1. Installation
- [ ] L'installation se termine sans erreur
- [ ] Le service systemd est actif
- [ ] NGINX est correctement configuré
- [ ] L'application est accessible via le navigateur

### 2. Fonctionnalités
- [ ] Page d'accueil se charge correctement
- [ ] Navigation entre les pages fonctionne
- [ ] API répond correctement (/api/health)
- [ ] Ressources statiques (CSS, JS, images) se chargent

### 3. Sécurité
- [ ] Utilisateur système créé avec permissions restreintes
- [ ] Service systemd sécurisé
- [ ] Pas d'accès direct aux fichiers sensibles

### 4. Sauvegarde/Restauration
```bash
# Créer une sauvegarde
sudo yunohost backup create --apps resistance-anarchiste

# Supprimer l'app
sudo yunohost app remove resistance-anarchiste

# Restaurer
sudo yunohost backup restore NOM_DE_LA_SAUVEGARDE --apps resistance-anarchiste
```

### 5. Mise à jour
```bash
sudo yunohost app upgrade resistance-anarchiste
```

### 6. Multi-instance
```bash
# Installer une seconde instance
sudo yunohost app install . --debug
```

## Commandes utiles

```bash
# Vérifier les logs
sudo journalctl -u resistance-anarchiste -f

# Redémarrer le service
sudo systemctl restart resistance-anarchiste

# Vérifier le statut
sudo systemctl status resistance-anarchiste

# Tester l'API
curl http://localhost:PORT/api/health
```

## Problèmes courants

1. **Port déjà utilisé** : YunoHost trouve automatiquement un port libre
2. **Permissions** : Vérifier que l'utilisateur système a les bonnes permissions
3. **Build frontend** : S'assurer que Node.js et npm sont installés
4. **Python dependencies** : Vérifier que le venv est correctement créé