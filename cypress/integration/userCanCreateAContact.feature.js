describe ('user can create a contact', () => {
        it ('test', () => {
            cy.visit ('http://localhost:3001')
            cy.get ('#add-contact').click()
            cy.get ('#name').type('Felix')
            cy.get ('#email').type('fwlixw@gmail.com')
            cy.get ('#phone').type('0708574340')
            cy.get ('#company').type('Craft Academy')
            cy.get ('#notes').type('Hey hey hey')
            cy.get ('#twitter').type('@felixoppongwillborg')
            cy.get ('#submit').click()
        })
        it ('displays a name of the new contact', () => {
            cy.get ('#contact-list').should('contain', 'Felix')
        })
        it ('displays the phone number of the new contact', () =>{
            cy.get ('#contact-list').should('contain', '0708574340')
        })
})