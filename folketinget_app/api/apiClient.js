const axios = require('axios');
const config = require('../config');
const apiError = require('../middlewares/apiError');

const client = axios.create({
    baseURL:config.apiBaseURL,
    timeout: 10000,
    headers: {Accept: 'application/json'},
});

async function get(path) {
    try {
        const res = await client.get(path);
        return res.data;
    } catch(err) {
        if (err.response) {
            const { status } = err.response;
            if (status === 404) {
                throw new apiError(404, `Kunne ikke finde ${path}`);
            }
            throw new apiError(status, `Politiker API error (${status}) for ${path}`);
        }

        if (err.code === 'ECONNABORTED' || err.code === 'ETIMEDOUT') {
            throw new apiError(504, `Politiker api'et tog for lang tid om at svare.`);
        }

        throw new apiError(502, `Kunne ikke finde api'et`);
    }
}

module.exports = get;