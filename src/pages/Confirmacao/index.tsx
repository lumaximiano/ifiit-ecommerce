import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { limpar } from '../../store/carrinhoSlice'
import { Container } from '../../components/Container'
import { FiCheckCircle } from 'react-icons/fi'
import * as S from './styles'

const Confirmacao = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleConcluir = () => {
    dispatch(limpar())
    navigate('/')
  }

  return (
    <Container>
      <S.Card>
        <S.IconeWrapper>
          <FiCheckCircle size={64} />
        </S.IconeWrapper>
        <S.Titulo>Pedido Confirmado!</S.Titulo>
        <S.Mensagem>
          Seu pedido foi recebido com sucesso!
          <br /><br />
          Tempo médio de entrega: 40-60 minutos.
        </S.Mensagem>
        <S.Botao onClick={handleConcluir}>Voltar ao início</S.Botao>
      </S.Card>
    </Container>
  )
}

export default Confirmacao