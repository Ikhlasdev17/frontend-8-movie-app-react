import {
	Box,
	Heading,
	IconButton,
	Stack,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import Search from './Search'

const Hero = ({ setSearch, search }) => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Box bg={useColorModeValue('gray.200', 'gray.900')} minH={'40vh'}>
			<IconButton
				position={'fixed'}
				bottom={'100px'}
				right={'5%'}
				onClick={toggleColorMode}
				colorScheme='teal'
			>
				{colorMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
			</IconButton>

			<Stack
				minH={'40vh'}
				w={'full'}
				justifyContent={'center'}
				alignItems={'center'}
				p={{ base: 5, md: 10 }}
			>
				<Heading
					color={useColorModeValue('gray.500', 'gray.200')}
					fontSize={'2xl'}
					textAlign={'center'}
					padding={5}
				>
					Choose your favorite cinema - or search anything...
				</Heading>

				<Search setSearch={setSearch} search={search} />
			</Stack>
		</Box>
	)
}

export default Hero
