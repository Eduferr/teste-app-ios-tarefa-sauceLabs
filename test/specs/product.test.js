import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Funcionalidade detalhes do Produto', () => {
    it('Deve visualizar informações do produto', async () => {
        await homePage.search()
        await browsePage.searchInput.setValue('bag pandora')
        await (await browsePage.products).at(0).click()
        expect(productPage.getProductTitle('bag pandora')).toBeDisplayed()
    })
})

