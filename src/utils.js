import axios from "axios"

const baseURL = "http://localhost:8000/books/"

export const getCategories = async () => {
    const response = await axios.get(baseURL+"categories")
    return response
} 

export const getbooksbycateg = async ({queryKey}) => {
    console.log(queryKey[1]);
    const response = await axios.get(baseURL+"categ/"+queryKey[1])
    return response
} 
export const getBooksByTitle = async ({queryKey}) => {
    const response = await axios.get(baseURL+"title/"+queryKey[1])
    return response
}
export const getAllBooks = async () => {
    const response = await axios.get(baseURL)
    return response
}