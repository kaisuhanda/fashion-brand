import { Table, Tr, Td, Box, Button } from "@chakra-ui/react";
import BoxCenter from "./custom_components/BoxCenter";
import eyewear from '../assets/backgrounds/sunglasses.png';
import watches from '../assets/backgrounds/watches.png';
import shoes from '../assets/backgrounds/shoes.png';
import tshirts from '../assets/backgrounds/tshirt.png';
import ButtonShopNow from "./custom_components/ButtonShopNow";

function ProductsTable() {
    return (
        <BoxCenter>
            <Table width="80%" height="50%" marginY="100px" variant="unstyled" color={"white"}>
                <Tr>
                    <Td>
                        <Box
                            height="200px"
                            border="1px solid"
                            bg={`rgba(44, 43, 43, 0.7) url(${eyewear})`}
                            backgroundSize="cover"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundBlendMode={"darken"}
                            display="flex"
                            justifyContent="center"
                            flexDirection="column"
                            paddingLeft={'10px'}
                        >
                            MEN'S EYEWEAR <br />
                            <ButtonShopNow />
                        </Box>
                    </Td>

                    <Td>
                        <Box
                            height="200px"
                            border="1px solid"
                            bg={`rgba(44, 43, 43, 0.7) url(${watches})`}
                            backgroundSize="cover"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundBlendMode={"darken"}
                            display="flex"
                            justifyContent="center"
                            flexDirection="column"
                            paddingLeft={'10px'}
                        >
                            MEN'S WATCHES <br />
                            <ButtonShopNow />
                        </Box>
                    </Td>

                    <Td rowSpan={2}>
                        <Box
                            height="100%"
                            border="1px solid"
                            bg={`rgba(44, 43, 43, 0.7) url(${tshirts})`}
                            backgroundSize="cover"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundBlendMode={"darken"}
                            display="flex"
                            justifyContent="center"
                            flexDirection="column"
                            paddingLeft={'10px'}
                        >
                            MEN'S T-SHIRTS <br />
                            <ButtonShopNow />
                        </Box>
                    </Td>
                </Tr>

                <Tr>
                    <Td colSpan={2}>
                        <Box
                            height="200px"
                            border="1px solid"
                            bg={`rgba(44, 43, 43, 0.7) url(${shoes})`}
                            backgroundSize="cover"
                            backgroundPosition="center"
                            backgroundBlendMode={"darken"}
                            display="flex"
                            justifyContent="center"
                            flexDirection="column"
                            paddingLeft={'10px'}
                        >
                            MEN'S SHOES <br />
                            <ButtonShopNow />
                        </Box>
                    </Td>
                </Tr>
            </Table>
        </BoxCenter>
    );
}

export default ProductsTable;
