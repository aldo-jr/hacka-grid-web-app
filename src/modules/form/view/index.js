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
    this.props.history.push("/me/mkt/plans");
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
          />
          <input
            type="date"
            name="birthDay"
            placeholder="Data de Nascimento"
            value={birthDay}
            onChange={handleBirthDayChange}
          />
        </div>
        <div className="form-view__row">
          <input
            type="text"
            name="document"
            placeholder="CPF"
            value={document}
            onChange={handleDocumentChange}
          />
        </div>
        <div className="form-view__row">
          <select name="job" value={job} onChange={handleJobChange}>
            <option>Selecione sua profissão</option>
            <option value="1">1</option>
            <option value="Brasileiro de Ocupação (CBO)">
              Brasileiro de Ocupação (CBO)
            </option>
            <option value="Ocupação">Ocupação</option>
            <option value="Abatedor">Abatedor</option>
            <option value="Acabador de calçados">Acabador de calçados</option>
            <option value="Acabador de embalagens (flexíveis e cartotécnicas)">
              Acabador de embalagens (flexíveis e cartotécnicas)
            </option>
            <option value="Acabador de superfícies de concreto">
              Acabador de superfícies de concreto
            </option>
            <option value="Acrobata">Acrobata</option>
            <option value="Adestrador de animais">Adestrador de animais</option>
            <option value="Administrador">Administrador</option>
            <option value="Administrador de banco de dados">
              Administrador de banco de dados
            </option>
            <option value="Administrador de edifícios">
              Administrador de edifícios
            </option>
            <option value="Administrador de fundos e carteiras de investimento">
              Administrador de fundos e carteiras de investimento
            </option>
            <option value="Administrador de redes">
              Administrador de redes
            </option>
            <option value="Administrador de sistemas operacionais">
              Administrador de sistemas operacionais
            </option>
            <option value="Administrador em segurança da informação">
              Administrador em segurança da informação
            </option>
            <option value="Advogado">Advogado</option>
            <option value="Advogado (direito civil)">
              Advogado (direito civil)
            </option>
            <option value="Advogado (direito do trabalho)">
              Advogado (direito do trabalho)
            </option>
            <option value="Advogado (direito penal)">
              Advogado (direito penal)
            </option>
            <option value="Advogado (direito público)">
              Advogado (direito público)
            </option>
            <option value="Advogado (áreas especiais)">
              Advogado (áreas especiais)
            </option>
            <option value="Advogado da união">Advogado da união</option>
            <option value="Advogado de empresa">Advogado de empresa</option>
            <option value="Afiador de cardas">Afiador de cardas</option>
            <option value="Afiador de cutelaria">Afiador de cutelaria</option>
            <option value="Afiador de ferramentas">
              Afiador de ferramentas
            </option>
            <option value="Afiador de serras">Afiador de serras</option>
            <option value="Afinador de instrumentos musicais">
              Afinador de instrumentos musicais
            </option>
            <option value="Afretador">Afretador</option>
            <option value="Agenciador de propaganda">
              Agenciador de propaganda
            </option>
            <option value="Agente comunitário de saúde">
              Agente comunitário de saúde
            </option>
            <option value="Agente de ação social">Agente de ação social</option>
            <option value="Agente de defesa ambiental">
              Agente de defesa ambiental
            </option>
            <option value="Agente de direitos autorais">
              Agente de direitos autorais
            </option>
            <option value="Agente de estação (ferrovia e metrô)">
              Agente de estação (ferrovia e metrô)
            </option>
            <option value="Agente de higiene e segurança">
              Agente de higiene e segurança
            </option>
            <option value="Agente de inteligência">
              Agente de inteligência
            </option>
            <option value="Agente de manobra e docagem">
              Agente de manobra e docagem
            </option>
            <option value="Agente de microcrédito">
              Agente de microcrédito
            </option>
            <option value="Agente de polícia federal">
              Agente de polícia federal
            </option>
            <option value="Agente de proteção de aeroporto">
              Agente de proteção de aeroporto
            </option>
            <option value="Agente de proteção de aviação civil">
              Agente de proteção de aviação civil
            </option>
            <option value="Agente de pátio">Agente de pátio</option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="2">2</option>
            <option value="Agente de recrutamento e seleção">
              Agente de recrutamento e seleção
            </option>
            <option value="Agente de saúde pública">
              Agente de saúde pública
            </option>
            <option value="Agente de segurança">Agente de segurança</option>
            <option value="Agente de segurança penitenciária">
              Agente de segurança penitenciária
            </option>
            <option value="Agente de trânsito">Agente de trânsito</option>
            <option value="Agente de vendas de serviços">
              Agente de vendas de serviços
            </option>
            <option value="Agente de viagem">Agente de viagem</option>
            <option value="Agente fiscal de qualidade">
              Agente fiscal de qualidade
            </option>
            <option value="Agente fiscal metrológico">
              Agente fiscal metrológico
            </option>
            <option value="Agente fiscal têxtil">Agente fiscal têxtil</option>
            <option value="Agente funerário">Agente funerário</option>
            <option value="Agente indígena de saneamento">
              Agente indígena de saneamento
            </option>
            <option value="Agente indígena de saúde">
              Agente indígena de saúde
            </option>
            <option value="Agente publicitário">Agente publicitário</option>
            <option value="Agente técnico de inteligência">
              Agente técnico de inteligência
            </option>
            <option value="Ajudante de carvoaria">Ajudante de carvoaria</option>
            <option value="Ajudante de confecção">Ajudante de confecção</option>
            <option value="Ajudante de despachante aduaneiro">
              Ajudante de despachante aduaneiro
            </option>
            <option value="Ajudante de motorista">Ajudante de motorista</option>
            <option value="Ajustador de instrumentos de precisão">
              Ajustador de instrumentos de precisão
            </option>
            <option value="Ajustador ferramenteiro">
              Ajustador ferramenteiro
            </option>
            <option value="Ajustador mecânico">Ajustador mecânico</option>
            <option value="Ajustador mecânico (usinagem em bancada e em máquinas-ferramentas)">
              Ajustador mecânico (usinagem em bancada e em máquinas-ferramentas)
            </option>
            <option value="Ajustador mecânico em bancada">
              Ajustador mecânico em bancada
            </option>
            <option value="Ajustador naval (reparo e construção)">
              Ajustador naval (reparo e construção)
            </option>
            <option value="Alambiqueiro">Alambiqueiro</option>
            <option value="Alfaiate">Alfaiate</option>
            <option value="Alimentador de linha de produção">
              Alimentador de linha de produção
            </option>
            <option value="Alinhador de pneus">Alinhador de pneus</option>
            <option value="Almoxarife">Almoxarife</option>
            <option value="Alvejador (tecidos)">Alvejador (tecidos)</option>
            <option value="Amostrador de minérios">
              Amostrador de minérios
            </option>
            <option value="Analista de cobrança (instituições financeiras)">
              Analista de cobrança (instituições financeiras)
            </option>
            <option value="Analista de crédito (instituições financeiras)">
              Analista de crédito (instituições financeiras)
            </option>
            <option value="Analista de crédito rural">
              Analista de crédito rural
            </option>
            <option value="Analista de câmbio">Analista de câmbio</option>
            <option value="Analista de desenvolvimento de sistemas">
              Analista de desenvolvimento de sistemas
            </option>
            <option value="Analista de exportação e importação">
              Analista de exportação e importação
            </option>
            <option value="Analista de folha de pagamento">
              Analista de folha de pagamento
            </option>
            <option value="Analista de informações (pesquisador de informações de rede)">
              Analista de informações (pesquisador de informações de rede)
            </option>
            <option value="Analista de leasing">Analista de leasing</option>
            <option value="Analista de negócios">Analista de negócios</option>
            <option value="Analista de pesquisa de mercado">
              Analista de pesquisa de mercado
            </option>
            <option value="Analista de planejamento e orçamento - APO">
              Analista de planejamento e orçamento - APO
            </option>
            <option value="Analista de produtos bancários">
              Analista de produtos bancários
            </option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="3">3</option>
            <option value="Analista de recursos humanos">
              Analista de recursos humanos
            </option>
            <option value="Analista de redes e de comunicação de dados">
              Analista de redes e de comunicação de dados
            </option>
            <option value="Analista de seguros (técnico)">
              Analista de seguros (técnico)
            </option>
            <option value="Analista de sinistros">Analista de sinistros</option>
            <option value="Analista de sistemas de automação">
              Analista de sistemas de automação
            </option>
            <option value="Analista de suporte computacional">
              Analista de suporte computacional
            </option>
            <option value="Analista de transporte em comércio exterior">
              Analista de transporte em comércio exterior
            </option>
            <option value="Analista financeiro (instituições financeiras)">
              Analista financeiro (instituições financeiras)
            </option>
            <option value="Ancora de rádio e televisão">
              Ancora de rádio e televisão
            </option>
            <option value="Antropólogo">Antropólogo</option>
            <option value="Apicultor">Apicultor</option>
            <option value="Aplicador de asfalto impermeabilizante (coberturas)">
              Aplicador de asfalto impermeabilizante (coberturas)
            </option>
            <option value="Aplicador serigráfico em vidros">
              Aplicador serigráfico em vidros
            </option>
            <option value="Apontador de mão-de-obra">
              Apontador de mão-de-obra
            </option>
            <option value="Apontador de produção">Apontador de produção</option>
            <option value="Apresentador de circo">Apresentador de circo</option>
            <option value="Apresentador de eventos">
              Apresentador de eventos
            </option>
            <option value="Apresentador de festas populares">
              Apresentador de festas populares
            </option>
            <option value="Apresentador de programas de rádio">
              Apresentador de programas de rádio
            </option>
            <option value="Apresentador de programas de televisão">
              Apresentador de programas de televisão
            </option>
            <option value="Arbitro de atletismo">Arbitro de atletismo</option>
            <option value="Arbitro de basquete">Arbitro de basquete</option>
            <option value="Arbitro de futebol">Arbitro de futebol</option>
            <option value="Arbitro de futebol de salão">
              Arbitro de futebol de salão
            </option>
            <option value="Arbitro de judô">Arbitro de judô</option>
            <option value="Arbitro de karatê">Arbitro de karatê</option>
            <option value="Arbitro de poló aquático">
              Arbitro de poló aquático
            </option>
            <option value="Arbitro de vôlei">Arbitro de vôlei</option>
            <option value="Arbitro desportivo">Arbitro desportivo</option>
            <option value="Armador de estrutura de concreto">
              Armador de estrutura de concreto
            </option>
            <option value="Armador de estrutura de concreto armado">
              Armador de estrutura de concreto armado
            </option>
            <option value="Armazenista">Armazenista</option>
            <option value="Aromista">Aromista</option>
            <option value="Arqueólogo">Arqueólogo</option>
            <option value="Arquiteto de edificações">
              Arquiteto de edificações
            </option>
            <option value="Arquiteto de interiores">
              Arquiteto de interiores
            </option>
            <option value="Arquiteto de patrimônio">
              Arquiteto de patrimônio
            </option>
            <option value="Arquiteto paisagista">Arquiteto paisagista</option>
            <option value="Arquiteto urbanista">Arquiteto urbanista</option>
            <option value="Arquivista">Arquivista</option>
            <option value="Arquivista de documentos">
              Arquivista de documentos
            </option>
            <option value="Arquivista pesquisador (jornalismo)">
              Arquivista pesquisador (jornalismo)
            </option>
            <option value="Arrematadeira">Arrematadeira</option>
            <option value="Artesão bordador">Artesão bordador</option>
            <option value="Artesão ceramista">Artesão ceramista</option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="4">4</option>
            <option value="Artesão com material reciclável">
              Artesão com material reciclável
            </option>
            <option value="Artesão confeccionador de biojóias e ecojóias">
              Artesão confeccionador de biojóias e ecojóias
            </option>
            <option value="Artesão crocheteiro">Artesão crocheteiro</option>
            <option value="Artesão do couro">Artesão do couro</option>
            <option value="Artesão escultor">Artesão escultor</option>
            <option value="Artesão modelador (vidros)">
              Artesão modelador (vidros)
            </option>
            <option value="Artesão moveleiro (exceto reciclado)">
              Artesão moveleiro (exceto reciclado)
            </option>
            <option value="Artesão rendeiro">Artesão rendeiro</option>
            <option value="Artesão tecelão">Artesão tecelão</option>
            <option value="Artesão trançador">Artesão trançador</option>
            <option value="Artesão tricoteiro">Artesão tricoteiro</option>
            <option value="Arteterapeuta">Arteterapeuta</option>
            <option value="Artista (artes visuais)">
              Artista (artes visuais)
            </option>
            <option value="Artista aéreo">Artista aéreo</option>
            <option value="Artista de circo (outros)">
              Artista de circo (outros)
            </option>
            <option value="Artífice do couro">Artífice do couro</option>
            <option value="Ascensorista">Ascensorista</option>
            <option value="Assentador de canalização (edificações)">
              Assentador de canalização (edificações)
            </option>
            <option value="Assessor de imprensa">Assessor de imprensa</option>
            <option value="Assistente administrativo">
              Assistente administrativo
            </option>
            <option value="Assistente comercial de seguros">
              Assistente comercial de seguros
            </option>
            <option value="Assistente de coreografia">
              Assistente de coreografia
            </option>
            <option value="Assistente de laboratório industrial">
              Assistente de laboratório industrial
            </option>
            <option value="Assistente de vendas">Assistente de vendas</option>
            <option value="Assistente social">Assistente social</option>
            <option value="Assistente técnico de seguros">
              Assistente técnico de seguros
            </option>
            <option value="Assoalhador">Assoalhador</option>
            <option value="Astrólogo">Astrólogo</option>
            <option value="Astrônomo">Astrônomo</option>
            <option value="Atendente comercial (agência postal)">
              Atendente comercial (agência postal)
            </option>
            <option value="Atendente de agência">Atendente de agência</option>
            <option value="Atendente de enfermagem">
              Atendente de enfermagem
            </option>
            <option value="Atendente de farmácia - balconista">
              Atendente de farmácia - balconista
            </option>
            <option value="Atendente de judiciário">
              Atendente de judiciário
            </option>
            <option value="Atendente de lanchonete">
              Atendente de lanchonete
            </option>
            <option value="Atendente de lavanderia">
              Atendente de lavanderia
            </option>
            <option value="Atleta profissional (outras modalidades)">
              Atleta profissional (outras modalidades)
            </option>
            <option value="Atleta profissional de futebol">
              Atleta profissional de futebol
            </option>
            <option value="Atleta profissional de golfe">
              Atleta profissional de golfe
            </option>
            <option value="Atleta profissional de luta">
              Atleta profissional de luta
            </option>
            <option value="Atleta profissional de tênis">
              Atleta profissional de tênis
            </option>
            <option value="Ator">Ator</option>
            <option value="Atuário">Atuário</option>
            <option value="Auditor (contadores e afins)">
              Auditor (contadores e afins)
            </option>
            <option value="Auditor-fiscal da previdência social">
              Auditor-fiscal da previdência social
            </option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="5">5</option>
            <option value="Auditor-fiscal da Receita Federal">
              Auditor-fiscal da Receita Federal
            </option>
            <option value="Auditor-fiscal do trabalho">
              Auditor-fiscal do trabalho
            </option>
            <option value="Autor-roteirista">Autor-roteirista</option>
            <option value="Auxiliar de banco de sangue">
              Auxiliar de banco de sangue
            </option>
            <option value="Auxiliar de biblioteca">
              Auxiliar de biblioteca
            </option>
            <option value="Auxiliar de cartório">Auxiliar de cartório</option>
            <option value="Auxiliar de contabilidade">
              Auxiliar de contabilidade
            </option>
            <option value="Auxiliar de corte (preparação da confecção de roupas)">
              Auxiliar de corte (preparação da confecção de roupas)
            </option>
            <option value="Auxiliar de desenvolvimento infantil">
              Auxiliar de desenvolvimento infantil
            </option>
            <option value="Auxiliar de enfermagem">
              Auxiliar de enfermagem
            </option>
            <option value="Auxiliar de enfermagem da estratégia de saúde da família">
              Auxiliar de enfermagem da estratégia de saúde da família
            </option>
            <option value="Auxiliar de enfermagem do trabalho">
              Auxiliar de enfermagem do trabalho
            </option>
            <option value="Auxiliar de escritório">
              Auxiliar de escritório
            </option>
            <option value="Auxiliar de estatística">
              Auxiliar de estatística
            </option>
            <option value="Auxiliar de farmácia de manipulação">
              Auxiliar de farmácia de manipulação
            </option>
            <option value="Auxiliar de faturamento">
              Auxiliar de faturamento
            </option>
            <option value="Auxiliar de judiciário">
              Auxiliar de judiciário
            </option>
            <option value="Auxiliar de laboratório de análises clínicas">
              Auxiliar de laboratório de análises clínicas
            </option>
            <option value="Auxiliar de laboratório de análises físico-químicas">
              Auxiliar de laboratório de análises físico-químicas
            </option>
            <option value="Auxiliar de laboratório de imunobiológicos">
              Auxiliar de laboratório de imunobiológicos
            </option>
            <option value="Auxiliar de lavanderia">
              Auxiliar de lavanderia
            </option>
            <option value="Auxiliar de manutenção predial">
              Auxiliar de manutenção predial
            </option>
            <option value="Auxiliar de maquinista de trem">
              Auxiliar de maquinista de trem
            </option>
            <option value="Auxiliar de pessoal">Auxiliar de pessoal</option>
            <option value="Auxiliar de processamento de fumo">
              Auxiliar de processamento de fumo
            </option>
            <option value="Auxiliar de produção farmacêutica">
              Auxiliar de produção farmacêutica
            </option>
            <option value="Auxiliar de prótese dentária">
              Auxiliar de prótese dentária
            </option>
            <option value="Auxiliar de radiologia (revelação fotográfica)">
              Auxiliar de radiologia (revelação fotográfica)
            </option>
            <option value="Auxiliar de saúde (navegação marítima)">
              Auxiliar de saúde (navegação marítima)
            </option>
            <option value="Auxiliar de seguros">Auxiliar de seguros</option>
            <option value="Auxiliar de serviços de importação e exportação">
              Auxiliar de serviços de importação e exportação
            </option>
            <option value="Auxiliar de serviços jurídicos">
              Auxiliar de serviços jurídicos
            </option>
            <option value="Auxiliar de veterinário">
              Auxiliar de veterinário
            </option>
            <option value="Auxiliar em saúde bucal">
              Auxiliar em saúde bucal
            </option>
            <option value="Auxiliar em saúde bucal da estratégia de saúde da família">
              Auxiliar em saúde bucal da estratégia de saúde da família
            </option>
            <option value="Auxiliar geral de conservação de vias permanentes (exceto trilhos)">
              Auxiliar geral de conservação de vias permanentes (exceto trilhos)
            </option>
            <option value="Auxiliar nos serviços de alimentação">
              Auxiliar nos serviços de alimentação
            </option>
            <option value="Auxiliar técnico em laboratório de farmácia">
              Auxiliar técnico em laboratório de farmácia
            </option>
            <option value="Auxiliar técnico em patologia clínica">
              Auxiliar técnico em patologia clínica
            </option>
            <option value="Avaliador de bens móveis">
              Avaliador de bens móveis
            </option>
            <option value="Avaliador de imóveis">Avaliador de imóveis</option>
            <option value="Avaliador de produtos do meio de comunicação">
              Avaliador de produtos do meio de comunicação
            </option>
            <option value="Avaliador físico">Avaliador físico</option>
            <option value="Avicultor">Avicultor</option>
            <option value="Açougueiro">Açougueiro</option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="6">6</option>
            <option value="Babá">Babá</option>
            <option value="Bailarino (exceto danças populares)">
              Bailarino (exceto danças populares)
            </option>
            <option value="Balanceador">Balanceador</option>
            <option value="Balanceiro">Balanceiro</option>
            <option value="Bamburista">Bamburista</option>
            <option value="Banhista de animais domésticos">
              Banhista de animais domésticos
            </option>
            <option value="Barbeiro">Barbeiro</option>
            <option value="Barista">Barista</option>
            <option value="Barman">Barman</option>
            <option value="Bate-folha a máquina">Bate-folha a máquina</option>
            <option value="Bibliotecário">Bibliotecário</option>
            <option value="Bilheteiro (estações de metrô">
              Bilheteiro (estações de metrô
            </option>
            <option value="Bilheteiro de transportes coletivos">
              Bilheteiro de transportes coletivos
            </option>
            <option value="Bilheteiro no serviço de diversões">
              Bilheteiro no serviço de diversões
            </option>
            <option value="Bioengenheiro">Bioengenheiro</option>
            <option value="Biomédico">Biomédico</option>
            <option value="Biotecnologista">Biotecnologista</option>
            <option value="Biólogo">Biólogo</option>
            <option value="Bloqueiro (trabalhador portuário)">
              Bloqueiro (trabalhador portuário)
            </option>
            <option value="Bobinador eletricista">Bobinador eletricista</option>
            <option value="Bobinador eletricista">Bobinador eletricista</option>
            <option value="Boiadeiro">Boiadeiro</option>
            <option value="Bombeiro de aeródromo">Bombeiro de aeródromo</option>
            <option value="Bombeiro de segurança do trabalho">
              Bombeiro de segurança do trabalho
            </option>
            <option value="Boneleiro">Boneleiro</option>
            <option value="Bordador">Bordador</option>
            <option value="Bordador">Bordador</option>
            <option value="Borracheiro">Borracheiro</option>
            <option value="Brasador">Brasador</option>
            <option value="Cabeleireiro">Cabeleireiro</option>
            <option value="Cableador">Cableador</option>
            <option value="Cabo Bombeiro Militar">Cabo Bombeiro Militar</option>
            <option value="Cabo da Polícia Militar">
              Cabo da Polícia Militar
            </option>
            <option value="Cacique">Cacique</option>
            <option value="Cafeicultor">Cafeicultor</option>
            <option value="Caixa de banco">Caixa de banco</option>
            <option value="Calafetador">Calafetador</option>
            <option value="Calandrista de borracha">
              Calandrista de borracha
            </option>
            <option value="Calandrista de papel">Calandrista de papel</option>
            <option value="Calceteiro">Calceteiro</option>
            <option value="Caldeireiro (chapas de cobre)">
              Caldeireiro (chapas de cobre)
            </option>
            <option value="Caldeireiro (chapas de ferro e aço)">
              Caldeireiro (chapas de ferro e aço)
            </option>
            <option value="Camareira de teatro">Camareira de teatro</option>
            <option value="Camareira de televisão">
              Camareira de televisão
            </option>
            <option value="Camareiro de embarcações">
              Camareiro de embarcações
            </option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="7">7</option>
            <option value="Camareiro de hotel">Camareiro de hotel</option>
            <option value="Caminhoneiro autônomo (rotas regionais e internacionais)">
              Caminhoneiro autônomo (rotas regionais e internacionais)
            </option>
            <option value="Canteiro">Canteiro</option>
            <option value="Capitão Bombeiro Militar">
              Capitão Bombeiro Militar
            </option>
            <option value="Capitão da Polícia Militar">
              Capitão da Polícia Militar
            </option>
            <option value="Capitão de manobra da Marinha Mercante">
              Capitão de manobra da Marinha Mercante
            </option>
            <option value="Carbonizador">Carbonizador</option>
            <option value="Carpinteiro">Carpinteiro</option>
            <option value="Carpinteiro (cenários)">
              Carpinteiro (cenários)
            </option>
            <option value="Carpinteiro (esquadrias)">
              Carpinteiro (esquadrias)
            </option>
            <option value="Carpinteiro (mineração)">
              Carpinteiro (mineração)
            </option>
            <option value="Carpinteiro (telhados)">
              Carpinteiro (telhados)
            </option>
            <option value="Carpinteiro de carretas">
              Carpinteiro de carretas
            </option>
            <option value="Carpinteiro de carrocerias">
              Carpinteiro de carrocerias
            </option>
            <option value="Carpinteiro de fôrmas para concreto">
              Carpinteiro de fôrmas para concreto
            </option>
            <option value="Carpinteiro de obras">Carpinteiro de obras</option>
            <option value="Carpinteiro de obras civis de arte (pontes">
              Carpinteiro de obras civis de arte (pontes
            </option>
            <option value="Carpinteiro naval (construção de pequenas embarcações)">
              Carpinteiro naval (construção de pequenas embarcações)
            </option>
            <option value="Carpinteiro naval (embarcações)">
              Carpinteiro naval (embarcações)
            </option>
            <option value="Carpinteiro naval (estaleiros)">
              Carpinteiro naval (estaleiros)
            </option>
            <option value="Carregador (aeronaves)">
              Carregador (aeronaves)
            </option>
            <option value="Carregador (armazém)">Carregador (armazém)</option>
            <option value="Carregador (veículos de transportes terrestres)">
              Carregador (veículos de transportes terrestres)
            </option>
            <option value="Cartazeiro">Cartazeiro</option>
            <option value="Carteiro">Carteiro</option>
            <option value="Cartonageiro">Cartonageiro</option>
            <option value="Cartonageiro">Cartonageiro</option>
            <option value="Carvoeiro">Carvoeiro</option>
            <option value="Caseiro (agricultura)">Caseiro (agricultura)</option>
            <option value="Catador de caranguejos e siris">
              Catador de caranguejos e siris
            </option>
            <option value="Catador de mariscos">Catador de mariscos</option>
            <option value="Catador de material reciclável">
              Catador de material reciclável
            </option>
            <option value="Celofanista na fabricação de charutos">
              Celofanista na fabricação de charutos
            </option>
            <option value="Cementador de metais">Cementador de metais</option>
            <option value="Cenotécnico (cinema">Cenotécnico (cinema</option>
            <option value="Cenógrafo carnavalesco e festas populares">
              Cenógrafo carnavalesco e festas populares
            </option>
            <option value="Cenógrafo de cinema">Cenógrafo de cinema</option>
            <option value="Cenógrafo de eventos">Cenógrafo de eventos</option>
            <option value="Cenógrafo de teatro">Cenógrafo de teatro</option>
            <option value="Cenógrafo de TV">Cenógrafo de TV</option>
            <option value="Ceramista">Ceramista</option>
            <option value="Ceramista (torno de pedal e motor)">
              Ceramista (torno de pedal e motor)
            </option>
            <option value="Ceramista (torno semi-automático)">
              Ceramista (torno semi-automático)
            </option>
            <option value="Ceramista modelador">Ceramista modelador</option>
            <option value="Ceramista moldador">Ceramista moldador</option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="8">8</option>
            <option value="Ceramista prensador">Ceramista prensador</option>
            <option value="Cerzidor">Cerzidor</option>
            <option value="Cesteiro">Cesteiro</option>
            <option value="Chapeador">Chapeador</option>
            <option value="Chapeador de aeronaves">
              Chapeador de aeronaves
            </option>
            <option value="Chapeador de carrocerias metálicas (fabricação)">
              Chapeador de carrocerias metálicas (fabricação)
            </option>
            <option value="Chapeador naval">Chapeador naval</option>
            <option value="Chapeleiro (chapéus de palha)">
              Chapeleiro (chapéus de palha)
            </option>
            <option value="Chapeleiro de senhoras">
              Chapeleiro de senhoras
            </option>
            <option value="Charuteiro a mão">Charuteiro a mão</option>
            <option value="Chaveiro">Chaveiro</option>
            <option value="Chefe de bar">Chefe de bar</option>
            <option value="Chefe de confeitaria">Chefe de confeitaria</option>
            <option value="Chefe de contabilidade (técnico)">
              Chefe de contabilidade (técnico)
            </option>
            <option value="Chefe de cozinha">Chefe de cozinha</option>
            <option value="Chefe de estação portuária">
              Chefe de estação portuária
            </option>
            <option value="Chefe de portaria de hotel">
              Chefe de portaria de hotel
            </option>
            <option value="Chefe de serviço de transporte rodoviário (passageiros e cargas)">
              Chefe de serviço de transporte rodoviário (passageiros e cargas)
            </option>
            <option value="Chefe de serviços bancários">
              Chefe de serviços bancários
            </option>
            <option value="Churrasqueiro">Churrasqueiro</option>
            <option value="Ciclista mensageiro">Ciclista mensageiro</option>
            <option value="Cientista político">Cientista político</option>
            <option value="Cilindreiro na preparação de pasta para fabricação de papel">
              Cilindreiro na preparação de pasta para fabricação de papel
            </option>
            <option value="Cilindrista (petroquímica e afins)">
              Cilindrista (petroquímica e afins)
            </option>
            <option value="Cimentador (poços de petróleo)">
              Cimentador (poços de petróleo)
            </option>
            <option value="Cirurgião dentista - auditor">
              Cirurgião dentista - auditor
            </option>
            <option value="Cirurgião dentista - clínico geral">
              Cirurgião dentista - clínico geral
            </option>
            <option value="Cirurgião dentista - dentística">
              Cirurgião dentista - dentística
            </option>
            <option value="Cirurgião dentista - disfunção temporomandibular e dor orofacial">
              Cirurgião dentista - disfunção temporomandibular e dor orofacial
            </option>
            <option value="Cirurgião dentista - endodontista">
              Cirurgião dentista - endodontista
            </option>
            <option value="Cirurgião dentista - epidemiologista">
              Cirurgião dentista - epidemiologista
            </option>
            <option value="Cirurgião dentista - estomatologista">
              Cirurgião dentista - estomatologista
            </option>
            <option value="Cirurgião dentista - implantodontista">
              Cirurgião dentista - implantodontista
            </option>
            <option value="Cirurgião dentista - odontogeriatra">
              Cirurgião dentista - odontogeriatra
            </option>
            <option value="Cirurgião dentista - odontologia do trabalho">
              Cirurgião dentista - odontologia do trabalho
            </option>
            <option value="Cirurgião dentista - odontologia para pacientes com necessidades especiais">
              Cirurgião dentista - odontologia para pacientes com necessidades
              especiais
            </option>
            <option value="Cirurgião dentista - odontologista legal">
              Cirurgião dentista - odontologista legal
            </option>
            <option value="Cirurgião dentista - odontopediatra">
              Cirurgião dentista - odontopediatra
            </option>
            <option value="Cirurgião dentista - ortopedista e ortodontista">
              Cirurgião dentista - ortopedista e ortodontista
            </option>
            <option value="Cirurgião dentista - patologista bucal">
              Cirurgião dentista - patologista bucal
            </option>
            <option value="Cirurgião dentista - periodontista">
              Cirurgião dentista - periodontista
            </option>
            <option value="Cirurgião dentista - protesista">
              Cirurgião dentista - protesista
            </option>
            <option value="Cirurgião dentista - protesiólogo bucomaxilofacial">
              Cirurgião dentista - protesiólogo bucomaxilofacial
            </option>
            <option value="Cirurgião dentista - radiologista">
              Cirurgião dentista - radiologista
            </option>
            <option value="Cirurgião dentista - reabilitador oral">
              Cirurgião dentista - reabilitador oral
            </option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="9">9</option>
            <option value="Cirurgião dentista - traumatologista bucomaxilofacial">
              Cirurgião dentista - traumatologista bucomaxilofacial
            </option>
            <option value="Cirurgião dentista de saúde coletiva">
              Cirurgião dentista de saúde coletiva
            </option>
            <option value="Cirurgião-dentista da estratégia de saúde da família">
              Cirurgião-dentista da estratégia de saúde da família
            </option>
            <option value="Classificador de charutos">
              Classificador de charutos
            </option>
            <option value="Classificador de couros">
              Classificador de couros
            </option>
            <option value="Classificador de fibras têxteis">
              Classificador de fibras têxteis
            </option>
            <option value="Classificador de fumo">Classificador de fumo</option>
            <option value="Classificador de grãos">
              Classificador de grãos
            </option>
            <option value="Classificador de madeira">
              Classificador de madeira
            </option>
            <option value="Classificador de peles">
              Classificador de peles
            </option>
            <option value="Classificador de toras">
              Classificador de toras
            </option>
            <option value="Classificador e empilhador de tijolos refratários">
              Classificador e empilhador de tijolos refratários
            </option>
            <option value="Cobrador de transportes coletivos (exceto trem)">
              Cobrador de transportes coletivos (exceto trem)
            </option>
            <option value="Cobrador externo">Cobrador externo</option>
            <option value="Cobrador interno">Cobrador interno</option>
            <option value="Codificador de dados">Codificador de dados</option>
            <option value="Colchoeiro (confecção de colchoes)">
              Colchoeiro (confecção de colchoes)
            </option>
            <option value="Colecionador de selos e moedas">
              Colecionador de selos e moedas
            </option>
            <option value="Coletor de lixo domiciliar">
              Coletor de lixo domiciliar
            </option>
            <option value="Coletor de resíduos sólidos de serviços de saúde">
              Coletor de resíduos sólidos de serviços de saúde
            </option>
            <option value="Colorista de papel">Colorista de papel</option>
            <option value="Colorista têxtil">Colorista têxtil</option>
            <option value="Comandante da Marinha Mercante">
              Comandante da Marinha Mercante
            </option>
            <option value="Comentarista de rádio e televisão">
              Comentarista de rádio e televisão
            </option>
            <option value="Comerciante atacadista">
              Comerciante atacadista
            </option>
            <option value="Comerciante varejista">Comerciante varejista</option>
            <option value="Comissário de trem">Comissário de trem</option>
            <option value="Comissário de vôo">Comissário de vôo</option>
            <option value="Compensador de banco">Compensador de banco</option>
            <option value="Compositor">Compositor</option>
            <option value="Comprador">Comprador</option>
            <option value="Condutor de processos robotizados de pintura">
              Condutor de processos robotizados de pintura
            </option>
            <option value="Condutor de processos robotizados de soldagem">
              Condutor de processos robotizados de soldagem
            </option>
            <option value="Condutor de veículos a pedais">
              Condutor de veículos a pedais
            </option>
            <option value="Condutor de veículos de tração animal (ruas e estradas)">
              Condutor de veículos de tração animal (ruas e estradas)
            </option>
            <option value="Condutor maquinista fluvial">
              Condutor maquinista fluvial
            </option>
            <option value="Condutor maquinista marítimo">
              Condutor maquinista marítimo
            </option>
            <option value="Confeccionador de acordeão">
              Confeccionador de acordeão
            </option>
            <option value="Confeccionador de artefatos de couro (exceto sapatos)">
              Confeccionador de artefatos de couro (exceto sapatos)
            </option>
            <option value="Confeccionador de bolsas">
              Confeccionador de bolsas
            </option>
            <option value="Confeccionador de brinquedos de pano">
              Confeccionador de brinquedos de pano
            </option>
            <option value="Confeccionador de carimbos de borracha">
              Confeccionador de carimbos de borracha
            </option>
            <option value="Confeccionador de escovas">
              Confeccionador de escovas
            </option>
            <option value="Confeccionador de escovas">
              Confeccionador de escovas
            </option>
            <option value="Confeccionador de instrumentos de corda">
              Confeccionador de instrumentos de corda
            </option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="10">10</option>
            <option value="Confeccionador de instrumentos de percussão (pele">
              Confeccionador de instrumentos de percussão (pele
            </option>
            <option value="Confeccionador de instrumentos de sopro (madeira)">
              Confeccionador de instrumentos de sopro (madeira)
            </option>
            <option value="Confeccionador de instrumentos de sopro (metal)">
              Confeccionador de instrumentos de sopro (metal)
            </option>
            <option value="Confeccionador de móveis de vime">
              Confeccionador de móveis de vime
            </option>
            <option value="Confeccionador de orgão">
              Confeccionador de orgão
            </option>
            <option value="Confeccionador de piano">
              Confeccionador de piano
            </option>
            <option value="Confeccionador de pneumáticos">
              Confeccionador de pneumáticos
            </option>
            <option value="Confeccionador de sacos de celofane">
              Confeccionador de sacos de celofane
            </option>
            <option value="Confeccionador de velas náuticas">
              Confeccionador de velas náuticas
            </option>
            <option value="Confeccionador de velas por imersão">
              Confeccionador de velas por imersão
            </option>
            <option value="Confeccionador de velas por moldagem">
              Confeccionador de velas por moldagem
            </option>
            <option value="Confeiteiro">Confeiteiro</option>
            <option value="Conferente de carga e descarga">
              Conferente de carga e descarga
            </option>
            <option value="Conferente de serviços bancários">
              Conferente de serviços bancários
            </option>
            <option value="Conferente-expedidor de roupas (lavanderias)">
              Conferente-expedidor de roupas (lavanderias)
            </option>
            <option value="Conselheiro tutelar">Conselheiro tutelar</option>
            <option value="Conservador de via permanente (trilhos)">
              Conservador de via permanente (trilhos)
            </option>
            <option value="Conservador-restaurador de bens culturais">
              Conservador-restaurador de bens culturais
            </option>
            <option value="Consultor contábil (técnico)">
              Consultor contábil (técnico)
            </option>
            <option value="Consultor jurídico">Consultor jurídico</option>
            <option value="Contador">Contador</option>
            <option value="Contorcionista">Contorcionista</option>
            <option value="Contramestre de acabamento (indústria têxtil)">
              Contramestre de acabamento (indústria têxtil)
            </option>
            <option value="Contramestre de cabotagem">
              Contramestre de cabotagem
            </option>
            <option value="Contramestre de fiação (indústria têxtil)">
              Contramestre de fiação (indústria têxtil)
            </option>
            <option value="Contramestre de malharia (indústria têxtil)">
              Contramestre de malharia (indústria têxtil)
            </option>
            <option value="Contramestre de tecelagem (indústria têxtil)">
              Contramestre de tecelagem (indústria têxtil)
            </option>
            <option value="Controlador de entrada e saída">
              Controlador de entrada e saída
            </option>
            <option value="Controlador de pragas">Controlador de pragas</option>
            <option value="Controlador de serviços de máquinas e veículos">
              Controlador de serviços de máquinas e veículos
            </option>
            <option value="Controlador de tráfego aéreo">
              Controlador de tráfego aéreo
            </option>
            <option value="Contínuo">Contínuo</option>
            <option value="Coordenador de operações de combate à poluição no meio aquaviário">
              Coordenador de operações de combate à poluição no meio aquaviário
            </option>
            <option value="Coordenador pedagógico">
              Coordenador pedagógico
            </option>
            <option value="Copeiro">Copeiro</option>
            <option value="Copeiro de hospital">Copeiro de hospital</option>
            <option value="Copiador de chapa">Copiador de chapa</option>
            <option value="Coreógrafo">Coreógrafo</option>
            <option value="Coronel Bombeiro Militar">
              Coronel Bombeiro Militar
            </option>
            <option value="Coronel da Polícia Militar">
              Coronel da Polícia Militar
            </option>
            <option value="Corretor de imóveis">Corretor de imóveis</option>
            <option value="Corretor de seguros">Corretor de seguros</option>
            <option value="Corretor de valores">Corretor de valores</option>
            <option value="Cortador de artefatos de couro (exceto roupas e calçados)">
              Cortador de artefatos de couro (exceto roupas e calçados)
            </option>
            <option value="Cortador de calçados">Cortador de calçados</option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="11">11</option>
            <option value="Cortador de calçados">Cortador de calçados</option>
            <option value="Cortador de charutos">Cortador de charutos</option>
            <option value="Cortador de laminados de madeira">
              Cortador de laminados de madeira
            </option>
            <option value="Cortador de pedras">Cortador de pedras</option>
            <option value="Cortador de roupas">Cortador de roupas</option>
            <option value="Cortador de solas e palmilhas">
              Cortador de solas e palmilhas
            </option>
            <option value="Cortador de tapeçaria">Cortador de tapeçaria</option>
            <option value="Cortador de vidro">Cortador de vidro</option>
            <option value="Costurador de artefatos de couro">
              Costurador de artefatos de couro
            </option>
            <option value="Costurador de artefatos de couro">
              Costurador de artefatos de couro
            </option>
            <option value="Costurador de calçados">
              Costurador de calçados
            </option>
            <option value="Costureira de peças sob encomenda">
              Costureira de peças sob encomenda
            </option>
            <option value="Costureira de reparação de roupas">
              Costureira de reparação de roupas
            </option>
            <option value="Costureiro">Costureiro</option>
            <option value="Costureiro de roupa de couro e pele">
              Costureiro de roupa de couro e pele
            </option>
            <option value="Costureiro de roupas de couro e pele">
              Costureiro de roupas de couro e pele
            </option>
            <option value="Costureiro na confecção em série">
              Costureiro na confecção em série
            </option>
            <option value="Cozinhador (conservação de alimentos)">
              Cozinhador (conservação de alimentos)
            </option>
            <option value="Cozinhador de carnes">Cozinhador de carnes</option>
            <option value="Cozinhador de frutas e legumes">
              Cozinhador de frutas e legumes
            </option>
            <option value="Cozinhador de malte">Cozinhador de malte</option>
            <option value="Cozinhador de pescado">Cozinhador de pescado</option>
            <option value="Cozinheiro de embarcações">
              Cozinheiro de embarcações
            </option>
            <option value="Cozinheiro de hospital">
              Cozinheiro de hospital
            </option>
            <option value="Cozinheiro do serviço doméstico">
              Cozinheiro do serviço doméstico
            </option>
            <option value="Cozinheiro geral">Cozinheiro geral</option>
            <option value="Cozinheiro industrial">Cozinheiro industrial</option>
            <option value="Criador de animais domésticos">
              Criador de animais domésticos
            </option>
            <option value="Criador de animais produtores de veneno">
              Criador de animais produtores de veneno
            </option>
            <option value="Criador de asininos e muares">
              Criador de asininos e muares
            </option>
            <option value="Criador de bovinos (corte)">
              Criador de bovinos (corte)
            </option>
            <option value="Criador de bovinos (leite)">
              Criador de bovinos (leite)
            </option>
            <option value="Criador de bubalinos (corte)">
              Criador de bubalinos (corte)
            </option>
            <option value="Criador de bubalinos (leite)">
              Criador de bubalinos (leite)
            </option>
            <option value="Criador de camaroes">Criador de camaroes</option>
            <option value="Criador de caprinos">Criador de caprinos</option>
            <option value="Criador de eqüínos">Criador de eqüínos</option>
            <option value="Criador de jacarés">Criador de jacarés</option>
            <option value="Criador de mexilhoes">Criador de mexilhoes</option>
            <option value="Criador de ostras">Criador de ostras</option>
            <option value="Criador de ovinos">Criador de ovinos</option>
            <option value="Criador de peixes">Criador de peixes</option>
            <option value="Criador de quelônios">Criador de quelônios</option>
            <option value="Criador de ras">Criador de ras</option>
            <option value="Criador de suínos">Criador de suínos</option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="12">12</option>
            <option value="Criador em pecuária polivalente">
              Criador em pecuária polivalente
            </option>
            <option value="Crocheteiro">Crocheteiro</option>
            <option value="Cronoanalista">Cronoanalista</option>
            <option value="Cronometrista">Cronometrista</option>
            <option value="Crítico">Crítico</option>
            <option value="Cubador de madeira">Cubador de madeira</option>
            <option value="Cuidador de idosos">Cuidador de idosos</option>
            <option value="Cuidador em saúde">Cuidador em saúde</option>
            <option value="Cumim">Cumim</option>
            <option value="Cunicultor">Cunicultor</option>
            <option value="Curtidor (couros e peles)">
              Curtidor (couros e peles)
            </option>
            <option value="Dançarino popular">Dançarino popular</option>
            <option value="Dançarino tradicional">Dançarino tradicional</option>
            <option value="Datilógrafo">Datilógrafo</option>
            <option value="Decapador">Decapador</option>
            <option value="Decorador de cerâmica">Decorador de cerâmica</option>
            <option value="Decorador de eventos">Decorador de eventos</option>
            <option value="Decorador de interiores de nível superior">
              Decorador de interiores de nível superior
            </option>
            <option value="Decorador de vidro">Decorador de vidro</option>
            <option value="Decorador de vidro à pincel">
              Decorador de vidro à pincel
            </option>
            <option value="Defensor público">Defensor público</option>
            <option value="Defumador de carnes e pescados">
              Defumador de carnes e pescados
            </option>
            <option value="Degustador de café">Degustador de café</option>
            <option value="Degustador de charutos">
              Degustador de charutos
            </option>
            <option value="Degustador de chá">Degustador de chá</option>
            <option value="Degustador de derivados de cacau">
              Degustador de derivados de cacau
            </option>
            <option value="Degustador de vinhos ou licores">
              Degustador de vinhos ou licores
            </option>
            <option value="Delegado de polícia">Delegado de polícia</option>
            <option value="Demolidor de edificações">
              Demolidor de edificações
            </option>
            <option value="Demonstrador de mercadorias">
              Demonstrador de mercadorias
            </option>
            <option value="Deputado Estadual e distrital">
              Deputado Estadual e distrital
            </option>
            <option value="Deputado Federal">Deputado Federal</option>
            <option value="Descarnador de couros e peles">
              Descarnador de couros e peles
            </option>
            <option value="Desenhista copista">Desenhista copista</option>
            <option value="Desenhista detalhista">Desenhista detalhista</option>
            <option value="Desenhista industrial (designer)">
              Desenhista industrial (designer)
            </option>
            <option value="Desenhista industrial de produto (designer de produto)">
              Desenhista industrial de produto (designer de produto)
            </option>
            <option value="Desenhista industrial de produto de moda (designer de moda)">
              Desenhista industrial de produto de moda (designer de moda)
            </option>
            <option value="Desenhista projetista de arquitetura">
              Desenhista projetista de arquitetura
            </option>
            <option value="Desenhista projetista de construção civil">
              Desenhista projetista de construção civil
            </option>
            <option value="Desenhista projetista de eletricidade">
              Desenhista projetista de eletricidade
            </option>
            <option value="Desenhista projetista de máquinas">
              Desenhista projetista de máquinas
            </option>
            <option value="Desenhista projetista eletrônico">
              Desenhista projetista eletrônico
            </option>
            <option value="Desenhista projetista mecânico">
              Desenhista projetista mecânico
            </option>
            <option value="Desenhista técnico">Desenhista técnico</option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="13">13</option>
            <option value="Desenhista técnico (arquitetura)">
              Desenhista técnico (arquitetura)
            </option>
            <option value="Desenhista técnico (artes gráficas)">
              Desenhista técnico (artes gráficas)
            </option>
            <option value="Desenhista técnico (calefação">
              Desenhista técnico (calefação
            </option>
            <option value="Desenhista técnico (cartografia)">
              Desenhista técnico (cartografia)
            </option>
            <option value="Desenhista técnico (construção civil)">
              Desenhista técnico (construção civil)
            </option>
            <option value="Desenhista técnico (eletricidade e eletrônica)">
              Desenhista técnico (eletricidade e eletrônica)
            </option>
            <option value="Desenhista técnico (ilustrações artísticas)">
              Desenhista técnico (ilustrações artísticas)
            </option>
            <option value="Desenhista técnico (ilustrações técnicas)">
              Desenhista técnico (ilustrações técnicas)
            </option>
            <option value="Desenhista técnico (indústria têxtil)">
              Desenhista técnico (indústria têxtil)
            </option>
            <option value="Desenhista técnico (instalações hidrossanitárias)">
              Desenhista técnico (instalações hidrossanitárias)
            </option>
            <option value="Desenhista técnico (mobiliário)">
              Desenhista técnico (mobiliário)
            </option>
            <option value="Desenhista técnico aeronáutico">
              Desenhista técnico aeronáutico
            </option>
            <option value="Desenhista técnico de embalagens">
              Desenhista técnico de embalagens
            </option>
            <option value="Desenhista técnico mecânico">
              Desenhista técnico mecânico
            </option>
            <option value="Desenhista técnico naval">
              Desenhista técnico naval
            </option>
            <option value="Desidratador de alimentos">
              Desidratador de alimentos
            </option>
            <option value="Designer de interiores">
              Designer de interiores
            </option>
            <option value="Designer de vitrines">Designer de vitrines</option>
            <option value="Designer educacional">Designer educacional</option>
            <option value="Desincrustador (poços de petróleo)">
              Desincrustador (poços de petróleo)
            </option>
            <option value="Desossador">Desossador</option>
            <option value="Despachante aduaneiro">Despachante aduaneiro</option>
            <option value="Despachante de transportes coletivos (exceto trem)">
              Despachante de transportes coletivos (exceto trem)
            </option>
            <option value="Despachante de trânsito">
              Despachante de trânsito
            </option>
            <option value="Despachante documentalista">
              Despachante documentalista
            </option>
            <option value="Despachante operacional de vôo">
              Despachante operacional de vôo
            </option>
            <option value="Dessecador de malte">Dessecador de malte</option>
            <option value="Destilador de madeira">Destilador de madeira</option>
            <option value="Destilador de produtos químicos (exceto petróleo)">
              Destilador de produtos químicos (exceto petróleo)
            </option>
            <option value="Destroçador de pedra">Destroçador de pedra</option>
            <option value="Detetive profissional">Detetive profissional</option>
            <option value="Detonador">Detonador</option>
            <option value="Dietista">Dietista</option>
            <option value="Digitador">Digitador</option>
            <option value="Diretor administrativo">
              Diretor administrativo
            </option>
            <option value="Diretor administrativo e financeiro">
              Diretor administrativo e financeiro
            </option>
            <option value="Diretor comercial">Diretor comercial</option>
            <option value="Diretor comercial em operações de intermediação financeira">
              Diretor comercial em operações de intermediação financeira
            </option>
            <option value="Diretor de arte">Diretor de arte</option>
            <option value="Diretor de cinema">Diretor de cinema</option>
            <option value="Diretor de compliance">Diretor de compliance</option>
            <option value="Diretor de crédito (exceto crédito imobiliário)">
              Diretor de crédito (exceto crédito imobiliário)
            </option>
            <option value="Diretor de crédito imobiliário">
              Diretor de crédito imobiliário
            </option>
            <option value="Diretor de crédito rural">
              Diretor de crédito rural
            </option>
            <option value="Diretor de câmbio e comércio exterior">
              Diretor de câmbio e comércio exterior
            </option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="14">14</option>
            <option value="Diretor de fotografia">Diretor de fotografia</option>
            <option value="Diretor de instituição educacional da área privada">
              Diretor de instituição educacional da área privada
            </option>
            <option value="Diretor de instituição educacional pública">
              Diretor de instituição educacional pública
            </option>
            <option value="Diretor de leasing">Diretor de leasing</option>
            <option value="Diretor de manutenção">Diretor de manutenção</option>
            <option value="Diretor de marketing">Diretor de marketing</option>
            <option value="Diretor de mercado de capitais">
              Diretor de mercado de capitais
            </option>
            <option value="Diretor de operações comerciais (comércio atacadista e varejista)">
              Diretor de operações comerciais (comércio atacadista e varejista)
            </option>
            <option value="Diretor de operações de correios">
              Diretor de operações de correios
            </option>
            <option value="Diretor de operações de obras pública e civil">
              Diretor de operações de obras pública e civil
            </option>
            <option value="Diretor de operações de serviços de armazenamento">
              Diretor de operações de serviços de armazenamento
            </option>
            <option value="Diretor de operações de serviços de telecomunicações">
              Diretor de operações de serviços de telecomunicações
            </option>
            <option value="Diretor de operações de serviços de transporte">
              Diretor de operações de serviços de transporte
            </option>
            <option value="Diretor de Pesquisa e Desenvolvimento (P&D)">
              Diretor de Pesquisa e Desenvolvimento (P&D)
            </option>
            <option value="Diretor de planejamento estratégico">
              Diretor de planejamento estratégico
            </option>
            <option value="Diretor de produtos bancários">
              Diretor de produtos bancários
            </option>
            <option value="Diretor de produção e operações da indústria de transformação">
              Diretor de produção e operações da indústria de transformação
            </option>
            <option value="Diretor de produção e operações de alimentação">
              Diretor de produção e operações de alimentação
            </option>
            <option value="Diretor de produção e operações de hotel">
              Diretor de produção e operações de hotel
            </option>
            <option value="Diretor de produção e operações de turismo">
              Diretor de produção e operações de turismo
            </option>
            <option value="Diretor de produção e operações em empresa agropecuária">
              Diretor de produção e operações em empresa agropecuária
            </option>
            <option value="Diretor de produção e operações em empresa aqüícola">
              Diretor de produção e operações em empresa aqüícola
            </option>
            <option value="Diretor de produção e operações em empresa florestal">
              Diretor de produção e operações em empresa florestal
            </option>
            <option value="Diretor de produção e operações em empresa pesqueira">
              Diretor de produção e operações em empresa pesqueira
            </option>
            <option value="Diretor de programas de rádio">
              Diretor de programas de rádio
            </option>
            <option value="Diretor de programas de televisão">
              Diretor de programas de televisão
            </option>
            <option value="Diretor de recuperação de créditos em operações de intermediação financeira">
              Diretor de recuperação de créditos em operações de intermediação
              financeira
            </option>
            <option value="Diretor de recursos humanos">
              Diretor de recursos humanos
            </option>
            <option value="Diretor de redação">Diretor de redação</option>
            <option value="Diretor de relações de trabalho">
              Diretor de relações de trabalho
            </option>
            <option value="Diretor de riscos de mercado">
              Diretor de riscos de mercado
            </option>
            <option value="Diretor de serviços culturais">
              Diretor de serviços culturais
            </option>
            <option value="Diretor de serviços de informática">
              Diretor de serviços de informática
            </option>
            <option value="Diretor de serviços de saúde">
              Diretor de serviços de saúde
            </option>
            <option value="Diretor de serviços sociais">
              Diretor de serviços sociais
            </option>
            <option value="Diretor de suprimentos">
              Diretor de suprimentos
            </option>
            <option value="Diretor de suprimentos no serviço público">
              Diretor de suprimentos no serviço público
            </option>
            <option value="Diretor financeiro">Diretor financeiro</option>
            <option value="Diretor geral de empresa e organizações (exceto de interesse público)">
              Diretor geral de empresa e organizações (exceto de interesse
              público)
            </option>
            <option value="Diretor teatral">Diretor teatral</option>
            <option value="Dirigente de partido político">
              Dirigente de partido político
            </option>
            <option value="Dirigente do serviço público estadual e distrital">
              Dirigente do serviço público estadual e distrital
            </option>
            <option value="Dirigente do serviço público federal">
              Dirigente do serviço público federal
            </option>
            <option value="Dirigente do serviço público municipal">
              Dirigente do serviço público municipal
            </option>
            <option value="Dirigente e administrador de organização da sociedade civil sem fins lucrativos">
              Dirigente e administrador de organização da sociedade civil sem
              fins lucrativos
            </option>
            <option value="de Inf. em Sáude">de Inf. em Sáude</option>
            <option value="15">15</option>
            <option value="Dirigente e administrador de organização religiosa">
              Dirigente e administrador de organização religiosa
            </option>
            <option value="Dirigentes de entidades de trabalhadores">
              Dirigentes de entidades de trabalhadores
            </option>
            <option value="Dirigentes de entidades patronais">
              Dirigentes de entidades patronais
            </option>
            <option value="Dj (disc jockey)">Dj (disc jockey)</option>
            <option value="Documentalista">Documentalista</option>
            <option value="Domador de animais (circense)">
              Domador de animais (circense)
            </option>
            <option value="Doula">Doula</option>
            <option value="Drageador (medicamentos)">
              Drageador (medicamentos)
            </option>
            <option value="Dramaturgo de dança">Dramaturgo de dança</option>
            <option value="Economista">Economista</option>
            <option value="Economista agroindustrial">
              Economista agroindustrial
            </option>
            <option value="Economista ambiental">Economista ambiental</option>
            <option value="Economista do setor público">
              Economista do setor público
            </option>
            <option value="Economista doméstico">Economista doméstico</option>
            <option value="Economista financeiro">Economista financeiro</option>
            <option value="Economista industrial">Economista industrial</option>
            <option value="Economista regional e urbano">
              Economista regional e urbano
            </option>
            <option value="Editor">Editor</option>
            <option value="Editor de jornal">Editor de jornal</option>
            <option value="Editor de livro">Editor de livro</option>
          </select>
        </div>
        <div className="form-view__row">
          <input
            type="text"
            name="revenue"
            placeholder="Renda mensal"
            value={revenue}
            onChange={handleRevenueChange}
          />
          <select name="gender" value={gender} onChange={handleGenderChange}>
            <option>Selecione seu gênero</option>
            <option value="0">Masculino</option>
            <option value="1">Feminino</option>
          </select>
        </div>
        <div className="form-view__row">
          <select name="estate" value={estate} onChange={handleEstateChange}>
            <option>UF</option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
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
