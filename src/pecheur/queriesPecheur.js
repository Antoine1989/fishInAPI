const getPecheurs= 'SELECT * FROM "User"';
const getPecheurById='SELECT * FROM "User" WHERE user_id = $1';
const addPecheur='INSERT INTO "User" (nom,adresse,password) VALUES ($1,$2,$3)';
const removePecheur='DELETE FROM "User" WHERE user_id = $1';

module.exports={
    getPecheurs,
    getPecheurById,
    addPecheur,
    removePecheur
};