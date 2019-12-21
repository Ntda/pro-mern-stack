import axios from 'axios';

const resolveUrl = 'http://localhost:3000/api';

const getAll = async () => {
    const response = await axios.get(`${resolveUrl}/get-all`);
    return response.data;
}
const createNew = async (model) => {
    return await axios.post(`${resolveUrl}/add-new`, { model });
}

const Service = {
    createNew,
    getAll
}

export default Service;