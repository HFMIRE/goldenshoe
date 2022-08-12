import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';

export default function  Card({product}) {
  console.log('id', product._id)
  return (
    <Center py={12}>
      <LinkBox
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'sm'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'sm'}
          mt={-12}
          pos={'relative'}
          height={'330px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${product.image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}>
          <Image
            rounded={'lg'}
            height={340}
            width={452}
            objectFit={'cover'}
            src={product.image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text p={2} color={'gray.800'} fontSize={'sm'} textTransform={'uppercase'}>
            {product.brand}
          </Text>
          <LinkOverlay href={`product/${product._id}`}>
          <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={300} color={'black.500'}>
           {product.name}
          </Heading>
          </LinkOverlay>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={600} fontSize={'l'}>
              £{product.price }
            </Text>
          </Stack>
        </Stack>
      </LinkBox>
    </Center>
  );
}