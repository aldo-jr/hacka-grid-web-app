import "./index.scss";

import Button from "components/Button";
import React from "react";

class MeusPlanosView extends React.Component {
  render() {
    return (
      <div>
        <div className="meus-planos-view">
          <p>
            <b>Seguradora:</b> Mongeral
          </p>
          <p>
            <b>Plano:</b> TOP / Proteção
          </p>
          <p>
            <b>Benefícios:</b> Morte acidental
          </p>
          <p>Morte qualquer causa</p>
          <p>Invalidez Permanente Total ou Parcial por Acidente (IPA)</p>
          <p>Doenças graves</p>
          <p>Transplante de órgãos</p>
          <p>
            <b>Renovar em:</b> 10/12/2020
          </p>

          <Button>Ver Mais Informações</Button>
        </div>

        <Button className="meus-planos-view__cta" color="full-primary">
          <span>+ Contratar mais planos</span>< br/>
          <span>Você pode comprar um plano para terceiros</span>
        </Button>
      </div>
    );
  }
}

export default MeusPlanosView;
