import { Box } from "@chakra-ui/react";

function BoxCenter({ children, padding, paddingLeft, paddingRight, paddingTop, paddingBottom }) {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={padding}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
        >
            {children}
        </Box>
    )
}

export default BoxCenter