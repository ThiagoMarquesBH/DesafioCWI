import reqres from "../../pages/api/reqres";
describe('Validar API reqres.in', () => {
    it('Validar endpoint POST Create', () => {
        reqres.ExecutaEndPointPostCreate()
    });
});