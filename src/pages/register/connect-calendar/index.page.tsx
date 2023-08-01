import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ConnectBox, ConnectItem } from './style'
import { ArrowRight } from 'phosphor-react'
import { Container, Header } from '../style'
import { signIn, useSession } from 'next-auth/react'

export default function Register() {
  const session = useSession()

  // async function handleRegister(data: RegisterFormData) {}
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text> Google Calendar </Text>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Text>{JSON.stringify(session.data)}</Text>
        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
