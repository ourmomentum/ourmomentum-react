import React, {useMemo, useRef, useState} from 'react'
import AuthorDialog from './AuthorDialog';
import Axios from 'axios';
import {BACKEND_URL, GOOGLE_CLIENT_ID} from '../../constants/backend_info';
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle, Box,
    Button, Divider,
    Heading,
    Input,
    Stack, Text,
    Textarea, useToast
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "universal-cookie";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";



export default function ArticleForm(props) {

    const [postContent, setPostContent] = useState({title: '', body: '', authors: '', editors: '', thumbnailImage: 'Test'});
    const [contributors, setContributors] = useState([]);
    const [showAuthorDialog, setShowAuthorDialog] = useState(false);
    const [articleImage, setArticleImage] = useState(null);
    const [showErrMsg, setShowErrMsg] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [selectedFileName, setSelectedFileName] = useState('');
    const [submissionInProgress, setSubmissionInProgress] = useState(false);
    const uploadRef = useRef();
    const toast = useToast();

    const onInputFieldChange = (e) => {
        setPostContent({...postContent, [e.target.name]: e.target.value});
    }

    const onMdeChange = (e) => {
        setPostContent({...postContent, body: e});
    }

    const uploadFile = () => {
        const formData = new FormData();
        formData.append("image", uploadRef.current.files[0]);
        formData.append("token", props.token);
        return axios.post(BACKEND_URL + "/api/temp/one-image", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        });
    }

    const getContributorsObj = () => {
        const authors = contributors.filter((e) => e.role === "AUTHOR").map((e) => e.name);
        const editors = contributors.filter((e) => e.role === "EDITOR").map((e) => e.name);
        return {authors: authors.join(', '), editors: editors.join(', ')};
    }

    const submitPost = () => {
        const contributors = getContributorsObj();
        setShowErrMsg(false);
        if (!uploadRef.current.files[0]) {
            setErrMsg("Please upload an image for your post.")
            setShowErrMsg(true);
            return;
        }
        if (contributors.authors.length === 0) {
            setErrMsg("Please add authors to your post.")
            setShowErrMsg(true);
            return;
        }

        if (contributors.editors.length === 0) {
            setErrMsg("Please add editors to your post.")
            setShowErrMsg(true);
            return;
        }

        if (postContent.body.length === 0) {
            setErrMsg("Please add a body to your post.")
            setShowErrMsg(true);
            return;
        }
        if (postContent.title.length === 0) {
            setErrMsg("Please add a title to your post.")
            setShowErrMsg(true);
            return;
        }
        setSubmissionInProgress(true);
        uploadFile()
            .then((res) => {
            axios.post(BACKEND_URL + "/api/temp/create-post", {...postContent, ...contributors, thumbnailImage: res.data}, {withCredentials: true})
                .then(() => toast({position: 'bottom', title: 'Success!', description: 'Post submitted.', status: 'success'}))
                .catch((err) => {
                    toast({position: 'bottom', title: 'Error', description: 'Error while creating post. Details: ' + err.toString(), status: 'error'});
                })
                .finally(() => setSubmissionInProgress(false));
        })
            .catch(err => toast({position: 'bottom', title: 'Error', description: 'Error while creating post. Details: ' + err.toString(), status: 'error'}))
            .finally(() => setSubmissionInProgress(false));

    }

    const logOut = () => {
        const cookies = new Cookies();
        cookies.set("googleToken", "", {path: '/', httpOnly: process.env.NODE_ENV === 'production', domain: process.env.NODE_ENV === 'production' ? BACKEND_URL : ""});
        props.onLogOut();

    }

    const addContributor = (added) => {
        setContributors([...contributors, added])
    }

    const removeContributor = (removed) => {
        setContributors(contributors.filter((contributor) => contributor != removed));
    }

    const editorOptions = useMemo(() => {
        return {
            hideIcons: ['image', 'fullscreen', 'side-by-side']
        };
    }, []);

    return (
        <React.Fragment>
            <Stack w={'100%'} direction={'column'} align={'center'}>
                <Stack w={'100%'} spacing={8} align={'center'} borderWidth={'1px'} borderColor={'#A0AEC0'} p={8} borderRadius={8} spacing={8} >
                    <Heading variant='h2' pb={8}>Create Blog Post</Heading>
                    <Input placeholder="Title" textAlign={'center'} fontSize={'2em'} w='50%' variant='flushed' name='title' onChange={onInputFieldChange}/>
                    <Box w={'100%'}>
                        <SimpleMdeReact onChange={onMdeChange} options={editorOptions} />
                    </Box>
                    <Alert status="error" display={showErrMsg ? 'inherit' : 'none'}>
                        <AlertIcon />
                        <AlertTitle mr={2}>Upload Not Successful</AlertTitle>
                        <AlertDescription>{errMsg}</AlertDescription>
                    </Alert>
                    <Stack direction={['column', 'column', 'row', 'row']} spacing={8} justify={'center'} align={'center'}>
                        <Button onClick={() => setShowAuthorDialog(true)}>Edit Authors</Button>
                        <Button onClick={() => uploadRef.current.click()}>Upload Image</Button>
                        <Text as={'span'} display={selectedFileName === "" ? 'none' : 'block'}>{selectedFileName}</Text></Stack>
                    <Button onClick={submitPost} isLoading={submissionInProgress} colorScheme={'green'}>Submit</Button>
                    <input type={'file'} style={{display: 'none'}} ref={uploadRef} onChange={e => e.target.files[0] ? setSelectedFileName(e.target.files[0].name) : setSelectedFileName('')} accept={'.png, .jpeg, .jpg'}/>
                    <Divider />
                    <Button onClick={logOut}>Log Out</Button>
                </Stack>
            </Stack>
            <AuthorDialog open={showAuthorDialog} onClose={() => setShowAuthorDialog(false)} contributors={contributors} addContributor={addContributor} removeContributor={removeContributor} />
        </React.Fragment>
    )
}
