import React, {useEffect, useState} from 'react';
import {Box, Flex} from "@chakra-ui/react";
import {AnimatePresence, motion} from 'framer-motion';
import PreviewCard from "../../cards/PreviewCard";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BlogPreviewMobile(props) {
    const { posts } = props;

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    //I hate carousels with a burning passion.
    const [opacity, setOpacity] = useState(1)
    return ((posts.length &&
        <Flex w={'100%'} justify={'center'} p={8}>
            <Flex w={'100%'} justify={'center'} boxShadow={'-10px 10px 20px #d9d9d9, 10px -10px 20px #ededed'} borderRadius={24}>
                <Slider style={{width: '100%', overflow: 'visible'}}{...settings}>
                    {posts.map((el, i) => <Box key={i}><PreviewCard disableShadow post={el}/></Box>)}
                </Slider>
            </Flex>
        </Flex>
        )
    );
}

export default BlogPreviewMobile;