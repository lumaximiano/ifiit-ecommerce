import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 30px 0;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  background: ${theme.colors.cardBg};
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${theme.colors.border};
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
`

export const Imagem = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`

export const Info = styled.div`
  padding: 12px;
`

export const Nome = styled.h3`
  font-size: 15px;
  margin-bottom: 6px;
  color: ${theme.colors.textSecondary};
`

export const Descricao = styled.p`
  font-size: 12px;
  color: ${theme.colors.textLight};
  margin-bottom: 10px;
  line-height: 1.3;
`

export const Preco = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.highlight};
  margin: 8px 0;
`

export const Botao = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 8px;
  border-radius: 25px;
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.primaryDark};
  }
`

export const Voltar = styled.button`
  background: transparent;
  border: 2px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  padding: 8px 20px;
  border-radius: 30px;
  margin: 20px 0 15px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background: ${theme.colors.primary};
    color: white;
  }
`

export const Titulo = styled.h1`
  font-size: 28px;
  margin: 20px 0;
  color: ${theme.colors.textSecondary};
  text-align: center;
`