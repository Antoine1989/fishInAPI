const getCrustaces= 'SELECT * FROM "Crustace"';
const getCrustaceById='SELECT * FROM "Crustace" WHERE crustace_id = $1';
const addCrustace='INSERT INTO "Crustace" (nom,technique,quantite,poids,longueur,date_peche,maree,coef,commentaires,photo,spot_id,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)';
const removeCrustace='DELETE FROM "Crustace" WHERE crustace_id = $1';
const updateCrustace='UPDATE "Crustace" SET nom = $1 WHERE crustace_id=$2';

module.exports={
    getCrustaces,
    getCrustaceById,
    addCrustace,
    removeCrustace,
    updateCrustace
};