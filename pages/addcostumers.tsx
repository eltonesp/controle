import Header from "./components/header";
import { Breadcrumb, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import { useState, useEffect } from "react";
import useSWR from 'swr';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'



const AddCostumers =  () => {

    const router = useRouter()


    const [response, setResponse] = useState({
        type: ''
    })
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (dataU) => {

       const userAdd = (JSON.stringify(dataU));
       const postr = axios({
                method: "post",
                url: "http://controleprojetos.boodskappe.com/costumers/addCostumers",
                data: userAdd,
               
            }).then(function(response){
                setResponse({
                    type: 'success'
                });
                router.push('/listcostumers')
            }).catch(function(error){
                console.log(error)
                setResponse({
                    type: 'error'
                });
            })
      };   



    return(
        <>
            <Header />
            <Container>
                <Row>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Cadastrar Cliente
                        </Breadcrumb.Item>
                    </Breadcrumb>
                   { response.type === 'success' ?<Alert variant="success">Colaborador Cadastrado com sucesso!.</Alert> : "" }
                   { response.type === 'error' ? <Alert variant="danger">Erro ao cadastrar colaborador!.</Alert> : ""}

                    <Form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="costumer_name">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome"  {...register("costumer_name", {required: true})} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="costumer_email">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" placeholder="email"  {...register("costumer_email", {required: true})} />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="costumer_phone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="tel" placeholder="Telefone" {...register("costumer_phone", {required: true})} />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="costumer_address">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control as='textarea' placeholder="Endereço" {...register("costumer_address", {})}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                    </Form>
                </Row>
            </Container>
            
        </>
    )
}
export default AddCostumers

