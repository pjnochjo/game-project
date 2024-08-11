// import { API_URL } from "../const/api.constant"
import { Product } from "../model/product";



export const GetConfigure = async () => {
    return DUMMY_DATA;
    // const request = await fetch(`${API_URL}`, {
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //     },
    //     method: "GET"
    // })
    // const response: Product[] = await request.json();
}

export const DUMMY_DATA: Product[] = [
    {
        id: "qua1",
        name: "hop_tra",
        weight: 60,
    },
    {
        id: "qua2",
        name: "li",
        weight: 25,
    },
    {
        id: "qua3",
        name: "vourcer",
        weight: 0,
    },
    {
        id: "qua4",
        name: "nhan",
        weight: 100000,
    },
    {
        id: "qua5",
        name: "ro",
        weight: 16,
    },
    {
        id: "qua6",
        name: "tui",
        weight: 16,
    },
];