import { Box, Flex, UnorderedList } from "@chakra-ui/react";
import ListItemCenter from "./custom_components/ListItemCenter";

function Header() {
    return (
        <Flex
            bg={"black"}
            paddingY={'15px'}
            paddingX={'80px'}
            color={"white"}
            justifyContent={'space-between'}
        >
            <Box
                fontSize={'35px'}
                fontWeight={500}
            >
                CLOSEFETCH
            </Box>
            <UnorderedList
                display={"flex"}
                listStyleType={"none"}
                gap={'50px'}
                fontSize={'17px'}
            >
                <ListItemCenter>HOME</ListItemCenter>
                <ListItemCenter>PRODUCTS</ListItemCenter>
                <ListItemCenter>CART</ListItemCenter>
                <ListItemCenter>ABOUT</ListItemCenter>
            </UnorderedList>
        </Flex>
    )
}

export default Header;