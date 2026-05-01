import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const HeaderBar = styled.header`
  background: ${theme.colors.primary};
  padding: 10px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;    /* ← ADICIONAR ESTA LINHA */
  top: 0;              /* ← ADICIONAR ESTA LINHA */
  z-index: 1000;       /* ← ADICIONAR ESTA LINHA */
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoArea = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  height: 80px;
  width: auto;
  object-fit: contain;
`

export const Carrinho = styled.div`
  cursor: pointer;
  position: relative;
  background: ${theme.colors.background};
  padding: 15px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 5px;
`

export const Contador = styled.span`
  background: ${theme.colors.danger};
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 12px;
  position: absolute;
  top: -10px;
  right: -10px;
  color: white;
  font-weight: bold;
`