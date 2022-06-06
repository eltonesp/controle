import { Modal, Button } from 'react-bootstrap'
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';

const ModalAlert = (props: { status: boolean; name: any; id: number; url:any;}) =>{
    const router = useRouter()

    const [show, setShow] = useState(props.status)

    const handleClose = () => {
        setShow(false) 
    }

    const deleteUser = (e, userId: string ) =>{
        axios
        .delete("http://controleprojetos.boodskappe.com/" + props.url + userId)
        .then(function (response) {
            console.log(response)
        }).catch(function(response){
            console.log(response)
        })
        handleClose()

    }
    useEffect(() => {
        if(props.status){

            const {id: number, name, status } = props
            
        }

    }, [])
    return(
        <>
        { props.status ? <Modal show={show} onHide={handleClose}><Modal.Body> Deseja realmente deletar: { props.name }</Modal.Body><Modal.Footer><Button variant="secondary" onClick={handleClose}>Cancelar</Button><Button variant="primary" onClick={(e) => deleteUser(e, props.id)}>Deletar</Button></Modal.Footer></Modal> : <></> }
        </>
    )
}
export default ModalAlert