import { Box, Flex, Heading, Table, Td, Tr } from "@chakra-ui/react";
import Layout from "./Layout";
import Gallery from "../components/Gallery";
import image1 from '../assets/Images/3c46700502c428485b65e307e38ca1a4.jpeg'
import image2 from '../assets/Images/best-mens-winter-outfits-2.jpeg'
import image3 from '../assets/Images/Best-Suit-Brands-banner-2.jpeg'
import image4 from '../assets/Images/tyler-creator-asap-rocky-gucci-campaign.webp'
import image5 from '../assets/Images/images.jpeg'
import image6 from '../assets/Images/luxurymenswatches1.jpeg'
import image7 from '../assets/Images/main-5-4-data.jpeg'
import image8 from '../assets/Images/old-money-style-aesthetic.jpeg'
import image9 from '../assets/Images/outfit.jpeg'
import image10 from '../assets/Images/Suits-Homepage-2column_3.jpeg'
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FaRegCalendarDays } from "react-icons/fa6";
import { BsCreditCard2BackFill } from "react-icons/bs";
import CenterListItem from "../components/custom_components/ListItemCenter";
import BoxCenter from "../components/custom_components/BoxCenter";
import ProductsTable from "../components/ProductsTable";
import ContactForm from "../components/ContactForm";

function HomePage() {
    const [images, setImages] = useState([image1, image2, image3, image4, image5, image6, image7, image8, image9, image10])
    return (
        <Layout>
            <Box>
                <Heading
                    bg={"black"}
                    color={"white"}
                    fontWeight={300}
                    paddingTop={'30px'}
                    fontSize={'30px'}
                    textAlign={"center"}
                >
                    WHAT'S NEW
                </Heading>
                <Gallery images={images} color={'black'} />
            </Box>
            <Table variant={'unstyled'}>
                <Tr>
                    <Td>
                        <Flex>
                            <Box>
                                <h2>FREE SHIPPING</h2>
                                <p>Free shipping on all orders abouve $100</p>
                            </Box>
                        </Flex>
                    </Td>
                    <Td>
                        <Flex>
                            <Box>
                                <h2>30 DAYS RETURN</h2>
                                <p>Simply return it during 30 days for an exchange</p>
                            </Box>
                        </Flex>
                    </Td>
                    <Td>
                        <Flex>
                            <Box>
                                <h2>100% PAYMENT SECURE</h2>
                                <p>Payment using mastercard of visa is accepted</p>
                            </Box>
                        </Flex>
                    </Td>
                </Tr>
            </Table>
            <ProductsTable />
            <ContactForm />
        </Layout>
    )
}

export default HomePage;