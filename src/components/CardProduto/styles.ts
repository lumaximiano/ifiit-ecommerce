import styled from 'styled-components'

export const Card = styled.div`
  background: #1a1a2e;
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

export const Nome = styled.h3`
  margin-bottom: 10px;
`

export const Preco = styled.p`
  color: #ffcc00;
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`

export const Botao = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: #218838;
  }
`