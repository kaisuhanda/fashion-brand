import { Box } from "@chakra-ui/react"

function ButtonShopNow() {
    return (
        <Box
            border={'1px'}
            borderColor={'white'}
            bg={'transparent'}
            borderRadius={'0px'}
            color={"white"}
            padding={'3px'}
            fontWeight={200}
            width={"fit-content"}
            _hover={{
                borderColor: "gray",
                color: "gray",
                transition: ".5s"
            }}
        >
            SHOP NOW
        </Box>
    )
}

export default ButtonShopNow