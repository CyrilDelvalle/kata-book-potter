import axios from 'axios';

const getAllBooks = () => {
    axios.get('http://localhost:3001/books').then(resp => {
        console.log(resp.data)
        return resp.data;
    });

}

export default getAllBooks;
