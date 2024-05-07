import { ListItem } from "@chakra-ui/react";

function ListItemCenter(props) {
    return (
        <ListItem
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            _hover={{
                borderColor: "gray",
                color: "gray",
                transition: ".5s"
            }}>
            {props.children}
        </ListItem>
    )
}

export default ListItemCenter