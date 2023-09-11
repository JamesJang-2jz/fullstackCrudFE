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

