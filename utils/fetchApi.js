import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com'






export const fetchApi = async (url) =>{
    const {data} = await axios.get((url),{
headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': 'a3abc3a22amshf98898db7f94d90p10897ajsnd7cccb9877ce'
    }
    });
    return data;
}  