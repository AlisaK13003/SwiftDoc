import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Get started with Acorn."
        content="Skip the lengthy documentation—get concise summaries and start developing faster."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
