import { useNavigate } from 'react-router-dom'
import { Container } from '../../components/Container'
import * as S from './styles'

import cafeImg from '../../assets/images/cafe.png'
import almocoImg from '../../assets/images/almoco.png'
import lancheImg from '../../assets/images/lanche.png'

const categorias = [
  {
    id: 'cafe',
    nome: 'Café da Manhã',
    imagem: cafeImg,
    descricao: 'Energia para começar o dia'
  },
  {
    id: 'almoco',
    nome: 'Almoço',
    imagem: almocoImg,
    descricao: 'Pratos saudáveis e saborosos'
  },
  {
    id: 'lanche',
    nome: 'Lanches',
    imagem: lancheImg,
    descricao: 'Perfeito para qualquer hora'
  }
]

const Home = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <S.Titulo>Sua vida mais saudável começa aqui</S.Titulo>
      <S.Grid>
        {categorias.map(cat => (
          <S.Card key={cat.id} onClick={() => navigate(`/categoria/${cat.id}`)}>
            <S.Imagem src={cat.imagem} alt={cat.nome} />
            <S.Nome>{cat.nome}</S.Nome>
            <S.Descricao>{cat.descricao}</S.Descricao>
          </S.Card>
        ))}
      </S.Grid>
    </Container>
  )
}

export default Home