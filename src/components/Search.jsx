import { Button, Flex, Input, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'

const Search = ({ setSearch }) => {
	const [str, setStr] = useState('')

	return (
		<>
			<Flex
				gap={5}
				p={4}
				bg={useColorModeValue('gray.100', 'gray.700')}
				shadow={'md'}
				borderRadius='md'
				mt={5}
				direction={{ base: 'column', md: 'row' }}
			>
				<Input
					value={str}
					onChange={e => setStr(e.target.value)}
					placeholder='Enter your favorite cinema name..'
					w={{ base: '100%', sm: '500px', md: '500px' }}
				/>
				<Button
					onClick={() => {
						setSearch(str)
					}}
					variant={'solid'}
					colorScheme='teal'
				>
					Search
				</Button>
			</Flex>
		</>
	)
}

export default Search
