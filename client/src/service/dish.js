import axios from "axios";


export const getAllDishes = async (params) => {
    let results = await axios({
        method: 'GET',
        url: "http://localhost:5000/api/dishes",
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(result => result.data)
        .catch(error => {
            return {
                status: "error",
                message: error.message
            };
        });
    return results;
}

export const createDish = async (params) => {
    let results = await axios({
        method: 'POST',
        url: "http://localhost:5000/api/dish",
        data: params
    })
        .then(result => result.data)
        .catch(error => {
            return {
                status: "error",
                message: error.message
            };
        });
    return results;
}


export const removeProduct = async (id) => {
    let results = await axios({
        method: 'DELETE',
        url: `http://localhost:5000/api/dish/${id}`,
    })
        .then(result => result)
        .catch(error => {
            return {
                status: "error",
                message: error.message
            };
        });
    console.log("results", results)
    return results;
}
