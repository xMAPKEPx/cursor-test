import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCardMedia = styled(CardMedia)<{ hasimage: string; height?: number }>(({ hasimage, height = 400 }) => ({
  height,
  backgroundSize: 'cover',
  backgroundColor: hasimage === 'true' ? 'transparent' : '#e0e0e0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: hasimage === 'true' ? 'none' : '"MUSEUM"',
    fontSize: '2rem',
    color: '#9e9e9e',
    fontWeight: 'bold',
  },
})); 