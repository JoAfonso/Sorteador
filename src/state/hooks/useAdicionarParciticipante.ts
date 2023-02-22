import { useSetRecoilState,useRecoilValue } from "recoil";
import { erroState, listaParticipantesState } from "../atom";

export const useAdicionarParciticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);
  const lista = useRecoilValue(listaParticipantesState);
  const setErro = useSetRecoilState(erroState)

  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
        setErro("Nomes Duplicados não são permitidos")
        setTimeout(() => {
            setErro("")
        },3000)
        return
    }

    return setLista((listaAtul) => [...listaAtul, nomeDoParticipante]);
  };
};
