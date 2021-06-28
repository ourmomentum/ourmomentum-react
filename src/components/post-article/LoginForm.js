import React, {useState} from 'react';
import {Divider, Heading, Image, Stack, Text} from "@chakra-ui/react";
import GoogleLogin from "react-google-login";
import {GOOGLE_CLIENT_ID} from "../../constants/backend_info";

function LoginForm(props) {
    const { onSuccess } = props;
    const [showError, setShowError] = useState(false);
    const onError = (e) => {
        console.log(e);
        setShowError(true);
    }
    return (
        <Stack spacing={4} justify={'center'} align={'center'} p={8} borderRadius={16} boxShadow={'10px 10px 40px #d9d9d9, -10px -10px 40px #ffffff'}>
        <Image src={'logo.svg'} h={24}/>
        <Divider />
        <Stack spacing={8} justify={'center'} >
            <Heading>Welcome, Momentum Member!</Heading>
            <Text>Currently, we require members to sign in before posting. Please use your <b>provided Momentum email</b> to sign in below!</Text>
            <GoogleLogin onSuccess={onSuccess} onFailure={onError} clientId={GOOGLE_CLIENT_ID} />
            {showError ? <Text color={'red'}>Error while logging in. Make sure that you are using your Momentum email and try clearing your cache and trying again. If this doesn't work, send Efe a message.</Text> : ""}
        </Stack>
        </Stack>
    );
}

export default LoginForm;
