import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Section = styled.div`
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0px;
  }
`

export {
  Container,
  Section
}