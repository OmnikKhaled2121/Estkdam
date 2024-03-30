import axios from "axios";

const baseUrl = 'https://estikdam.jacadix.net/api'

export const LoginApi = async (user) => {
    let Obj = {
        data: "",
        status: true
    }
    try {
        const { data } = await axios.post(
            `${baseUrl}/login`,
            {
                email: user.Email,
                password: user.Password
            }
        );
        Obj.data = data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj
};
export const Register = async (user) => {
    let Obj = {
        data: "",
        status: true
    }
    try {
        let { data } = await axios.post(`${baseUrl}/register`, {
            username: user.UserName,
            email: user.Email,
            password: user.Password,
            phone: user.Phone,
        });
        Obj.data = data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj
};

export const isAuthenticated = () => {
    const userToken = localStorage.getItem('USER');
    if (!userToken) {
        return null
    }
    return JSON.parse(userToken);
};