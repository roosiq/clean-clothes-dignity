import React from 'react'
import styled from "styled-components"
import Helmet from 'react-helmet'

import Newsletter from '../NetlifyForm/NetlifyForm'
import FooterCC from '../FooterCC/FooterCC'
import HeaderCC from '../HeaderCC/HeaderCC'

import Iframe from 'react-iframe'
import Split from 'grommet/components/Split'
import App from 'grommet/components/App'
import Sidebar from 'grommet/components/Sidebar'
import LoginForm from 'grommet/components/LoginForm'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Footer from 'grommet/components/Footer'
import Logo from 'grommet/components/icons/Grommet'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Quote from 'grommet/components/Quote'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Image from 'grommet/components/Image'
import Headline from 'grommet/components/Headline'
import Button from 'grommet/components/Button'
import SocialFacebook from 'grommet/components/icons/base/SocialFacebook'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import Hero from 'grommet/components/Hero'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import TextInput from 'grommet/components/TextInput'
import NumberInput from 'grommet/components/NumberInput'
import SVGIcon from 'grommet/components/SVGIcon'
import Toast from 'grommet/components/Toast';
import SocialShare from 'grommet/components/SocialShare';

export default class Customers extends React.PureComponent {
  render() {
    return (
      <App>
        <Helmet>
          <title>Our Story - Clean Clothes</title>
        </Helmet>
        <HeaderCC />
        <Hero background={<Image src='/volunteer.jpg'
          fit='cover'
          full={true} />}
          backgroundColorIndex='dark'>
          <Box direction='row'
            justify='center'
            align='center'>
            <Box basis='1/2'
              align='end'
              pad='medium' />
            <Box basis='1/2'
              align='start'
              pad='medium'>
              <Box colorIndex='grey-2-a'>
                <Card heading='Our Story'
                  description='Est. 2016'/>
              </Box>
            </Box>
          </Box>
        </Hero>
        <Section pad='large'>
          <Box align='center' separator='top' pad={{ vertical: 'large' }}>
            <Heading tag='h1'>About</Heading>
            <Paragraph>Clean Clothes for Asheville was born January 27th 2016, when Mary Sevier and some friends set up at the Dutch Girl Laundromat in Asheville, NC with quarters and supplies for homeless men and women to clean their clothes. They expected no one that first evening and were surprised when ten people showed up for help, letting Mary know she had started a good thing.</Paragraph>
            <Paragraph>Mary knew from volunteering with AHope, a local homeless day center, that there was a need for a  practical and accessible way for the homeless of Asheville to clean their clothes. After months of brainstorming, the simple idea of setting up at a laundromat once a week came to her. And since that January night, Clean Clothes for Asheville has been on hand to do just that every Wednesday night from 5:00pm – 8:00 pm at the Dutch Girl Coin Laundromat on Haywood Rd in West Asheville.</Paragraph>
            <Paragraph>Since that first night, hundreds of homeless have received aid from Clean Clothes for Asheville to clean their clothes. Among our favorite stories are when the unemployed feel dignified to go to job interviews because of having a set of clothes we helped clean, and we’ve had several come back successfully employed! Volunteers offer assistance and engage with the marginalized of our society making community connections between neighbors, house and unhoused.</Paragraph>
            <Paragraph>Mary felt challenged to reach out to the homeless with Mercy by the teachings and actions of Pope Francis, and was inspired to start her own outreach by her grandmother, Marie Sevier, who continuously was starting projects to serve the basic needs of the poor. Marie showed Mary how making small contributions to society can snowball into large changes over time. She hopes that as she continues with her grandmother’s work, other people will see the same thing and start their own projects.</Paragraph>
            <Newsletter />
          </Box>
        </Section>

        <FooterCC />
      </App>
    )
  }
}
