import { useSelector, useDispatch } from 'react-redux'
import { FiShoppingBag } from 'react-icons/fi'
import { RootState } from '../../store'
import { toggleCarrinho } from '../../store/carrinhoSlice'
import logo from '../../assets/images/ifiit-logo.png'
import * as S from './styles'
import { theme } from '../../styles/theme'

const Header = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootState) => state.carrinho)
  const total = itens.reduce((acc, item) => acc + item.quantidade, 0)

  return (
    <S.HeaderBar>
      <S.HeaderContent>
        <S.LogoArea onClick={() => window.location.href = '/'}>
          <S.LogoImg src={logo} alt="iFit Logo" />
        </S.LogoArea>
        <S.Carrinho onClick={() => dispatch(toggleCarrinho())}>
          <FiShoppingBag size={22} color= {theme.colors.textSecondary} />
          {total > 0 && <S.Contador>{total}</S.Contador>}
        </S.Carrinho>
      </S.HeaderContent>
    </S.HeaderBar>
  )
}

export default Header