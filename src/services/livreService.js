// Service qui va faire du CRUD avec les livres

export const insererLivre = (titre, auteur, resume, estLu) => {
    // 1. Créer un objet javaScript
    const livre = {
        titre : titre,
        auteur : auteur,
        resume : resume,
        estLu : estLu,
        id :  crypto.randomUUID(),  // ID unique
        createdAt : new Date().toDateString()
    }

    // 2. Sérialiser (transformer) en JSON (chaines de caractères)
    const livreJSON = JSON.stringify(livre);

    // 3. Sauvegarder dans le localStorage
    // 3.1 Récupérer dans le localStorage la valeur liée à la clé livre
    const livresJSON = localStorage.getItem('livres');
    // 3.2 Désérialiser le JSON dans un tableau JavaScript
    const livres = livresJSON ? JSON.parse(livresJSON) : []
    // 3.3 Ajouter l'objet livre dans le tableau livres
    livres.push(livre)
    // 3.4 Sauvegarder le tableau livres dans le localStorage sous la clé "livres"
    localStorage.setItem('livres', JSON.stringify(livres))
}

export const rechercherTousLesLivres = () => {
    // 3.1 Récupérer dans le localStorage la valeur liée à la clé "livres"
    const livresJSON = localStorage.getItem('livres');

    // 3.2 Désérialiser le JSON dans un tableau JavaScript
    const livres = livresJSON ? JSON.parse(livresJSON) : []
    return livres;
}

export const supprimerLivre = id => {
    // Récupérer tous les livres depuis le localStorage
    // Récupérer dans le localStorage la valeur liée à la clé du livre
    const livresJSON = localStorage.getItem('livres');

    // Désérialiser le JSON dans un tableau JavaScript
    const livres = livresJSON ? JSON.parse(livresJSON) : []

    // Supprimer le livre avec l'id 'id' dans un tableau de livre
    const livresRestants = livres.filter(livre => livre.id !== id)

    // Sauvegarder dans le localStorage
    localStorage.setItem('livres', JSON.stringify(livresRestants))
}

export const estLu = id => {
    // Récupérer tous les livres depuis le localStorage
    // Récupérer dans le localStorage la valeur liée à la clé du livre
    const livresJSON = localStorage.getItem('livres');

    // Désérialiser le JSON dans un tableau JavaScript
    const livres = livresJSON ? JSON.parse(livresJSON) : []

    livres.forEach(livre => {
        if (livre.id === id) {
            livre.estLu = !livre.estLu
        }
    })

    // Sauvegarder dans le localStorage
    localStorage.setItem('livres', JSON.stringify(livres))
}