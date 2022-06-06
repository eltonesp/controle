import Header from './components/header';
import { Card, Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import Link from 'next/link';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useRouter } from "next/router";
import useSWR from 'swr';


const FinishedProjects = () =>{

    const fetcher = url => axios.get(url).then(res => res.data)

    const { data, error } = useSWR('http://controleprojetos.boodskappe.com/projects/finished', fetcher, { refreshInterval: 1000 })

    return(
        <>
        <Header />
        <Container>
            <Row>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Projetos Finalizados
                    </Breadcrumb.Item>
                </Breadcrumb>

                    { data && data.map((project)=>
                    <>
                <Col x={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{project.project_title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{project.costumer_name}</Card.Subtitle>
                            <Card.Text>
                            {project.description}
                            </Card.Text>
                            <Card.Footer>
                                <Link href={"/viewprojects/" + project.project_id}>
                                    <a className='card-link'>Visualizar</a>
                                </Link>
                                <Link href={"/viewprojects/"+ project.project_id}>
                                    <a className='card-link'>Visualizar</a>
                                </Link>
                            </Card.Footer>
                            
                        </Card.Body>
                    </Card>
                </Col>
                </>
                )}
            </Row>
        </Container>
        
        </>
    )
}
export default FinishedProjects;