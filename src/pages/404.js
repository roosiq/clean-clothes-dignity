import React from 'react'
import Split from 'grommet/components/Split'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Anchor from 'grommet/components/Anchor'

export default () => (
  <Split flex="left" separator>
    <Article>
      <Section
        full
        colorIndex="light"
        pad="large"
        justify="center"
        align="center"
      >
        <Heading tag="h1"><strong>404</strong></Heading>
        <Paragraph>Sorry this page doesn't exist yet. <Anchor href='/'>Click Here</Anchor> to go back home.</Paragraph>
      </Section>
    </Article>
  </Split>
)
