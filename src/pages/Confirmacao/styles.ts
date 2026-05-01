import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Card = styled.div`
  background: ${theme.colors.cardBg};
  padding: 50px;
  border-radius: 20px;
  text-align: center;
  max-width: 550px;
  margin: 80px auto;
  border: 1px solid ${theme.colors.border};
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`

export const IconeWrapper = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
  color: ${theme.colors.primary};
`

export const Titulo = styled.h2`
  color: ${theme.colors.primary};
  font-size: 28px;
  margin-bottom: 20px;
`

export const Mensagem = styled.p`
  color: ${theme.colors.textLight};
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
`

export const Botao = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 14px 40px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.primaryDark};
  }
`