import "./index.scss";

import Button from "components/Button";
import React from "react";

class FormView extends React.Component {
  state = {
    name: "",
    birthDay: "",
    document: "",
    job: "",
    revenue: "",
    gender: "",
    estate: ""
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleBirthDayChange = e => {
    this.setState({ birthDay: e.target.value });
  };
  handleDocumentChange = e => {
    this.setState({ document: e.target.value });
  };
  handleJobChange = e => {
    this.setState({ job: e.target.value });
  };
  handleRevenueChange = e => {
    this.setState({ revenue: e.target.value });
  };
  handleGenderChange = e => {
    this.setState({ gender: e.target.value });
  };
  handleEstateChange = e => {
    this.setState({ estate: e.target.value });
  };

  handleFormSubmit = e => {
    const { state } = this;
    e.preventDefault();
    this.props.searchPlansByData(state);
    this.props.history.push('/me/mkt/plans')
  };

  render() {
    const {
      handleNameChange,
      handleBirthDayChange,
      handleDocumentChange,
      handleJobChange,
      handleRevenueChange,
      handleGenderChange,
      handleEstateChange,
      handleFormSubmit,
      state: { name, birthDay, document, job, revenue, gender, estate }
    } = this;
    return (
      <form className="form-view" onSubmit={handleFormSubmit}>
        <h3>
          Preencha suas informações para buscarmos o melhor plano para você!
        </h3>

        <div className="form-view__row">
          <input
            type="name"
            name="name"
            placeholder="Nome"
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            type="date"
            name="birthDay"
            placeholder="Data de Nascimento"
            value={birthDay}
            onChange={handleBirthDayChange}
            required
          />
        </div>
        <div className="form-view__row">
          <input
            type="text"
            name="document"
            placeholder="CPF"
            value={document}
            onChange={handleDocumentChange}
            required
          />
        </div>
        <div className="form-view__row">
          <select name="job" value={job} onChange={handleJobChange} required>
            <option>Selecione sua profissão</option>
          </select>
        </div>
        <div className="form-view__row">
          <input
            type="text"
            name="revenue"
            placeholder="Renda mensal"
            value={revenue}
            onChange={handleRevenueChange}
            required
          />
          <select name="gender" value={gender} onChange={handleGenderChange} required>
            <option>Selecione seu gênero</option>
            <option value="0">Masculino</option>
            <option value="1">Feminino</option>
          </select>
        </div>
        <div className="form-view__row">
          <select name="estate" value={estate} onChange={handleEstateChange} required>
            <option>UF</option>
            <option value="sp">SP</option>
          </select>
        </div>

        <div className="form-view__row">
          <Button type="submit" color="full-primary">
            Enviar
          </Button>
        </div>
      </form>
    );
  }
}

export default FormView;
