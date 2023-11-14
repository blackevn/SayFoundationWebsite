import Image from 'next/image'
import { Achievements, ContactSection, Landing, SecondSection, TeamSection, ThirdSection } from './components'

export default function Home() {
  return (
    <main className="">
      <Landing/>
      <Achievements/>
      <SecondSection/>
      <ThirdSection/>
      <TeamSection/>
      <ContactSection/>
    </main>
  )
}
