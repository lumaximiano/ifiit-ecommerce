import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
`

export const Container = styled.div`
  background: white;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  padding: 25px;
  overflow-y: auto;
  box-shadow: -4px 0 20px rgba(0,0,0,0.1);
`

export const Titulo = styled.h2`
  color: ${theme.colors.textSecondary};
  margin-bottom: 25px;
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
`

export const Info = styled.div`
  flex: 1;
`

export const Nome = styled.p`
  font-weight: 600;
  color: ${theme.colors.textSecondary};
  margin-bottom: 5px;
`

export const Preco = styled.p`
  color: ${theme.colors.highlight};
  font-size: 14px;
  font-weight: bold;
`

export const Quantidade = styled.div`
  color: ${theme.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 10px;
`

export const BotaoQtd = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${theme.colors.primaryDark};
  }
`

export const BotaoRemover = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: ${theme.colors.danger};
  margin-left: 10px;

  &:hover {
    opacity: 0.7;
  }
`

export const Total = styled.div`
  padding: 20px 0;
  font-size: 22px;
  font-weight: bold;
  text-align: right;
  border-top: 2px solid #eee;
  margin-top: 20px;
  color: ${theme.colors.textSecondary};
`

export const BotaoFinalizar = styled.button`
  background: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 15px;
  border-radius: 40px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.primaryDark};
  }
`

export const Fechar = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  float: right;
  cursor: pointer;
  color: ${theme.colors.textLight};

  &:hover {
    color: ${theme.colors.danger};
  }
`

export const EmptyCart = styled.p`
  text-align: center;
  color: ${theme.colors.textLight};
  padding: 40px 0;
  font-size: 16px;
`