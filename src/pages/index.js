import Head from 'next/head'
import { Inter } from '@next/font/google'
import Hero from '@/components/Hero'
import { SliderData } from '@/components/SliderData'
import Slider from '@/components/Slider'
import Instagram from '@/components/Instagram'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wait Network</title>
        <meta name="description" content="Wait Network 2.0 is a Minecraft Network. 我們一起走向2.0 等待你的加入" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Wait Network' message='We have came to 2.0 not. We are waiting for your join!' />
      <Slider slides={SliderData}/>
      <Instagram />
    </div>
  )
}
