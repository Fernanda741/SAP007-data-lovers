import { ascAlphabeth, descAlphabeth, nameFilter, speciesFilter, statusFilter, genderFilter, calculator } from '../src/data.js';

const mockArray = [{

  "name": "Pickle Rick",
  "status": "Alive",
  "species": "unknown",
  "gender": "Male",
},

{
  "name": "Tiny Rick",
  "status": "Dead",
  "species": "Human",
  "gender": "Male",
},

{
  "name": "Dr. Wong",
  "status": "Alive",
  "species": "Human",
  "gender": "Female",
},

{
  "name": "Baby Legs",
  "status": "Alive",
  "species": "Human",
  "gender": "Male",

}];

describe('ascAlphabet', () => {
  it('é uma função', () => {
    expect(typeof ascAlphabeth).toBe('function');
  });

  it('ordenar `nomes de A-Z`', () => {
    const ascendentOrder = ascAlphabeth([{ "name": "Pickle Rick" },
    { "name": "Tiny Rick" }, { "name": "Dr. Wong" }, { "name": "Baby Legs", }], "A-Z")
    expect(ascendentOrder).toStrictEqual([{ "name": "Baby Legs", }, { "name": "Dr. Wong" },
    { "name": "Pickle Rick" }, { "name": "Tiny Rick" }]);

  });
});
describe('descAlphabet', () => {
  it('é uma função', () => {
    expect(typeof descAlphabeth).toBe('function');
  });

  it('ordenar nomes de Z-A', () => {
    const descendentOrder = descAlphabeth([{ "name": "Tiny Rick" },
    { "name": "Pickle Rick" }, { "name": "Dr. Wong" }, { "name": "Baby Legs", }], "Z-A")
    expect(descendentOrder).toStrictEqual([{ "name": "Tiny Rick" },
    { "name": "Pickle Rick" }, { "name": "Dr. Wong" }, { "name": "Baby Legs", }]);
  });
});

describe('nameFilter', () => {
  it('é uma função', () => {
    expect(typeof nameFilter).toBe('function');
  });

  it('buscar personagem pelo nome', () => {
    const expectedSearch = nameFilter(mockArray, "Pickle");
    const searchResult = [{
      "name": "Pickle Rick",
      "status": "Alive",
      "species": "unknown",
      "gender": "Male"
    }]
    expect(expectedSearch).toEqual(searchResult);
  });
});

describe('speciesFilter', () => {
  it('é uma função', () => {
    expect(typeof speciesFilter).toBe('function');
  });

  it('filtra a espécie dos personagens', () => {
    const expectedSpecies = speciesFilter(mockArray, "unknown");
    expect(expectedSpecies).toEqual([{
      "name": "Pickle Rick",
      "status": "Alive",
      "species": "unknown",
      "gender": "Male",
    }]);
  });
});

describe('statusFilter', () => {
  it('é uma função', () => {
    expect(typeof statusFilter).toBe('function');
  });

  it('filtra o status dos personagens', () => {
    const expectedStatus = statusFilter(mockArray, "Dead");
    expect(expectedStatus).toEqual([{
      "name": "Tiny Rick",
      "status": "Dead",
      "species": "Human",
      "gender": "Male",
    }]);
  });
});

describe('genderFilter', () => {
  it('é uma função', () => {
    expect(typeof genderFilter).toBe('function');
  });

  it('filtra o gênero dos personagens', () => {
    const expectedGender = genderFilter(mockArray, "Female");
    expect(expectedGender).toEqual([{
      "name": "Dr. Wong",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
    }]);
  });
});


describe('calculator', () => {
  it('é uma função', () => {
    expect(typeof calculator).toBe('function');
  });

  it('retorna 75% dos categoria Male', () => {
    const expectedCalc = calculator(mockArray.length, 3);
    expect(expectedCalc).toEqual(75);
  });
});
