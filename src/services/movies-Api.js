// import { computeHeadingLevel } from '@testing-library/react';
import Axios from 'axios';

const API_KEY = '22dbeccf11c596f9a21f43b1ed86f3d0';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async () => {
    const response = await Axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
    return response.data.results;
}

const fetchById = async (id) => {
	const response = await Axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
	return response.data;
}

const fetchCast = async (id) => {
	const response = await Axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    // console.log(response.data.cast)
	return response.data.cast;
}

const fetchReviews = async (id) => {
	const response = await Axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`)
    // console.log(response.data.reviews)
	return response.data.results;
}

// eslint-disable-next-line
export default {fetchMovies, fetchById, fetchCast, fetchReviews};