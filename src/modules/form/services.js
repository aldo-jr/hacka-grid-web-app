// import axios from "axios";

export const searchPlansByDataService = ({
  // nome,
  // cpf,
  // dataNascimento,
  // profissaoCbo,
  // renda,
  // sexoId,
  // uf
}) =>
  Promise.reject({
    Valor: {
      simulacoes: [
        {
          proponente: {
            tipoRelacaoSeguradoId: 1,
            nome: "CENARIO TESTE 1",
            cpf: "24011549061",
            dataNascimento: "1980-10-20T00:00:00",
            sexoId: 1,
            profissaoCbo: "2410-05",
            renda: 5000,
            uf: "MA",
            origem: null,
            patrimonio: null,
            declaracaoIRId: 1,
            despesasEducacao: null,
            despesasMensais: null,
            formaContato: null,
            emails: null,
            historicoDoenca: null,
            historicoDoencaFamiliar: null,
            investimentos: null,
            medicamentos: null,
            telefones: null,
            classeRisco: null
          },
          produtos: [
            {
              idProduto: 517,
              descricao: "PENSÃO POR MORTE",
              descricaoComercial: "",
              coberturas: [
                {
                  id: 24,
                  descricao: "PENSÃO - BENEFÍCIO POR MORTE",
                  tipoId: null,
                  capitalBase: 1000,
                  causaId: null,
                  limite: 1080000,
                  tipoCapitalBase: null,
                  premioBase: 68.13835076,
                  prazoCerto: 30,
                  prazoRenda: null,
                  prazoDecrescimo: 10,
                  prazoPagamentoAntecipado: 10,
                  idadePagamentoAntecipado: null,
                  custoFixo: 0,
                  dependenciasCoberturaProdutos: [],
                  valorMinimoCapitalContratacao: null,
                  valorLimiteCapitalReferencia: null
                }
              ]
            }
          ],
          periodicidadeCobrancaId: 30,
          prazoDecrescimo: 10,
          prazoPagamentoAntecipado: 10,
          idadePagamentoAntecipado: null,
          prazoCerto: 30,
          prazoRenda: null,
          ticketMinimo: 35
        }
      ]
    },
    Mensagens: [],
    HouveErrosDuranteProcessamento: false
  });
// axios.post("http://172.31.109.29:8080/simulacao", {
//   simulacoes: [
//     {
//       proponente: {
//         tipoRelacaoSeguradoId: 0,
//         nome,
//         cpf,
//         dataNascimento,
//         profissaoCbo,
//         renda,
//         sexoId,
//         uf,
//         declaracaoIRId: 0
//       },
//       periodicidadeCobrancaId: 0,
//       prazoCerto: 0
//     }
//   ]
// });
