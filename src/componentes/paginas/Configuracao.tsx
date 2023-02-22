import React from "react";
import Cabecalho from "../cabecalho";
import Card from "../card";
import Formulario from "../Formulario";
import ListaParticipantes from "../ListaParticipantes";
import Rodape from "../Rodape";

const Configuracao = () => {
  return (
    <Card>
      <section>
        <h2>Vamos começar!</h2>
        <Cabecalho/>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </Card>
  );
};

export default Configuracao;
