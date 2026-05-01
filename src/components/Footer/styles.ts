import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const FooterBar = styled.footer`
  background: ${theme.colors.surface};
  text-align: center;
  padding: 40px 20px;
  margin-top: auto;
  border-top: 1px solid ${theme.colors.border};
`

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`

export const LogoFooter = styled.div`
  margin-bottom: 15px;
`

export const LogoImg = styled.img`
  height: 100px;
  width: 200px;
  object-fit: contain;
`

export const Texto = styled.div`
  color: ${theme.colors.textLight};
  font-size: 14px;
  line-height: 1.6;
  
  p {
    margin: 4px 0;
  }
`

export const Redes = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 15px;

  svg {
    cursor: pointer;
    transition: all 0.3s;
    color: ${theme.colors.textLight};
    font-size: 20px;

    &:hover {
      color: ${theme.colors.primary};
      transform: translateY(-3px);
    }
  }
`