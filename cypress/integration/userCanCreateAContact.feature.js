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
        })
})