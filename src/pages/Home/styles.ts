import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 50px 0;

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
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  border: 1px solid ${theme.colors.border};
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(6, 221, 8, 0.1);
    border-color: ${theme.colors.primary};
  }
`

export const Imagem = styled.img`
  width: 80%;
  height: 200px;
  object-fit: contain;
`

export const Nome = styled.h3`
  font-size: 22px;
  margin: 8px 0 6px;
  color: ${theme.colors.primary};
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${theme.colors.textLight};
  padding: 0 12px 16px;
  line-height: 1.4;
`

export const Titulo = styled.h1`
  text-align: center;
  margin: 40px 0 5px;
  font-size: 32px;
  color: ${theme.colors.textSecondary};
`