import Header from "./components/header";
import { Breadcrumb, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import { useState, useEffect } from "react";
import useSWR from 'swr';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'

const fetcher = (url: string) => axios.get(url).then(res => res.data)


const AddProjects =  () => {

    const router = useRouter()

    type FormData = {
        costumer: number;
        collaborator: number;
    };


    const [response, setResponse] = useState({
        type: ''
    })
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (dataU) => {

       const userAdd = (JSON.stringify(dataU));
       const postr = axios({
                method: "post",
                url: "http://controleprojetos.boodskappe.com/projects/addProject",
                data: userAdd,
               
            }).then(function(response){
                setResponse({
                    type: 'success'
                });
                router.push('/inprogressprojects')
            }).catch(function(error){
                console.log(error)
                setResponse({
                    type: 'error'
                });
            })
      };   


    const { data:collaborator } = useSWR('http://controleprojetos.boodskappe.com/collaborators', fetcher, { refreshInterval: 1000 })


    const { data:costumer } = useSWR('http://controleprojetos.boodskappe.com/costumers', fetcher, { refreshInterval: 1000 })

    return(
        <>
            <Header />
            <Container>
                <Row>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Cadastrar Colaborador
                        </Breadcrumb.Item>
                    </Breadcrumb>
                   { response.type === 'success' ?<Alert variant="success">Colaborador Cadastrado com sucesso!.</Alert> : "" }
                   { response.type === 'error' ? <Alert variant="danger">Erro ao cadastrar colaborador!.</Alert> : ""}

                    <Form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="project_title">
                            <Form.Label>Titulo do Projeto</Form.Label>
                            <Form.Control type="text" placeholder="Titulo"  {...register("project_title", {required: true})} />
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="project_description">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as='textarea' placeholder="Descrição" {...register("project_description", {required: true})}/>
                        </Form.Group>

                        <Form.Select className="mb-3"  aria-label="project_collaborator" {...register("project_collaborator", { required: true })}>
                            <option>Colaborador</option>
                            {collaborator && collaborator.map((list:any) => 
                                <option key={list.collaborator_id} value={list.collaborator_id}>{list.collaborator_name}</option>
                            )}
                            
                        </Form.Select>

                        <Form.Select className="mb-3"  aria-label="project_costumer"  {...register("project_costumer", { required: true })}>
                            <option>Cliente</option>
                            {costumer && costumer.map((list:any) => 
                                <option key={list.costumer_id} value={list.costumer_id}>{list.costumer_name}</option>
                            )}
                        </Form.Select>
                        

                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                </Row>
            </Container>
            
        </>
    )
}
export default AddProjects

