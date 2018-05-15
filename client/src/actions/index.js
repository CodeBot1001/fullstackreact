import axios from 'axios';
import { FETCH_USER } from './types';


const fetchUser = () => {
    axios.get('/api/current_user');
    //axios.get('http://quickie-codebot1001.c9users.io/api/current_user');
};
