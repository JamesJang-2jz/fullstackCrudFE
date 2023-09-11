import { CREATE_USER, RETRIEVE_USERS, UPDATE_USER, DELETE_ALL_USERS, DELETE_USER } from "./types";

import userdataService from "../services/userdata.service";

export const createUser = (name, username, email) => async (dispatch) => {
    try {
        const result = await userdataService.create({name, username, email});

        dispatch({
            type: CREATE_USER,
            payload: result.data
        });

        return Promise.resolve(result.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveUsers = () => async(dispatch) => {
    try {
        const result = await userdataService.getAll();

        dispatch ({
            type: RETRIEVE_USERS,
            payload: result.data
        })
    } catch (err) {
        console.log(err);
    }
};

export const updateUser = (id, data) => async (dispatch) => {
    try {
        const result = await userdataService.update(id, data);

        dispatch ({
            type: UPDATE_USER,
            payload: data
        });
        return Promise.resolve(result.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await userdataService.delete(id);

        dispatch ({
            type: DELETE_USER,
            payload: {id}
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteAllUsers = () => async (dispatch) => {
    try {
        const result = await userdataService.deleteAll();

        dispatch({
            type: DELETE_ALL_USERS,
            payload: result.data
        });
        return Promise.resolve(result.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const findUserByEmail = (email) => async (dispatch) => {
    try {
        const result = await userdataService.findByEmail(email);

        dispatch({
            type: RETRIEVE_USERS,
            payload: result.data
        });
    } catch (err) {
        console.log(err);
    }
}



