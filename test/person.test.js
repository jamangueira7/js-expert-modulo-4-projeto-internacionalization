import mocha from "mocha";
const { describe, it } = mocha;
import chai from "chai";
const { expect } = chai;
import Person from "../src/person.js";

describe("Person", () => {
    it("should return a person instance from a string", () => {
        const person = Person.generateInstanceFromString(
            '1 Bike,Carro 2000000 2010-01-01 2022-06-08'
        );

        const expected = {
            from: "2010-01-01",
            to: "2022-06-08",
            vehicles: ["Bike", "Carro"],
            kmTraveled: "2000000",
            id:"1"
        };

        expect(person).to.be.deep.equal(expected);
    });

    it("should return format values", () => {
        const person = new Person({
            from: "2010-01-01",
            to: "2022-06-08",
            vehicles: ["Bike", "Carro"],
            kmTraveled: "2000000",
            id:"1"
        });

        const result = person.formatted("pt-BR");

        const expected = {
            from: "01 de janeiro de 2010",
            to: "08 de junho de 2022",
            vehicles: "Bike e Carro",
            kmTraveled: "2.000.000 km",
            id: 1
        };

        expect(result).to.be.deep.equal(expected);
    });
});