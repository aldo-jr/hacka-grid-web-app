import "./index.scss";

import { isEmpty, isNil, path } from "ramda";

import React from "react";

class PlansView extends React.Component {
  render() {
    const { searchResult } = this.props;
    const simulationList = path(["Valor", "simulacoes"])(searchResult);

    return (
      <div className="plans-view">
        <h3>Melhores planos encontrados:</h3>

        {simulationList &&
          !isEmpty(simulationList) &&
          !isNil(simulationList) &&
          simulationList.map(
            simulation =>
              simulation.produtos &&
              !isEmpty(simulation.produtos) &&
              !isNil(simulation.produtos) &&
              simulation.produtos.map((product, i) => (
                <div key={i} className="plans-view__row">
                  <article className="plan-card">
                    <div className="plan-card__image"></div>
                    <div className="plan-card__description">
                      <span>{product.descricao}</span>
                      {product.coberturas &&
                        !isEmpty(product.coberturas) &&
                        !isNil(product.coberturas) &&
                        product.coberturas.map((cobertura, k) => (
                          <span key={`cover-${k}`}>
                            {cobertura.premioBase.toFixed(2)}
                          </span>
                        ))}
                    </div>
                  </article>

                  <article className="plan-card">
                    <div className="plan-card__image"></div>
                    <div className="plan-card__description">
                      <span>{product.descricao}</span>
                      {product.coberturas &&
                        !isEmpty(product.coberturas) &&
                        !isNil(product.coberturas) &&
                        product.coberturas.map((cobertura, k) => (
                          <span key={`cover-${k}`}>
                            {cobertura.premioBase.toFixed(2)}
                          </span>
                        ))}
                    </div>
                  </article>

                  <article className="plan-card">
                    <div className="plan-card__image"></div>
                    <div className="plan-card__description">
                      <span>{product.descricao}</span>
                      {product.coberturas &&
                        !isEmpty(product.coberturas) &&
                        !isNil(product.coberturas) &&
                        product.coberturas.map((cobertura, k) => (
                          <span key={`cover-${k}`}>
                            {cobertura.premioBase.toFixed(2)}
                          </span>
                        ))}
                    </div>
                  </article>

                  <article className="plan-card">
                    <div className="plan-card__image"></div>
                    <div className="plan-card__description">
                      <span>{product.descricao}</span>
                      {product.coberturas &&
                        !isEmpty(product.coberturas) &&
                        !isNil(product.coberturas) &&
                        product.coberturas.map((cobertura, k) => (
                          <span key={`cover-${k}`}>
                            {cobertura.premioBase.toFixed(2)}
                          </span>
                        ))}
                    </div>
                  </article>

                  <article className="plan-card">
                    <div className="plan-card__image"></div>
                    <div className="plan-card__description">
                      <span>{product.descricao}</span>
                      {product.coberturas &&
                        !isEmpty(product.coberturas) &&
                        !isNil(product.coberturas) &&
                        product.coberturas.map((cobertura, k) => (
                          <span key={`cover-${k}`}>
                            {cobertura.premioBase.toFixed(2)}
                          </span>
                        ))}
                    </div>
                  </article>

                  <article className="plan-card">
                    <div className="plan-card__image"></div>
                    <div className="plan-card__description">
                      <span>{product.descricao}</span>
                      {product.coberturas &&
                        !isEmpty(product.coberturas) &&
                        !isNil(product.coberturas) &&
                        product.coberturas.map((cobertura, k) => (
                          <span key={`cover-${k}`}>
                            {cobertura.premioBase.toFixed(2)}
                          </span>
                        ))}
                    </div>
                  </article>
                </div>
              ))
          )}
      </div>
    );
  }
}

export default PlansView;
