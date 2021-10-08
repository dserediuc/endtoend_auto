/// <reference types="Cypress" />
import { dashboardPage } from '../support/pageObjects/DashboardPage.js';
import {loginPage} from '../support/pageObjects/LoginPage.js'
import {contactsPage} from '../support/pageObjects/ContactsPage.js'
import Utils from '../support/pageObjects/Utils.js'

const utils = new Utils();

describe('End to End Test Suite', function () {const utils =  new Utils();
    it('Verify that user can perform a log and add a new contact', function () {
        //navigating to home page
        cy.visit(Cypress.env('dashboard'));
        //performing a log in
        const email = Cypress.env('credentials').email;
        const password = Cypress.env('credentials').password;
        cy.get(loginPage.email).type(email);
        cy.get(loginPage.password).type(password);
        //waiting for the auth to finish
        cy.intercept('POST','/auth/sign_in').as('auth')
        cy.get(loginPage.loginButton).click();
        cy.wait('@auth')
        //checking that user is logged in
        cy.get(dashboardPage.title).should('be.visible');
        cy.get(dashboardPage.menu).click();
        cy.get(dashboardPage.contacts).click();
        cy.get(contactsPage.newContact).click();
        cy.get(contactsPage.fullName).type(utils.generateRandomString());
        let newContact = utils.generateEmail();
        cy.get(contactsPage.email).type(newContact)
        cy.get(contactsPage.phoneNumber).type(utils.generatePhoneNumber());
        cy.get(contactsPage.bio).type(utils.generateRandomString());
        cy.get(contactsPage.submitButton).click();
        cy.get(contactsPage.contactList).should('contain',newContact)
    });
});