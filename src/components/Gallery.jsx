import React, { useState } from 'react';
import { Flex, Image, Box, UnorderedList } from '@chakra-ui/react';

const Gallery = ({ images, color }) => {
    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const handleMouseDown = (e) => {
        setMouseDownAt(e.clientX);
    };

    const handleMouseUp = () => {
        setMouseDownAt(0);
        setPrevPercentage(percentage);
    };

    const handleMouseMove = (e) => {
        if (mouseDownAt === 0) return;

        const mouseDelta = mouseDownAt - e.clientX;
        const maxDelta = window.innerWidth / 2;
        const deltaPercentage = (mouseDelta / maxDelta) * -100;

        let nextPercentage = prevPercentage + deltaPercentage;
        nextPercentage = Math.min(nextPercentage, 0);
        nextPercentage = Math.max(nextPercentage, -75);

        setPercentage(nextPercentage);
    };

    return (
        <Box
            bg={color}
            paddingX="80px"
            paddingTop={'20px'}
            paddingBottom={'100px'}
            width="100%"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <UnorderedList
                display={'flex'}
                id="image-track"
                data-mouse-down-at={mouseDownAt}
                data-prev-percentage={prevPercentage}
                transform={`translate(${percentage}%, 0%)`}
                transition="transform 1.2s forwards"
                listStyleType={'none'}
                margin={0}
                padding={0}
            >
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        height="240px"
                        width="180px"
                        objectFit="cover"
                        objectPosition={`${100 + percentage}% 50%`}
                        transition="object-position 1.2s forwards"
                        marginRight={'70px'}
                    />
                ))}
            </UnorderedList>
        </Box>
    );
};

export default Gallery;
