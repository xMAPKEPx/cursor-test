import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
  background: 'rgba(18, 18, 18, 0.8)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
});

const StyledButton = styled(Button)({
  marginLeft: '2rem',
  color: '#FFFFFF',
  fontSize: '1rem',
  '&:hover': {
    color: '#bb86fc',
    backgroundColor: 'rgba(187, 134, 252, 0.08)',
  },
});

const Logo = styled(Typography)({
  flexGrow: 1,
  color: '#FFFFFF',
  fontWeight: 700,
  letterSpacing: '0.1em',
  fontSize: '1.5rem',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  '&:hover': {
    color: '#bb86fc',
  },
});

function Header() {
  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <RouterLink to="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Logo variant="h6">
              MUSEUM
            </Logo>
          </RouterLink>
          <nav>
            <RouterLink to="/exhibitions" style={{ textDecoration: 'none' }}>
              <StyledButton>
                Выставки
              </StyledButton>
            </RouterLink>
            <RouterLink to="/collections" style={{ textDecoration: 'none' }}>
              <StyledButton>
                Коллекции
              </StyledButton>
            </RouterLink>
            <RouterLink to="/about" style={{ textDecoration: 'none' }}>
              <StyledButton>
                О нас
              </StyledButton>
            </RouterLink>
          </nav>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Header; 