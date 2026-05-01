import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Container } from '../../components/Container'
import { FiCreditCard, FiArrowLeft, FiCheckCircle } from 'react-icons/fi'
import { theme } from '../../styles/theme'
import {
  formatarNumeroCartao, 
  formatarValidade, 
  formatarCVV,
  validarNumeroCartao,
  validarValidade,
  validarCVV
} from '../../utils/validators'
import * as S from './styles'

const Pagamento = () => {
  const navigate = useNavigate()
  const { itens } = useSelector((state: RootState) => state.carrinho)
  const total = itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0)

  const [cartao, setCartao] = useState({
    nome: '',
    numero: '',
    validade: '',
    cvv: ''
  })

  const handleNumeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = formatarNumeroCartao(e.target.value)
    setCartao({...cartao, numero: valor})
  }

  const handleValidadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = formatarValidade(e.target.value)
    setCartao({...cartao, validade: valor})
  }

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = formatarCVV(e.target.value)
    setCartao({...cartao, cvv: valor})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validarNumeroCartao(cartao.numero)) {
      alert('Número do cartão inválido! Digite 16 números.')
      return
    }
    
    if (!validarValidade(cartao.validade)) {
      alert('Data de validade inválida! Verifique mês/ano.')
      return
    }
    
    if (!validarCVV(cartao.cvv)) {
      alert('CVV inválido! Digite 3 números.')
      return
    }
    
    if (!cartao.nome.trim()) {
      alert('Digite o nome impresso no cartão!')
      return
    }
    
    localStorage.setItem('pagamento', JSON.stringify(cartao))
    navigate('/confirmacao')
  }

  return (
    <Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Titulo>
          <FiCreditCard size={28} color={theme.colors.primary} />
          Pagamento
        </S.Titulo>
        <S.Total>Total: R$ {total.toFixed(2)}</S.Total>
        <S.Input placeholder="Nome no cartão" value={cartao.nome} onChange={e => setCartao({...cartao, nome: e.target.value})} required />
        <S.Input placeholder="Número do cartão" value={cartao.numero} onChange={handleNumeroChange} maxLength={19} required />
        <S.Row>
          <S.Input placeholder="Validade (MM/AA)" value={cartao.validade} onChange={handleValidadeChange} maxLength={5} required />
          <S.Input placeholder="CVV" type="password" value={cartao.cvv} onChange={handleCVVChange} maxLength={3} required />
        </S.Row>
        <S.Botoes>
          <S.BotaoVoltar type="button" onClick={() => navigate('/entrega')}>
            <FiArrowLeft size={18} /> Voltar
          </S.BotaoVoltar>
          <S.BotaoFinalizar type="submit">
            Finalizar pedido <FiCheckCircle size={18} />
          </S.BotaoFinalizar>
        </S.Botoes>
      </S.Form>
    </Container>
  )
}

export default Pagamento