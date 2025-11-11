#!/bin/bash

# Script pour mettre à jour automatiquement le SHA256 dans manifest.toml
# Usage: ./update_sha256.sh

set -e

echo "🔄 Calcul du SHA256 actuel..."
CURRENT_SHA256=$(curl -sL https://github.com/AnARCHIS12/ResistanceAnarchiste_ynh/archive/refs/heads/main.tar.gz | sha256sum | cut -d' ' -f1)
echo "📋 SHA256 actuel: $CURRENT_SHA256"

echo "📝 Mise à jour du manifest.toml..."
# Remplace le SHA256 dans le manifest
sed -i "s/sha256 = \"[^\"]*\"/sha256 = \"$CURRENT_SHA256\"/" manifest.toml

echo "✅ Manifest mis à jour avec le nouveau SHA256"

# Commit et push automatique
if git diff --quiet manifest.toml; then
    echo "ℹ️  Aucun changement détecté dans manifest.toml"
else
    echo "📤 Commit et push des changements..."
    git add manifest.toml
    git commit -m "Auto-update SHA256 to $CURRENT_SHA256"
    git push origin main
    echo "✅ Changements poussés vers GitHub"
    
    # Attendre un peu puis recalculer le nouveau SHA256
    echo "⏳ Attente de 5 secondes pour que GitHub traite le commit..."
    sleep 5
    
    echo "🔄 Calcul du nouveau SHA256 après commit..."
    NEW_SHA256=$(curl -sL https://github.com/AnARCHIS12/ResistanceAnarchiste_ynh/archive/refs/heads/main.tar.gz | sha256sum | cut -d' ' -f1)
    echo "📋 Nouveau SHA256: $NEW_SHA256"
    
    if [ "$CURRENT_SHA256" != "$NEW_SHA256" ]; then
        echo "🔄 Le SHA256 a changé après le commit, mise à jour finale..."
        sed -i "s/sha256 = \"[^\"]*\"/sha256 = \"$NEW_SHA256\"/" manifest.toml
        git add manifest.toml
        git commit -m "Final SHA256 update to $NEW_SHA256"
        git push origin main
        echo "✅ SHA256 final mis à jour: $NEW_SHA256"
    else
        echo "✅ SHA256 stable, aucune mise à jour supplémentaire nécessaire"
    fi
fi

echo "🎉 Script terminé!"