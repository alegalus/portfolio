import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import s from "./FormContact.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import sendEmail from "../../../Funciones/sendEmail";
import validate from "../../../Funciones/validate";
import { Modal } from "../../Modal/Modal";

const Etiqueta = styled.label`
  color: white;
  font-family: inherit;
  font-weight: bold;
  text-align: left;
  margin-bottom: 0.5em;
  font-size: 1.5em;
`;

function FormContact() {
  let [modalState, useModalState] = useState(false);
  let navigate = useNavigate();

  function HandleModal() {
    useModalState(!modalState);
    setTimeout(() => {
      navigate("../", { replace: true });
    }, 2000);
  }

  return (
    <div>
      <Link to={"/"}>
        <p className={s.home}>Home.</p>
      </Link>
      <Formik
        initialValues={{
          nombre: "",
          mail: "",
          mensaje: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          sendEmail();
          resetForm();
          HandleModal();
        }}
      >
        {(formik) => (
          <Form id="form" className={s.main}>
            <div className={s.divInput}>
              <Etiqueta htmlFor="nombre">Nombre</Etiqueta>
              <Field
                className={s.input}
                type="text"
                id="nombre"
                name="nombre"
              />
              <ErrorMessage
                component="div"
                className={s.danger}
                name="nombre"
              />
            </div>
            <div className={s.divInput}>
              <Etiqueta htmlFor="mail">Mail</Etiqueta>
              <Field className={s.input} type="text" id="mail" name="mail" />
              <ErrorMessage component="div" className={s.danger} name="mail" />
            </div>
            <div className={s.divInput}>
              <Field
                className={s.texta}
                name="mensaje"
                rows="10"
                as="textarea"
                placeholder="Escribi tu mensaje"
              />
              <ErrorMessage
                component="div"
                className={s.danger}
                name="mensaje"
              />
            </div>
            <button className={s.boton} type="submit">
              Enviar mensaje
            </button>
          </Form>
        )}
      </Formik>
      <div>
        <Modal state={modalState} />
      </div>
    </div>
  );
}

export default FormContact;
