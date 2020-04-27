describe('BMI Calculator', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('calculates BMI in metric', () => {
        cy.get('select#select-method').select('metric');
        cy.get('input#weight').type(90);
        cy.get('input#height').type(200);
        cy.get('button#calculate').click();
        cy.get('p#bmi-message').should('contain', 'You are Normal with a BMI of 22.50')
    })
    it('calculates BMI in imperial', () => {
        cy.get('select#select-method').select('imperial');
        cy.get('input#weight').type(198);
        cy.get('input#feet').type(6);
        cy.get('input#inches').type(2);
        cy.get('button#calculate').click();
        cy.get('p#bmi-message').should('contain', 'You are Overweight with a BMI of 25.42')
    })
})