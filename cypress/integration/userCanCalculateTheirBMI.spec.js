describe('BMI Calculator', () => {
    it('calculates BMI in metric', () => {
        cy.visit('/')
        cy.get('input#weight').type(90);
        cy.get('input#height').type(200);
        cy.get('button#calculate').click();
        cy.get('p#bmi-message').should('contain', 'You are normal with a BMI of 22.5')
    })
})