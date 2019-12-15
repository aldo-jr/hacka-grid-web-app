import * as TYPES from "./actionTypes";

import { searchPlansByDataService } from "./services";

export const searchPlansByData = ({
  name,
  birthDay,
  document,
  job,
  revenue,
  gender,
  estate
}) => dispatch => {
  dispatch({ type: TYPES.SEARCH_PLANS_REQUESTED });
  return searchPlansByDataService({
    nome: name,
    dataNascimento: birthDay,
    cpf: document,
    profissaoCbo: job,
    renda: revenue,
    sexoId: gender,
    uf: estate
  }).then(res => {
    dispatch({ type: TYPES.SEARCH_PLANS_SUCCESS, payload: { data: res } });
  })
  .catch(err => {
    dispatch({ type: TYPES.SEARCH_PLANS_ERROR, payload: { error: err } });
  });
};
