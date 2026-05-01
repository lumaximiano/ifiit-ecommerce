import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Form = styled.form`
  background: ${theme.colors.cardBg};
  padding: 40px;
  border-radius: 20px;
  max-width: 600px;
  margin: 60px auto;
  border: 1px solid ${theme.colors.border};
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.background};
  color: ${theme.colors.textSecondary};
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`

export const Row = styled.div`
  display: flex;
  gap: 20px;
`

export const Titulo = styled.h2`
  color: ${theme.colors.textSecondary};
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Total = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  padding: 15px;
  background: ${theme.colors.background};
  border-radius: 12px;
  color: ${theme.colors.highlight};
`

export const Botoes = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`

export const BotaoVoltar = styled.button`
  background: transparent;
  border: 2px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  padding: 14px;
  border-radius: 40px;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: ${theme.colors.primary};
    color: white;
  }
`

export const BotaoFinalizar = styled.button`
  background: ${theme.colors.primary};
  border: none;
  color: white;
  padding: 14px;
  border-radius: 40px;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: ${theme.colors.primaryDark};
  }
`