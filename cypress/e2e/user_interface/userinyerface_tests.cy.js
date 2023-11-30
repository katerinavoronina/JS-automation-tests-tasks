import {getPassword, getRandomLowerCaseString, getDomain} from '../../support/utils/generated_string_util.js' 

describe("Check User interface site test task", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get('.start__paragraph').should('exist');
    })

    it('Help form', () => {
      cy.goToGamePage();
    })

    it('Timer', () => {
        const initialTimerValue = "00:00:00";
        cy.goToGamePage();
        cy.get('div[class*="timer"]').should('have.text', initialTimerValue);
    })

    it('Valid password', () => {
        cy.goToGamePage();
        let emailName = getRandomLowerCaseString();
        cy.logInGamePage(getPassword(emailName), emailName, getRandomLowerCaseString(), getDomain());
        cy.contains('Next').click();
        const secondPageIndicator = '2 / 4';
        cy.get('.page-indicator').should('have.text', secondPageIndicator);
    })

    it('Invalid password', () => {
        cy.goToGamePage();
        let emailName = getRandomLowerCaseString();
        let wrongPasswordLenth = 5;
        cy.logInGamePage(getPassword(emailName, wrongPasswordLenth), emailName, getRandomLowerCaseString(), getDomain());
        cy.contains('Next').click();
        const firstPageIndicator = '1 / 4';
        cy.get('.page-indicator').should('have.text', firstPageIndicator);
    })
})