import 'cypress-xpath'
import "cypress-real-events"
import { elementsGetnet as el} from './elementsGetnet'
class Getnet {
    AcessarSite(){
        cy.viewport(1280, 720)
        cy.visit(el.site)
        cy.window().should('have.property', 'document')
        cy.get(el.cabecalho).should('be.visible')
        cy.xpath(el.botaoPermitirCookin).click()
    }

    AcionarHoverDoBotaoSouCliente(){
        cy.xpath(el.botaoSouCliente).realHover()
    }

    ClicarNaOpcaoCentralDeAjuda(){
        cy.xpath(el.botaoCentralDeAjuda).should('be.visible').click()
        cy.get(el.botaoChatBot).should('be.visible').realHover()
    }

    RealizarPesquisaEVerificarSeuResultado(){
        cy.get(el.campoBusca).should('be.visible').click().type(el.texto)
        cy.xpath(el.opcaoDeMenuBusca).should('be.visible').click()
        cy.xpath(el.popupComTexto).should('be.visible').contains(el.texto)
    }

}
export default new Getnet()