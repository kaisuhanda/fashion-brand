import { Box, Button, Flex, Heading, Input, Text, Textarea } from "@chakra-ui/react"
import { FaPaperPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import BoxCenter from "./custom_components/BoxCenter";

function ContactForm() {
    return (
        <BoxCenter>
            <Flex width={'1100px'} justifyContent={"space-between"} marginBottom={'100px'}>
                <Box>
                    <Heading fontWeight={400}>Contact Us</Heading>
                    <Flex fontSize={'20px'} marginTop={'20px'}>
                        <BoxCenter>
                            {<FaPaperPlane size={25} color="rgba(86, 125, 77, 0.97)" />}
                        </BoxCenter>
                        <Text marginLeft={'10px'} fontSize={'lg'}>
                            kaisuhanda@gmail.com
                        </Text>
                    </Flex>
                    <Flex marginTop={'20px'}>
                        <BoxCenter>
                            {<FaPhoneAlt size={25} color="rgba(86, 125, 77, 0.97)" />}
                        </BoxCenter>
                        <Text marginLeft={'10px'} fontSize={'lg'}>
                            0818507773
                        </Text>
                    </Flex>
                    <Flex marginTop={'20px'}>
                        <BoxCenter paddingRight={'10px'}>
                            <a href="https://wa.me/+62818507773">
                                {<FaWhatsapp size={30} color="rgba(86, 125, 77, 0.97)" />}
                            </a>
                        </BoxCenter>
                        <BoxCenter paddingRight={'10px'}>
                            <a href="https://instagram.com/kaisuhanda?igshid=NzZhOTFlYzFmZQ==">
                                {<FaInstagram size={30} color="rgba(86, 125, 77, 0.97)" />}
                            </a>
                        </BoxCenter>
                        <BoxCenter paddingRight={'10px'}>
                            <a href="https://github.com/kaisuhanda">
                                {<LuGithub size={30} color="rgba(86, 125, 77, 0.97)" />}
                            </a>
                        </BoxCenter>
                    </Flex>
                </Box>
                <Box>
                    <Input placeholder='name' size='md' marginBottom={'20px'} />
                    <Input placeholder='email' size='md' marginBottom={'20px'} />
                    <Textarea placeholder='message' />
                    <BoxCenter paddingTop={'20px'}>
                        <Button
                            width={'200px'}
                            variant={'outline'}
                            fontWeight={400}
                            color={"gray"}
                            _hover={{
                                borderColor: "gray",
                                color: "gray",
                                transition: ".5s"
                            }}
                        >
                            submit
                        </Button>
                    </BoxCenter>
                </Box>
            </Flex>
        </BoxCenter>
    )
}

export default ContactForm