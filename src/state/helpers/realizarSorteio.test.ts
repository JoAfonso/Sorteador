import React from "react";
import { realizarSorteio } from "./realizarSorteio";

describe("dado um sorteio de amigo secreto", () => {
  test("cada participante não sorteie o proprio nome", () => {
    const participantes = [
      "ana",
      "joselito",
      "petruquia",
      "josefina",
      "josemilton",
      "anita"
    ];

    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
        const amigoSecreto = sorteio.get(participante)
        expect(amigoSecreto).not.toEqual(participante)
    })
  });
});
