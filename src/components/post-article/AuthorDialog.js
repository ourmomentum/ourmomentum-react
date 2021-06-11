import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Button, Input, IconButton, Select,
} from "@chakra-ui/react"
import { Contributor } from "./contributor";
import { AddIcon } from '@chakra-ui/icons'
import {TableBody} from "@material-ui/core";


export default function AuthorDialog(props) {
    let {open, onClose, contributors, addContributor, removeContributor} = props;

    const [newContributor, setNewContributor] = useState('');

    const addNewAuthor = () => {
        if (newContributor && newContributor != '') {
            addContributor(newContributor);
            setNewContributor('');
        }
    }
    return (
        <Modal isOpen={open} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>View Authors <ModalCloseButton /></ModalHeader>
                <Table>
                    <Thead>
                        <Tr>
                            <Td>Name</Td>
                            <Td>Role</Td>
                            <Td>Remove</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {contributors.map((contributor) => (
                            <Tr key={contributor.name}>
                                <Td>
                                    {contributor.name}
                                </Td>
                                <Td>
                                    <Select onChange={e=>e.target.value === "AUTHOR" ? contributor.setAuthor() : contributor.setEditor()} defaultValue={contributor.role}>
                                        <option value={'AUTHOR'}>Author</option>
                                        <option value={'EDITOR'}>Editor</option>
                                    </Select>
                                </Td>
                                <Td>
                                    <Button color='secondary' onClick={removeContributor.bind(this, contributor)}>Remove</Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <Input placeholder="New Author" onChange={e=>setNewContributor(new Contributor(e.target.value))} value={newContributor.name ? newContributor.name : ''}></Input>
                <IconButton style={{float: 'right'}} onClick={addNewAuthor}><AddIcon /></IconButton>
            </ModalContent>
        </Modal>
    )
}
