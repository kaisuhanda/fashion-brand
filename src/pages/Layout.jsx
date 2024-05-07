import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout(props) {
    return (
        <Box>
            <Header />
            {props.children}
            <Footer />
        </Box>
    )
}

export default Layout