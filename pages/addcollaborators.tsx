import Header from "./components/header";
import { Breadcrumb, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import { useState, useEffect } from "react";
import useSWR from 'swr';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'



const AddCollaborators =  () => {

    const router = useRouter()

    type FormData = {
        function: number;
        level: number;
    };


    const [response, setResponse] = useState({
        type: ''
    })
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (dataU) => {

       const userAdd = (JSON.stringify(dataU));
       const postr = axios({
                method: "post",
                url: "http://controleprojetos.boodskappe.com/collaborators/addCollaborators",
                data: userAdd,
               
            }).then(function(response){
                setResponse({
                    type: 'success'
                });
                router.push('/listcollaborators')
            }).catch(function(error){
                console.log(error)
                setResponse({
                    type: 'error'
                });
            })
      };   





    const fetcher = (url: string) => axios.get(url).then(res => res.data)

    const { data, error } = useSWR('http://controleprojetos.boodskappe.com/collaborators/listFunction', fetcher, { refreshInterval: 1000 })

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
                        <Form.Group className="mb-3" controlId="collaborator_name">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome"  {...register("collaborator_name", {required: true})} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="collaborator_email">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" placeholder="email"  {...register("collaborator_email", {required: true})} />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="collaborator_phone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="tel" placeholder="Telefone" {...register("collaborator_phone", {required: true})} />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="collaborator_address">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control as='textarea' placeholder="Endereço" {...register("collaborator_address", {})}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="collaborator_password">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="senha" {...register("collaborator_password", {required: true})}/>
                        </Form.Group>

                        <Form.Select className="mb-3"  aria-label="collaborator_function" {...register("collaborator_function", { required: true })}>
                            <option>Função</option>
                            {data && data.map((list:any) => 
                                <option key={list.functionId} value={list.functionId}>{list.functionName}</option>
                            )}
                            
                        </Form.Select>

                        <Form.Select className="mb-3"  aria-label="collaborator_level"  {...register("collaborator_level", { required: true })}>
                            <option>Nivel</option>
                            <option value="1">Administrador</option>
                            <option value="2">Gerenciador</option>
                            <option value="3">Colaborador</option>
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
export default AddCollaborators

