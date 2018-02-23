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
          <title>Customers - Clean Clothes</title>
        </Helmet>
        <HeaderCC />
        <Hero background={<Image src='/backpack.jpg'
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
                <Card heading='Customers'
                  description='The Impact'/>
              </Box>
            </Box>
          </Box>
        </Hero>
        <Section pad='large'>
          <Box direction='row' separator='top' pad={{ vertical: 'large' }}>
            <Card
              heading='Cheri' />
            <Box textAlign='left'>
              <Paragraph size='large'>I truly thank Clean Clothes for their outstanding and liberating selfless service that they have provided through Jesus Christ. They have helped me in friendship, companionship and to have clean clothes.</Paragraph>
              <Paragraph size='large'>Being homeless is very tiresome and requires a lot of work. However, alot of people throw the clothes away once they are worn. In turn this is not good for our environment or community.
Clean Clothes has help reduce waste and has allowed us to keep reusing the clothes we enjoy.</Paragraph>
            </Box>
          </Box>
          <Box direction='row' separator='top' pad={{ vertical: 'large' }}>
            <Card
              heading='Bret'/>
            <Box textAlign='left'>
              <Paragraph size='large'>I can tell you it is really really inconvenient and unfortunate to not have clean clothes. And it's also really uncool to have a pair of jeans, get them filthy, throw them out, and get a new pair of jeans. Hence, the fabulousness of the Dutch Girl and your and all your volunteers' service. I really do thank you.</Paragraph>
            </Box>
          </Box>
        </Section>
        <FooterCC />
      </App>
    )
  }
}
