/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
import { basePage } from "./support/pages/BasePage"
import { booking } from "./support/pages/Booking"
import { pasportDateGaneration } from "./support/pages/PasportDateGaneration"

describe('empty spec', () => {

    it('Бронирование тура 1 Взрослый 1 ребенок 1 младенец (бархатные сезоны)', () => {
        basePage.visitFS()
        basePage.MyTypeChoice('Я турист')
        basePage.Login('testfs8@yandex.ru', '123456')
        booking.ChooseCountryDirection('Россия')
        booking.ChoosePlusTreeMounthDate()
        booking.ChooseOneTourist()
        booking.AddОneCHD()
        booking.AddОneInfant()
        basePage.Search()
        booking.WaitingResultOfSearch()
        booking.SearchNameOfHotel('Бархатные сезоны')
        booking.PutOfferIntoBasket(0)
        booking.ChooseBaseFlight()
        booking.ChooseThirdFaceBayerWithTreeTourists()
        pasportDateGaneration.DateWithOneAddAOneCldOneInfRusGDS()
        booking.AgreementCheck()
        booking.Booking()
        booking.Paybottom()

    })
})