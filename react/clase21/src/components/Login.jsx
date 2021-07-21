import React from 'react';
import useCustomForm from '../utils/useCustomForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Col, Container, Row } from 'react-bootstrap';
import { usePost } from '../utils/useHTTP';
import { useState } from "react";
import axios from "axios";


const schema = yup.object().shape({
    username: yup.string().required("El username es obligatorio").min(3, "Minimo 3 caracteres").max(30, "El username no puede contener mas de 30 caracteres"),
    pass: yup.string().required("La pass es obligatorio").max(30, "La pass no puede contener mas de 30 caracteres"),
})

const Login = () => {
    const [values, handlerInput] = useCustomForm();
    const [result, setResult] = useState({});
    const [error, setError] = useState(false);
    //const [result, error] = usePost(`http://localhost:3001/auth`, values);

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });
    const login = async () => {
        try {
            setResult(await axios.post(`http://localhost:3001/auth`, values));
            console.log(result.data);
        }
        catch (err) {
            setError(true);
        }
    }


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit(login)}>
                            <Form.Group className="mb-2">
                                <Form.Label>Username</Form.Label>
                                <Form.Control {...register("username")} onChange={handlerInput} type="text" placeholder="Username" name="username" />
                            </Form.Group>

                            <Form.Group className="mb-2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control {...register("pass")} onChange={handlerInput} type="password" placeholder="Password" name= "pass" />
                                <Form.Text className="text-muted">
                                We'll never share your password with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <button className="btn btn-info">
                                Login
                            </button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
 
export default Login;