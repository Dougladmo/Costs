import { render, screen, fireEvent, findByText } from "@testing-library/react"
import App from './App'
import NewProject from "./components/pages/NewProject"
describe('Pages between navigation', () => {
  it('should change to Contact page', () => {
    render(<App/>)

    const navButton = screen.getByText(/contato/i)

    fireEvent.click(navButton)

    screen.findByText(/contact/i)
  })
  it('should change to About page', () => {
    render(<App/>)

    const navButton = screen.getByText(/sobre/i)

    fireEvent.click(navButton)

    screen.findByText(/Sobre nós/i)
  })
   it('should change to projects page', () => {
    render(<App/>)

    const navButton = screen.getByText(/projetos/i)

    fireEvent.click(navButton)

    screen.findByText(/meus projetos/i)
  })
   it('should change to home page', () => {
    render(<App/>)

    const navButton = screen.getByText(/home/i)

    fireEvent.click(navButton)

    screen.findByText(/Bem-vindo ao Costs/i)
  })
  it('should change to new project page', () => {
    render(<App/>)

    const navButton = screen.getByText(/criar projeto/i)
    fireEvent.click(navButton)

    screen.findByText(/criar projeto/i)
  })
})