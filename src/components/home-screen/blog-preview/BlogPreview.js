import React from 'react';
import {useMediaQuery} from "@chakra-ui/react";
import BlogPreviewDesktop from "./BlogPreviewDesktop";
import BlogPreviewMobile from "./BlogPreviewMobile";

function BlogPreview(props) {
    const [isBigScreen] = useMediaQuery("(min-width: 48em)");
    return (
        isBigScreen ? <BlogPreviewDesktop {...props} /> : <BlogPreviewMobile {...props}/>
    );
}

export default BlogPreview;