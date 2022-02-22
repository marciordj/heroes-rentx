import { styled } from 'stitches-native';
import { theme } from './global';

export const Container = styled('View', {
  flex: 1,
  backgroundColor: '#FFF',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Text = styled('Text', {
  color: theme.colors.primaryRed
})