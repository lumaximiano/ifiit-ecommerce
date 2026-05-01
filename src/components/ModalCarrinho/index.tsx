import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { remover, aumentar, diminuir, toggleCarrinho } from '../../store/carrinhoSlice'
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import * as S from './styles'

const ModalCarrinho = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { itens, aberto } = useSelector((state: RootState) => state.carrinho)

  const total = itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0)

  const handleFinalizar = () => {
    dispatch(toggleCarrinho())
    navigate('/entrega')
  }

  if (!aberto) return null

  return (
    <S.Overlay onClick={() => dispatch(toggleCarrinho())}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.Fechar onClick={() => dispatch(toggleCarrinho())}>
          <FiX size={20} />
        </S.Fechar>
        <S.Titulo>Meu Pedido</S.Titulo>

        {itens.length === 0 ? (
          <S.EmptyCart>Seu carrinho está vazio</S.EmptyCart>
        ) : (
          <>
            {itens.map(item => (
              <S.Item key={item.id}>
                <S.Info>
                  <S.Nome>{item.nome}</S.Nome>
                  <S.Preco>R$ {item.preco.toFixed(2)}</S.Preco>
                </S.Info>
                <S.Quantidade>
                  <S.BotaoQtd onClick={() => dispatch(diminuir(item.id))}>
                    <FiMinus size={12} />
                  </S.BotaoQtd>
                  <span>{item.quantidade}</span>
                  <S.BotaoQtd onClick={() => dispatch(aumentar(item.id))}>
                    <FiPlus size={12} />
                  </S.BotaoQtd>
                  <S.BotaoRemover onClick={() => dispatch(remover(item.id))}>
                    <FiTrash2 size={16} />
                  </S.BotaoRemover>
                </S.Quantidade>
              </S.Item>
            ))}
            <S.Total>Total: R$ {total.toFixed(2)}</S.Total>
            <S.BotaoFinalizar onClick={handleFinalizar}>
              Continuar com entrega
            </S.BotaoFinalizar>
          </>
        )}
      </S.Container>
    </S.Overlay>
  )
}

export default ModalCarrinho