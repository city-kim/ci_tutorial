describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('h1 태그의 텍스트를 검사한다', () => {
    cy.contains('h1', 'Home')
  })

  it('h2 태그는 기본적으로 비어있다', () => {
    cy.get('h2').should('have.text', '')
  })

  describe('button의 액션을 검사한다', () => {
    it('button hover시 배경색이 변경된다', () => {
      const button = cy.get('button').eq(0)
      button.trigger('mouseover')
      button.should('have.css', 'background-color', 'rgb(240, 240, 240)')
    })

    it('button 클릭시 active 클래스가 적용된다', () => {
      cy.get('button').eq(0).click()
      cy.get('button').eq(0).should('have.class', 'active')
      cy.get('button').eq(1).click()
      cy.get('button').eq(1).should('have.class', 'active')
      cy.get('button').eq(2).click()
      cy.get('button').eq(2).should('have.class', 'active')
      cy.get('button').eq(3).click()
      cy.get('button').eq(3).should('have.class', 'active')
    })

    it('button 클릭시 해당 key로 h2의 값이 변경된다', () => {
      cy.get('button').eq(0).click()
      cy.get('h2').should('have.text', 'button1')
      cy.get('button').eq(1).click()
      cy.get('h2').should('have.text', 'button2')
      cy.get('button').eq(2).click()
      cy.get('h2').should('have.text', 'button3')
      cy.get('button').eq(3).click()
      cy.get('h2').should('have.text', 'button4')
    })

  })
})
