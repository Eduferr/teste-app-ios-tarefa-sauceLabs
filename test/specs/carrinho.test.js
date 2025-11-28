import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'
import carrinhoPage from '../pageobjects/carrinho.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('Funcionalidade de checkout completo', () => {

    it('Deve realizar login com credenciais válidas', async () => {
        // Define qual aba do menu deve ser acessada dependendo da plataforma: no Android é "profile"; no iOS é "Account".
        let profileTab = driver.isAndroid ? 'profile' : 'Account'
        // Abre o menu correspondente ao perfil para acessar a tela de login.
        await homePage.openMenu(profileTab)
        // Executa o login com e-mail e senha válidos.
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        // Após o login, abre novamente a aba de perfil para validar se o usuário foi autenticado.
        await homePage.openMenu(profileTab)
        // O teste passa se o elemento "EBAC Cliente"estiver visível na tela.
        expect((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy()
    })

    it('Deve visualizar informações do produto', async () => {

        // Abre o menu "Browse", que é a área de navegação de produtos.
        await homePage.openMenu('Browse')
        // Aciona a função de busca dentro da tela de navegação.
        await homePage.search()
        // Digita o termo "bag pandora" no campo de pesquisa de produtos.
        await browsePage.searchInput.setValue('bag pandora')
        // Seleciona o 4º item da lista de produtos retornados (índice 3).
        // O { force: true } garante o clique mesmo se algum elemento estiver sobreposto.
        await (await browsePage.products).at(3).click({ force: true })
        // Verifica se o título do produto "bag pandora" está visível na tela de detalhes.
        expect(productPage.getProductTitle('bag pandora')).toBeDisplayed()
    })

    it('Deve adicionar produto ao carrinho e finalizar a transação', async () => {
    // Clica no botão de adicionar o produto ao carrinho
    await carrinhoPage.addToCart.click()
    // Avança para a etapa de pagamento
    await carrinhoPage.payment.click()
    // Finaliza o processo de checkout
    await carrinhoPage.checkout.click()
    // Valida que a tela de sucesso do pedido foi exibida
    await expect($(`-ios predicate string:name == "Order Success"`)).toBeDisplayed()
})

})