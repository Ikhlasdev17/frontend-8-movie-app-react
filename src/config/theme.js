import { extendTheme } from '@chakra-ui/react'

const config = {
	initialColorMode: 'system',
	useColorSystemMode: true,
}

export const theme = extendTheme({
	config,
})
