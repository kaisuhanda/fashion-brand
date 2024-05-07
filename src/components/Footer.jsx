import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { RiWhatsappFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <Box
            bg={'rgba(86, 125, 77, 0.97)'}
            color={"white"}
            paddingX={'25px'}
            paddingY={'10px'}
            textAlign={"center"}
        >
            made by kai suhanda. supported by purwadhika school and ciputra univeristy
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <UnorderedList display={"flex"} listStyleType={"none"} gap={'10px'}>
                    <ListItem>
                        <a href="https://wa.me/+62818507773">
                            {<RiWhatsappFill size={23} />}
                        </a>
                    </ListItem>
                    <ListItem>
                        <a href="https://instagram.com/kaisuhanda?igshid=NzZhOTFlYzFmZQ==">
                            {<RiInstagramFill size={23} />}
                        </a>
                    </ListItem>
                    <ListItem>
                        <a href="https://github.com/kaisuhanda">
                            {<FaGithub size={23} />}
                        </a>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Box>
    )
}

export default Footer;