import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './style'

import previewImage from '../../assets/app_preview.png'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="lg">
          Conect seu calendario epertmia que as pessoas marquem agendamentos no
          seu tempo livre.
        </Text>
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          alt="Calendário simbolizando aplicação em funcionamento"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
