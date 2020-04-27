describe('BMI Calculator', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('calculates BMI in metric', () => {
        cy.get('[type="radio"]').first().check()
        cy.get('input#weight').type(90);
        cy.get('input#height').type(200);
        cy.get('button#calculate').click();
        cy.get('p#bmi-message').should('contain', 'You are Normal with a BMI of 22.50')
    })
    it('calculates BMI in imperial', () => {
        cy.get('[type="radio"]').last().check()
        cy.get('input#weight').type(198);
        cy.get('input#feet').type(6);
        cy.get('input#inches').type(2);
        cy.get('button#calculate').click();
        cy.get('p#bmi-message').should('contain', 'You are Overweight with a BMI of 25.42')
    })
})