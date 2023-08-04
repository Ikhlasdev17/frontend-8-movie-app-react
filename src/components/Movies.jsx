import {
	Box,
	Flex,
	Grid,
	GridItem,
	Image,
	Skeleton,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { BsCardImage } from 'react-icons/bs'

const Movies = ({ movies, loading }) => {
	const itemBg = useColorModeValue('gray.200', 'gray.700')

	return (
		<Box w={'80%'} mx={'auto'}>
			<Grid
				w={'full'}
				my={10}
				gap={5}
				gridTemplateColumns={{
					base: 'repeat(1, 1fr)',
					md: 'repeat(2, 1fr)',
					lg: 'repeat(4, 1fr)',
				}}
			>
				{loading
					? [1, 2, 3, 4, 5].map(item => (
							<Stack>
								<Flex
									h={300}
									bgColor={itemBg}
									alignItems={'center'}
									justifyContent={'center'}
								>
									<BsCardImage color={'gray.500'} size={'30px'} />
								</Flex>
								<Skeleton w={'full'} h='20px' />
							</Stack>
					  ))
					: movies?.map(item => (
							<GridItem key={item.Title}>
								<Box p={4} shadow={'md'} bg={itemBg}>
									<Image
										w={'full'}
										h={'300px'}
										objectFit={'cover'}
										src={item.Poster}
										rounded={'md'}
									/>
									<Stack p={2}>
										<Text my={2} h={'50px'}>
											{item.Title}
										</Text>
									</Stack>
								</Box>
							</GridItem>
					  ))}
			</Grid>
		</Box>
	)
}

export default Movies
