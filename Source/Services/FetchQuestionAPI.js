import axios from 'axios';

export const FetchQuestionAPI = async (category,difficulty,counter) => {
    let api = `https://opentdb.com/api.php?amount=${counter}&category=${category}&difficulty=${difficulty}&type=multiple`;
    let response = axios.get(api);
    return response;
}