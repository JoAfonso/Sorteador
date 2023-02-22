import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import Rodape from "./Rodape";


jest.mock("../state/hooks/useListaDeParticipantes", () =>{
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()
const mockSorteio = jest.fn()


jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

jest.mock('../state/hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
})

describe("onde não existem participantes suficientes", () =>{
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test("o botão não pode ser iniciada", ()=>{
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})

describe("quando existem participantes suficientes", () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(["ana", "joselino", "pedro"])
    })
    test("sorteio pode ser iniciada", () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })
    test("o sorteio foi iniciado", () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)

        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)

        
    })
})