import Image from 'next/image'
import { Achievements, ContactSection, Landing, SecondSection, TeamSection, ThirdSection } from './components'

export default function Home() {
  return (
    <main className=" dark:bg-[#191A26] dark:text-gray-300">
      <Landing/>
      <Achievements/>
      <SecondSection/>
      <ThirdSection/>
      <ContactSection/>
      <TeamSection/>
    </main>
  )
}
