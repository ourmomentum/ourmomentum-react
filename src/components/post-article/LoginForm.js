import React, {useState} from 'react';
import {Heading, Stack, Text} from "@chakra-ui/react";
import GoogleLogin from "react-google-login";
import {GOOGLE_CLIENT_ID} from "../../constants/backend_info";

function LoginForm(props) {
    const { onSuccess } = props;
    const [showError, setShowError] = useState(false);
    return (
        <Stack spacing={8} justify={'center'}>
            <Heading>Welcome, Momentum Member!</Heading>
            <Text>Currently, we require members to sign in before posting. Please use your <b>provided Momentum email</b> to sign in below!</Text>
            <GoogleLogin onSuccess={onSuccess} onFailure={() => setShowError(true)} clientId={GOOGLE_CLIENT_ID} />
            {showError ? <Text color={'red'}>Error while logging in. Make sure that you are using your Momentum email and try clearing your cache and trying again. If this doesn't work, send Efe a message.</Text> : ""}
        </Stack>
    );
}

export default LoginForm;
