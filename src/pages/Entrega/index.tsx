import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '../../components/Container'
import { FiMapPin, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { theme } from '../../styles/theme'
import { apenasNumeros, formatarCEP, validarCEP } from '../../utils/validators'
import * as S from './styles'

const Entrega = () => {
  const navigate = useNavigate()
  const [endereco, setEndereco] = useState({
    nome: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    cep: ''
  })

  const handleNumeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = apenasNumeros(e.target.value)
    setEndereco({...endereco, numero: valor})
  }

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = formatarCEP(e.target.value)
    setEndereco({...endereco, cep: valor})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validarCEP(endereco.cep)) {
      alert('CEP inválido! Digite 8 números.')
      return
    }
    
    if (!endereco.numero) {
      alert('Digite o número do endereço!')
      return
    }
    
    localStorage.setItem('endereco', JSON.stringify(endereco))
    navigate('/pagamento')
  }

  return (
    <Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Titulo>
          <FiMapPin size={28} color={theme.colors.primary} />
          Onde você quer receber?
        </S.Titulo>
        <S.Input placeholder="Nome completo" value={endereco.nome} onChange={e => setEndereco({...endereco, nome: e.target.value})} required />
        <S.Input placeholder="Rua / Avenida" value={endereco.rua} onChange={e => setEndereco({...endereco, rua: e.target.value})} required />
        <S.Input placeholder="Número" value={endereco.numero} onChange={handleNumeroChange} required />
        <S.Input placeholder="Bairro" value={endereco.bairro} onChange={e => setEndereco({...endereco, bairro: e.target.value})} required />
        <S.Input placeholder="Cidade" value={endereco.cidade} onChange={e => setEndereco({...endereco, cidade: e.target.value})} required />
        <S.Input placeholder="CEP" value={endereco.cep} onChange={handleCEPChange} maxLength={9} required />
        <S.Botoes>
          <S.BotaoVoltar type="button" onClick={() => navigate('/')}>
            <FiArrowLeft size={18} /> Voltar
          </S.BotaoVoltar>
          <S.BotaoContinuar type="submit">
            Continuar <FiArrowRight size={18} />
          </S.BotaoContinuar>
        </S.Botoes>
      </S.Form>
    </Container>
  )
}

export default Entrega