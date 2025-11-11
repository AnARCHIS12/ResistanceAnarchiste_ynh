#!/bin/bash

# Script d'aide pour le développement du package YunoHost
# Usage: ./dev-tools.sh [command]

set -e

APP_NAME="resistance-anarchiste"
REPO_URL="https://github.com/AnARCHIS12/ResistanceAnarchiste_ynh"

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_help() {
    echo -e "${BLUE}Script d'aide pour le développement du package YunoHost${NC}"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commandes disponibles:"
    echo "  install     - Installer l'application en mode debug"
    echo "  remove      - Supprimer l'application"
    echo "  upgrade     - Mettre à jour l'application"
    echo "  backup      - Créer une sauvegarde"
    echo "  restore     - Restaurer depuis une sauvegarde"
    echo "  logs        - Afficher les logs en temps réel"
    echo "  status      - Vérifier le statut du service"
    echo "  test-api    - Tester l'API"
    echo "  lint        - Vérifier la syntaxe du package"
    echo "  update-sha  - Mettre à jour le SHA256 de l'archive"
    echo "  help        - Afficher cette aide"
}

install_app() {
    echo -e "${YELLOW}Installation de $APP_NAME en mode debug...${NC}"
    sudo yunohost app install . --debug
    echo -e "${GREEN}Installation terminée !${NC}"
}

remove_app() {
    echo -e "${YELLOW}Suppression de $APP_NAME...${NC}"
    sudo yunohost app remove $APP_NAME
    echo -e "${GREEN}Suppression terminée !${NC}"
}

upgrade_app() {
    echo -e "${YELLOW}Mise à jour de $APP_NAME...${NC}"
    sudo yunohost app upgrade $APP_NAME --debug
    echo -e "${GREEN}Mise à jour terminée !${NC}"
}

backup_app() {
    echo -e "${YELLOW}Création d'une sauvegarde de $APP_NAME...${NC}"
    sudo yunohost backup create --apps $APP_NAME
    echo -e "${GREEN}Sauvegarde créée !${NC}"
}

restore_app() {
    echo -e "${YELLOW}Restauration de $APP_NAME...${NC}"
    echo "Sauvegardes disponibles:"
    sudo yunohost backup list
    echo ""
    read -p "Nom de la sauvegarde à restaurer: " backup_name
    sudo yunohost backup restore $backup_name --apps $APP_NAME
    echo -e "${GREEN}Restauration terminée !${NC}"
}

show_logs() {
    echo -e "${YELLOW}Affichage des logs de $APP_NAME...${NC}"
    sudo journalctl -u $APP_NAME -f
}

check_status() {
    echo -e "${YELLOW}Statut du service $APP_NAME:${NC}"
    sudo systemctl status $APP_NAME
    echo ""
    echo -e "${YELLOW}Statut YunoHost:${NC}"
    sudo yunohost app info $APP_NAME
}

test_api() {
    echo -e "${YELLOW}Test de l'API...${NC}"
    
    # Récupérer le port depuis la configuration YunoHost
    PORT=$(sudo yunohost app setting $APP_NAME port 2>/dev/null || echo "5000")
    
    echo "Test de l'endpoint /api/health sur le port $PORT..."
    
    if curl -s "http://localhost:$PORT/api/health" | grep -q "ok"; then
        echo -e "${GREEN}✓ API répond correctement${NC}"
    else
        echo -e "${RED}✗ API ne répond pas${NC}"
    fi
}

lint_package() {
    echo -e "${YELLOW}Vérification de la syntaxe du package...${NC}"
    
    # Vérifier que les scripts sont exécutables
    for script in scripts/*; do
        if [ -f "$script" ] && [ ! -x "$script" ]; then
            echo -e "${RED}✗ $script n'est pas exécutable${NC}"
        else
            echo -e "${GREEN}✓ $script est exécutable${NC}"
        fi
    done
    
    # Vérifier la syntaxe bash des scripts
    for script in scripts/*; do
        if [ -f "$script" ]; then
            if bash -n "$script"; then
                echo -e "${GREEN}✓ $script syntaxe OK${NC}"
            else
                echo -e "${RED}✗ $script erreur de syntaxe${NC}"
            fi
        fi
    done
    
    # Vérifier que le manifest.toml est valide
    if command -v toml-test >/dev/null 2>&1; then
        if toml-test manifest.toml; then
            echo -e "${GREEN}✓ manifest.toml syntaxe OK${NC}"
        else
            echo -e "${RED}✗ manifest.toml erreur de syntaxe${NC}"
        fi
    else
        echo -e "${YELLOW}! toml-test non installé, impossible de vérifier manifest.toml${NC}"
    fi
}

update_sha() {
    echo -e "${YELLOW}Mise à jour du SHA256...${NC}"
    
    NEW_SHA=$(curl -sL "$REPO_URL/archive/refs/heads/main.tar.gz" | sha256sum | cut -d' ' -f1)
    
    echo "Nouveau SHA256: $NEW_SHA"
    
    # Mettre à jour manifest.toml
    sed -i "s/sha256 = \".*\"/sha256 = \"$NEW_SHA\"/" manifest.toml
    
    # Mettre à jour conf/app.src
    sed -i "s/SOURCE_SUM=.*/SOURCE_SUM=$NEW_SHA/" conf/app.src
    
    echo -e "${GREEN}SHA256 mis à jour dans manifest.toml et conf/app.src${NC}"
}

# Traitement des arguments
case "${1:-help}" in
    install)
        install_app
        ;;
    remove)
        remove_app
        ;;
    upgrade)
        upgrade_app
        ;;
    backup)
        backup_app
        ;;
    restore)
        restore_app
        ;;
    logs)
        show_logs
        ;;
    status)
        check_status
        ;;
    test-api)
        test_api
        ;;
    lint)
        lint_package
        ;;
    update-sha)
        update_sha
        ;;
    help|*)
        print_help
        ;;
esac