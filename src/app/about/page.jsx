'use client'

import PageTitle from '@/components/PageTitle'
import Vision from '@/containers/About/vision'
import History from '@/containers/About/History'
import CoreCompetence from '@/containers/About/CoreCompetence'
import ContactUs from '@/containers/About/ContactUs'
import about_01 from '../../../public/images/about/about_01.png'

export default function About() {
  return (
    <div className="flex w-full flex-col items-center">
      <PageTitle
        bg={about_01}
        title={'About'}
        textSizeClassName="text-headXL-bold"
      />
      <div className="flex flex-col items-center justify-center lg:mx-24">
        <Vision />
        <History />
      </div>
      <CoreCompetence />
      <ContactUs />
    </div>
  )
}
