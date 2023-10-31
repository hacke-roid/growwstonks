import axios from "axios";

const API_KEY = 'V0EH26LOFFUI17LY';
const BASE_URL = 'https://www.alphavantage.co';

const searchStock = async (query) => {
    try{
        const response = await axios.get(
            `${BASE_URL}/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`
        );
        return response.data;
    }
    catch (error) {
        console.error("Erro : ", error);
        return null;
    }
};

const getTopGainers = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}/query?function=TIME_SERIES_DAILY&symbol=GAINERS&apikey=${API_KEY}`
        );

        return response.data;
    } catch(error) {
        console.error("Error fetching top gainers:", error);
        return null;
    }
};

export default {
    searchStock,
    getTopGainers,
}