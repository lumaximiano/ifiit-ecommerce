import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container } from '../../components/Container'
import { adicionar } from '../../store/carrinhoSlice'
import * as S from './styles'

import smothieImg from '../../assets/images/smoothie_bowl_with_a_a_banana.png'
import paoAbacateImg from '../../assets/images/bread_with_avocado_and_cherry.png'
import panquecaImg from '../../assets/images/pancakes_with_honey_and_red_berries..png'

import saladaImg from '../../assets/images/caesar_salad_with_grilled_chicken.png'
import frangoQuinoaImg from '../../assets/images/chicken_with_royal_quinoa_and_saut_ed.png'
import peixeDoceImg from '../../assets/images/fish_with_sweet_potato_puree_featuring.png'

import wrapFrangoImg from '../../assets/images/chicken_wrap_with_whole_wheat_tortilla.png'
import bowlGraosImg from '../../assets/images/bowl_with_brown_rice_beans.png'
import sanduicheVeganoImg from '../../assets/images/vegan_natural_sandwich_with_whole_grain.png'

const produtosPorCategoria: Record<string, any[]> = {
  cafe: [
    { id: 1, nome: 'Smoothie Bowl de Frutas', preco: 24.90, imagem: smothieImg, descricao: 'Açaí, banana, morango, granola e mel.' },
    { id: 2, nome: 'Pão Integral com Abacate', preco: 18.90, imagem: paoAbacateImg, descricao: 'Pão 100% integral, abacate e tomate cereja.' },
    { id: 3, nome: 'Panqueca de Aveia com Mel', preco: 22.90, imagem: panquecaImg, descricao: 'Panquecas de aveia com mel e frutas vermelhas.' }
  ],
  almoco: [
    { id: 4, nome: 'Salada Caesar Fit', preco: 32.90, imagem: saladaImg, descricao: 'Frango grelhado, alface, parmesão light.' },
    { id: 5, nome: 'Frango com Quinoa Real', preco: 35.90, imagem: frangoQuinoaImg, descricao: 'Filé de frango, quinoa, legumes salteados.' },
    { id: 6, nome: 'Peixe com Purê de Batata Doce', preco: 38.90, imagem: peixeDoceImg, descricao: 'Salmão grelhado, purê de batata doce.' }
  ],
  lanche: [
    { id: 7, nome: 'Wrap de Frango', preco: 24.90, imagem: wrapFrangoImg, descricao: 'Tortilla integral, frango, alface e molho iogurte.' },
    { id: 8, nome: 'Bowl de Grãos', preco: 28.90, imagem: bowlGraosImg, descricao: 'Arroz integral, feijão, abacate e tomate.' },
    { id: 9, nome: 'Sanduíche Natural Vegano', preco: 26.90, imagem: sanduicheVeganoImg, descricao: 'Pão integral, pasta de grão-de-bico, rúcula.' }
  ]
}

const nomesCategoria: Record<string, string> = {
  cafe: 'Café da Manhã Fit',
  almoco: 'Almoço Saudável',
  lanche: 'Lanches Nutritivos'
}

const Categoria = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const produtos = produtosPorCategoria[id as string] || []

  return (
    <Container>
      <S.Voltar onClick={() => navigate('/')}>← Voltar</S.Voltar>
      <S.Titulo>{nomesCategoria[id as string] || id}</S.Titulo>
      <S.Grid>
        {produtos.map(produto => (
          <S.Card key={produto.id}>
            <S.Imagem src={produto.imagem} alt={produto.nome} />
            <S.Info>
              <S.Nome>{produto.nome}</S.Nome>
              <S.Descricao>{produto.descricao}</S.Descricao>
              <S.Preco>R$ {produto.preco.toFixed(2)}</S.Preco>
              <S.Botao onClick={() => dispatch(adicionar({ ...produto, quantidade: 1 }))}>
                Adicionar
              </S.Botao>
            </S.Info>
          </S.Card>
        ))}
      </S.Grid>
    </Container>
  )
}

export default Categoria