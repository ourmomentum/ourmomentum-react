import React, {useEffect, useState} from 'react';
import LoginForm from "./LoginForm";
import ArticleForm from "./ArticleForm";
import {Flex, Stack} from "@chakra-ui/react";
import Cookies from 'universal-cookie'
import {isLoggedIn} from "../../utilities/MomentumRequests";
import {BACKEND_URL} from "../../constants/backend_info";

function PostArticle(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const cookies = new Cookies();

    const verifyLoggedIn = () => {
        isLoggedIn()
            .then(() => setLoggedIn(true))
            .catch(() => setLoggedIn(false));
    }

    const onSuccess = (e) => {
        cookies.set("googleToken", e.tokenId, {path: '/', httpOnly: process.env.NODE_ENV === 'production', domain: process.env.NODE_ENV === 'production' ? BACKEND_URL : ""});
        verifyLoggedIn();
    }

    useEffect(() => {
        verifyLoggedIn();
    }, [])

    return (
        <Flex w={'100%'} justify={'center'} p={[4, 4, 8, 16]}>
            <Stack w={['100%', '100%', '85%', '75%', '40%']} justify={'center'}>
                {!loggedIn ? <LoginForm onSuccess={onSuccess} /> : <ArticleForm onLogOut={verifyLoggedIn} />}
            </Stack>
        </Flex>
    );
}

export default PostArticle;
