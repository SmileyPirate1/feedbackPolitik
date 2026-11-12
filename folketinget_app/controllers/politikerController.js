const get = require('../api/apiClient.js');

exports.getAllPolitiker = async (req, res) => {
    try{
        const data = await get("Aktør?$top=20");
        res.status(200).json(data);
    } catch(err){
        res.status(err.status || 500).json({ message: err.message });
    }
}