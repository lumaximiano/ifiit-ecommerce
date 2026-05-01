import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import logo from '../../assets/images/ifiit-logo-verde.png'
import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterBar>
      <S.FooterContent>
        <S.LogoFooter>
          <S.LogoImg src={logo} alt="iFiit Logo" />
        </S.LogoFooter>
        <S.Texto>
          <p>© 2026 iFiit. Todos os direitos reservados.</p>
          <p>Comida saudável que cabe no seu bolso e no seu estilo de vida.</p>
        </S.Texto>
        <S.Redes>
          <FaInstagram size={24} />
          <FaTwitter size={24} />
          <FaFacebook size={24} />
          <FaWhatsapp size={24} />
        </S.Redes>
      </S.FooterContent>
    </S.FooterBar>
  )
}

export default Footer