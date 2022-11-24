const getCephalopodes= 'SELECT * FROM "Cephalopode"';
const getCephalopodeById='SELECT * FROM "Cephalopode" WHERE cephalopode_id = $1';
const addCephalopode='INSERT INTO "Cephalopode" (nom,technique,quantite,poids,longueur,date_peche,maree,coef,commentaires,photo,spot_id,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)';
const removeCephalopode='DELETE FROM "Cephalopode" WHERE cephalopode_id = $1';

module.exports={
    getCephalopodes,
    getCephalopodeById,
    addCephalopode,
    removeCephalopode
};