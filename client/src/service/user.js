
import axios from "axios";


export const signupUser = async (params) => {
    let results = await axios({
        method: 'POST',
        url: "http://localhost:5000/api/user/register",
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

export const loginUser = async (params) => {
    let results = await axios({
        method: 'POST',
        url: "http://localhost:5000/api/user/login",
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

export const findById = async (id) => {
    let results = await axios({
        method: 'GET',
        url: `http://localhost:5000/api/user/${id}`,
        data: id
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

export const updateProfie = async (id, formData) => {
    console.log("formData", formData)
    let results = await axios({
        method: 'PUT',
        url: `http://localhost:5000/api/user/update/${id}`,
        data: formData
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


export const getAllUsers = async (params) => {
    let results = await axios({
        method: 'GET',
        url: "http://localhost:5000/api/users",
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


export const removeUser = async (id) => {
    let results = await axios({
        method: 'DELETE',
        url: `http://localhost:5000/api/user/${id}`,
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