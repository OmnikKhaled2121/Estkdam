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
            "name": user.FName,
            "email": user.Email,
            "phone": user.Phone,
            "password": user.Password,
            "password_confirmation": user.CPassword
        });
        Obj.data = data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj
};

export const CreateContact = async (user) => {
    let Obj = {
        data: "",
        status: true
    }
    try {
        const formData = new FormData();
        formData.append("full_name", user.FullName);
        formData.append("email", user.Email);
        formData.append("phone", user.Phone);
        formData.append("message", user.Message);
        formData.append("file", user.File);
        formData.append("tyoe", user.RadioType);

        let { data } = await axios.post(`${baseUrl}/contacts`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        Obj.data = data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj

};

export const ListOfEmployee = async (userToken) => {
    let Obj = {
        data: "",
        status: true
    }
    try {
        let { data } = await axios.get(`${baseUrl}/employees`, {
            headers: {
                Authorization:
                    "Bearer " + { userToken }
            },
        });
        Obj.data = data.data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj

}

export const UpdateProfile = async (input) => {
    let Obj = {
        data: "",
        status: true
    }
    try {
        let { data } = await axios.get(`${baseUrl}/employees`);
        Obj.data = data.data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj
}

export const TitleSearch = async (profession) => {
    let Obj = {
        data: "",
        status: true
    }
    try {
        let { data } = await axios.get(`${baseUrl}/employees`, {
            params: {
                profession
            }
        });

        Obj.data = data.data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj
}

export const GetAllProfessions = async () => {
    console.log("Samkaaaaaaaaaaaaaaaaaaaaaaaa")
    let Obj = {
        data: "",
        status: true
    }
    try {
        let { data } = await axios.get(`${baseUrl}/professions`);

        Obj.data = data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj
}

export const GetAllNationalities = async () => {
    let Obj = {
        data: "",
        status: true
    }
    try {
        let { data } = await axios.get(`${baseUrl}/nationalities`);

        Obj.data = data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj
}

export const SearchEmployee = async (inputs, userToken) => {
    let Obj = {
        data: "",
        status: true
    }
    console.log("inputs", inputs)
    try {
        let { data } = await axios.get(`${baseUrl}/employees`, {
            headers: {
                Authorization:
                    "Bearer " + userToken
            },
            params: inputs
        });

        Obj.data = data.data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj

}

export const GetEmployeeByID = async (id, userToken) => {
    let Obj = {
        data: "",
        status: true
    }
    console.log("userToken44", userToken)
    try {
        let { data } = await axios.get(`${baseUrl}/employees/${id}`, {
            headers: {
                Authorization:
                    "Bearer " + userToken
            },
        });
        Obj.data = data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj
}

export const UpdateEmployee = async () => {
    let Obj = {
        data: "",
        status: true
    }
    try {

        let { data } = await axios.put(`${baseUrl}/employees/${1}`, {
            "name": "Jane Doe Updated",
            "summary": "Senior Developer",
            "nationality_id": 2,
            "profession": "Lead Software Engineer",
            "age": 32,
            "social_status_id": 2,
            "kids_number": 3,
            "salary": 80000,
            "date_of_born": "1988-01-01",
            "height": 175,
            "weight": 70,
            "experience_years": 2
        }, {
            headers: {
                authorization: `Bearer 60|woNSk38fDxvNec6qw46Z4pnoyDlNrMdcd9Cg4nYC725206d6`,
                Accept: "application/json",

            },

        });
        console.log("dat3333a", data)
        // setEmployee(data)
        Obj.data = data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj
}

export const isAuthenticated = () => {
    const userToken = localStorage.getItem('USER');
    if (!userToken) {
        return null
    }
    return JSON.parse(userToken);
};


export const StatisticsData = async () => {
    let Obj = {
        data: "",
        status: true
    }
    try {
        const { data } = await axios.get(`${baseUrl}/statistics`);
        Obj.data = data.data[0]
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj
}


export const CreateOrder = async (id, userID, userToken) => {
    let Obj = {
        data: "",
        status: true
    }
    try {
        let { data } = await axios.post(`${baseUrl}/orders`,
            {
                "status": "تحت الطلب",
                "manager_id": userID,
                "employees_ids": [id]
            },
            {
                headers: {
                    Authorization: "Bearer " + userToken,
                },
            });
        Obj.data = data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj
}

export const CountriesList = async () => {
    let Obj = {
        data: "",
        status: true
    }
    try {
        const { data } = await axios.get(`${baseUrl}/countries`);
        Obj.data = data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj
}

export const ListOrders = async (id, userToken) => {

    let Obj = {
        data: "",
        status: true
    }
    try {
        let { data } = await axios.get(`${baseUrl}/manager/${id}/orders`,
            {
                headers: {
                    Authorization: "Bearer " + userToken,
                },
            });
        Obj.data = data
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj

}

export const DeleteOrder = async (id, userToken) => {
    let Obj = {
        data: "",
        status: true
    }
    try {
        let { data } = await axios.delete(`${baseUrl}/orders/${id}`,
            {
                headers: {
                    Authorization: "Bearer " + userToken,
                },
            });
        Obj.data = data
        console.log(Obj.data)
        Obj.status = true
    } catch (error) {
        Obj.data = ""
        Obj.status = false
    }
    return Obj

}