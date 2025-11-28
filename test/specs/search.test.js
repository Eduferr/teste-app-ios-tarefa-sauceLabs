import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'

describe('Funcionalidade de busca de produtos', () => {

    it('Deve pesquisar produto', async () => {
        await homePage.search()
        await browsePage.searchInput.setValue('In')
        await browsePage.products.map(async product => {
            expect(await product.getText()).toContain('R$')
        })

    })
})

