import axios from 'axios'

const apiURL = "http://localhost:8000"

export const getList = () => {
    return axios
        .get(/* apiURL+ */'/api/clientes', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res.data
        })
}

export const addItem = (nome, sobrenome, endereco, cargo) => {
    return axios
        .post(
            apiURL + '/api/clientes', {
                nome: nome,
                sobrenome: sobrenome,
                endereco: endereco,
                cargo: cargo

            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(function (response) {
            console.log(response)
        })
}

export const deleteItem = id => {
    axios
        .delete(`${apiURL}/api/clientes/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const updateItem = (nome,sobrenome,endereco,cargo, id) => {
    return axios
        .put(
            `${apiURL}/api/clientes/${id}`, {
                nome: nome,
                sobrenome: sobrenome,
                endereco: endereco,
                cargo: cargo
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(function (response) {
            console.log(response)
        })
}