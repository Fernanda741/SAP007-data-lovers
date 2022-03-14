import { ascAlphabeth, descAlphabeth, nameFilter,/* speciesFilter, statusFilter, genderFilter, calculator */ } from '../src/data.js';

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
}];

describe('ascAlphabet', () => {
  it('é uma função', () => {
    expect(typeof sort).toBe('function');
  });

  it('ordenar `nomes de A-Z`', () => {
    const ascendentOrder = ascAlphabeth([{ "name": "Pickle Rick" },
    { "name": "Tiny Rick" }, { "name": "Dr. Wong" }], "A-Z")
    expect(ascendentOrder).toStrictEqual([{ "name": "Dr. Wong" },
    { "name": "Pickle Rick" }, { "name": "Tiny Rick" }]);

  });
});
describe('dscAlphabet', () => {
  it('é uma função', () => {
    expect(typeof sort).toBe('function');
  });

  it('ordenar nomes de Z-A', () => {
    const descendentOrder = descAlphabeth([{ "name": "Tiny Rick" },
    { "name": "Pickle Rick" }, { "name": "Dr. Wong" }], "Z-A")
    expect(descendentOrder).toStrictEqual([{ "name": "Tiny Rick" },
    { "name": "Pickle Rick" }, { "name": "Dr. Wong" }]);
  });
});

 describe('nameFilter', () => {
   it('é uma função', () => {
     expect(typeof filter).toBe('function');
   });

   it('buscar personagem pelo nome', () => {
     const expectedSearch= nameFilter(mockArray, "Pickle");
     const searchResult= [{
      "name": "Pickle Rick",
      "status": "Alive",
      "species": "unknown",
      "gender": "Male"
     }]
     expect(expectedSearch).toEqual(searchResult);
   });
 });
