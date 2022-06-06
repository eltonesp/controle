import Header from "./components/header";
import { BsFillPencilFill, BsTrash } from "react-icons/bs";
import { Table, Container, Row, Breadcrumb, Modal, Button} from 'react-bootstrap';
import Link from "next/link";
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useRouter } from "next/router";
import useSWR from 'swr';
import ModalAlert from "./components/modal";
const listCostumers = () =>{

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

    const { data, error } = useSWR('http://controleprojetos.boodskappe.com/costumers', fetcher, { refreshInterval: 1000 })

    const deleteUser = (e, id) =>{
        setShow(false);
        axios
        .delete("http://controleprojetos.boodskappe.com/costumers/deleteUser/" + id)
        .then(function (response) {
            console.log(response)
        }).catch(function(response){
            console.log(response)
        })
    }
       
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
                    <th width="7px">Editar</th>
                    <th width="7px">Excluir</th>
                    </tr>
                    </thead>

                    <tbody>
                    { data && data.map((users) =>(
                        <>
                        <tr key={users.costumer_id}>
                            <td>{users.costumer_id}</td>
                            <td>{users.costumer_name}</td>
                            <td>
                                <Link href={'/editcollaborators/' + users.costumer_id }>
                                    <Button variant="primary"><BsFillPencilFill /></Button>
                                </Link>
                                
                            </td>
                            <td>
                                <Link href=''>
                                <Button variant="primary" onClick={()=>toggleDropdown(users.costumer_id, users.costumer_name)}>
                                    <BsTrash />
                                </Button>
                                </Link>
                                
                            </td>
                        </tr>
                       </>
                    ))}

                    {show ? <ModalAlert id={user.id} name={user.name} status={show} url={'costumers/deleteUser/'}/> : ""} 
                            
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


export default listCostumers;