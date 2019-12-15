import "./index.scss";

import React from "react";

class IndicaSegView extends React.Component {
  render() {
    return (
      <div className="indica-seg-view">
        <h3>Indica Seg</h3>

        <p>
          - Você pode ganhar pontos e aproveitar de benefícios exclusivos que só
          um plano de seguro oferece!
        </p> 
        <p>
          - Se você já contratou um plano de seguro com nossos seguradores
          parceiros, já está participando do programa de SegPoints;
        </p> 
        <p>
          - Com seu plano de seguro, ocê poderá compartilhar um código com quem
          você quiser, e com esse código, a pessoa ganhará descontos em planos e
          você irá ganhar ponto para poder troca-los por benefícios diversos
          como viagens, vouchers em restaurantes, brindes em farmácias, redução
          de carência do plano, desconto na sua renovação do plano, etc.
        </p> 
        <p>
          - Quanto mais pessoas indicadas utilizarem seu código, mais e mais
          pontos você poderá ganhar.
        </p> 
        <p>
          - Acha que para por ai? Você também poderá aproveitar descontos em
          lojas de cosméticos e farmacias.
        </p> 
      </div>
    );
  }
}

export default IndicaSegView;
