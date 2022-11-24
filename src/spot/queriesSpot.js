const getSpots= 'SELECT * FROM "Spot"';
const getSpotById='SELECT * FROM "Spot" WHERE spot_id = $1';
const addSpot='INSERT INTO "Spot" (nom,ville,user_id) VALUES ($1,$2,$3)';
const removeSpot='DELETE FROM "Spot" WHERE spot_id = $1';

module.exports={
    getSpots,
    getSpotById,
    addSpot,
    removeSpot
};