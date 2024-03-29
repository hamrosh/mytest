import styled from 'styled-components';

const color = 'blue';
const Button = styled.button`
  color: ${props => props.color};
  background: ${color};
  font-size: ${props => (props.big ? '4rem' : '2rem')};
  padding: 1rem;
  margin: 1rem;
`;

export default Button;
