import Header from "./components/header";
import { BsFillPencilFill, BsTrash } from "react-icons/bs";
import { Table, Container, Row, Breadcrumb, Modal, Button, ModalProps} from 'react-bootstrap';
import Link from "next/link";
import axios from 'axios';
import {useState, useRef, useEffect} from 'react';
import { useRouter } from "next/router";
import useSWR from 'swr';
import ModalAlert from "./components/modal";


const ListCollaborators = () =>{

    const [user, setUser] = useState({
        id: 0,
        name:''
    })

    const [show, setShow] = useState(false)
    function toggleDropdown(userId: number, userName: any){
        setShow(true);    
           setUser({
               id: userId,
               name: userName
           })
          }
    
    
    const router = useRouter();

    const fetcher = url => axios.get(url).then(res => res.data)

    const { data, error } = useSWR('http://controleprojetos.boodskappe.com/collaborators', fetcher, { refreshInterval: 1000 })

    return(
        <>
            <Header />
            <Container>
                <Row>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Listar Colaborador
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Função</th>
                            <th width="7px">Editar</th>
                            <th width="7px">Excluir</th>
                            </tr>
                            </thead>
                            <tbody>
                            { data && data.map((users) =>(
                                <>
                                <tr key={users.collaborator_id}>
                                    <td>{users.collaborator_id}</td>
                                    <td>{users.collaborator_name}</td>
                                    <td>{users.functionName}</td>
                                    <td>
                                        <Link href={'/editcollaborators/' + users.collaborator_id }>
                                            <Button variant="primary"><BsFillPencilFill /></Button>
                                        </Link>
                                        
                                    </td>
                                    <td>
                                        <Link href=''>
                                        <Button variant="primary" onClick={()=>toggleDropdown(users.collaborator_id, users.collaborator_name)}>
                                            <BsTrash />
                                        </Button>
                                        </Link>
                                    </td>
                                </tr>
                            </>
                            ))}
                            
                           {show ? <ModalAlert id={user.id} name={user.name} status={show} url={'collaborators/deleteUser/'}/> : ""} 
                            
                            {useEffect(()=>{
                                setTimeout(() => {
                                    setShow(false)
                                }, 6000);
                                console.log(show)
                            },[show])}
                            
                            </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}


export default ListCollaborators;