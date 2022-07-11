import React from "react";
import styled from "styled-components";
//en la ventana modal hacemos destructuring de children(podria ser prop.children sin destructuring)
//eso es lo que me va  atraer todo lo que ponga en los componentes, asi puedo reutilizar este modal
//en state(podria ser props.state sin destructuring) traigo el valor, si tiene o sea si es true lo muestra

const ModalBack = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 300px;
  height: 200px;
  padding: 20px;
  background: #ea0f1e;
  border-radius: 10px;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Titulo = styled.h3`
  color: white;
  font-family: inherit;
  font-weight: bold;
`;

const TituloTres = styled.h4`
  color: white;
  font-family: inherit;
  font-weight: bold;
`;

export function Modal({ state }) {
  return (
    <>
      {state && (
        <ModalBack>
          <ModalContainer>
            <Titulo>¡Mensaje enviado!</Titulo>
            <Titulo>Apenas pueda te respondo</Titulo>
            <TituloTres>Podes seguir recorriendo mi portfolio</TituloTres>
          </ModalContainer>
        </ModalBack>
      )}
    </>
  );
}
