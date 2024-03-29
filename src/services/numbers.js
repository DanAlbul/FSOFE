import axios from 'axios'
const baseUrl = 'http://localhost:3004/api/persons'

const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

const getById = (id) => {
	const request = axios.get(`${baseUrl}/${id}`)
	return request.then(response => response.data)
}

const updateById = (id, newObject) => {
	const request = axios.put(`${baseUrl}/${id}`, newObject)
	return request.then(response => response.data)
}

const deleteById = (id) => {
	const request = axios.delete(`${baseUrl}/${id}`)
	return request.then(response => response.data)
}

const create = (newObject) => {
	const request = axios.post(baseUrl, newObject)
	return request.then(response => response.data)
}

export default { getAll, getById, create, deleteById, updateById }
