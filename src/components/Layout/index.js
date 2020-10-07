import React, { useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import * as Yup from 'yup';

import { Input, Select, ImageInput } from '../Form';
import { Container } from './styles';

function Layout() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        avatar: Yup.mixed().required('A imagem é obrigatória'),
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O e-mail é obrigatório'),
        gender: Yup.string().required('O gênero é obrigatório'),
        address: Yup.object().shape({
          planet: Yup.string()
            .min(3, 'No minimo 3 caracteres')
            .required('O planeta é obrigatório'),
          galaxy: Yup.string()
            .min(2, 'No minimo 2 caracteres')
            .required('A galáxia é obrigatória'),
        }),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      formRef.current.setErrors({});
      // reset();
      alert('Dados alterados com sucesso!');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      formRef.current.setData({
        name: 'Vinicius',
        email: 'vinicius@mail.com',
        gender: 'Masculino',
        address: {
          planet: 'Terra',
          galaxy: 'Via Láctea',
        },
      });
    }, 2000);
  }, []);

  return (
    <Container>
      <h1>Unform</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <ImageInput name="avatar" />
        <Input name="name" label="Nome" placeholder="Nome" />
        <Input type="email" label="E-mail" name="email" placeholder="E-mail" />

        <Select
          name="gender"
          label="Gênero"
          placeholder="Gênero"
          options={['Masculino', 'Feminino']}
        />

        <Scope path="address">
          <Input name="planet" label="Planeta" placeholder="Planeta" />
          <Input name="galaxy" label="Galáxia" placeholder="Galáxia" />
        </Scope>

        <button type="submit">Salvar alterações</button>
      </Form>
    </Container>
  );
}

export default Layout;
