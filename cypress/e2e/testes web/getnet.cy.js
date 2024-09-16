import getnet from '../../pages/testsweb/getnet'

describe('Teste de Pesquisa na Central de Ajuda do Getnet', () => {
    before(() => {
        getnet.AcessarSite()
    })
  
    it('Deve realizar uma pesquisa e validar o texto exibido', () => {
        getnet.AcionarHoverDoBotaoSouCliente()
        getnet.ClicarNaOpcaoCentralDeAjuda()
        getnet.RealizarPesquisaEVerificarSeuResultado()        
    })
  })