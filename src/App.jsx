import { Flex } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Movies from './components/Movies'

const App = () => {
	const [movies, setMovies] = useState([])
	const [search, setSearch] = useState('shrek')
	const [loading, setLoading] = useState(false)

	async function fetchAllMovies() {
		setLoading(true)
		const { data } = await axios.get(
			`https://www.omdbapi.com/?s=${search}&type=&apikey=9446507`
		)

		setMovies(data.Search)
		setLoading(false)
	}

	useEffect(() => {
		fetchAllMovies()
	}, [search])

	return (
		<>
			<Hero search={search} setSearch={setSearch} />
			{!loading && !movies?.length ? (
				<Flex
					textAlign={'center'}
					fontSize={'4xl'}
					minH={'20vh'}
					w={'60%'}
					my={10}
					mx={'auto'}
				>
					Oops, movies not found! Please check your movie name...
				</Flex>
			) : (
				<Movies movies={movies} loading={loading} />
			)}
		</>
	)
}

export default App
