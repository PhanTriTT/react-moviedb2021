import React from 'react'
import { Link } from 'react-router-dom'
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'
import { Wrapper, Content, LogoImage, TMDBLogoImg } from './Header.styles'

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <LogoImage src={RMDBLogo} alt='rmdb-logo'></LogoImage>
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'></TMDBLogoImg>
      </Content>
    </Wrapper>
  )
}
