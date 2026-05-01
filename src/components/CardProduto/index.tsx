import * as S from './styles'

type Produto = {
  id: number
  nome: string
  preco: number
}

type Props = {
  produto: Produto
  onAdicionar: () => void
}

const CardProduto = ({ produto, onAdicionar }: Props) => {
  return (
    <S.Card>
      <S.Nome>{produto.nome}</S.Nome>
      <S.Preco>R$ {produto.preco.toFixed(2)}</S.Preco>
      <S.Botao onClick={onAdicionar}>Adicionar</S.Botao>
    </S.Card>
  )
}

export default CardProduto