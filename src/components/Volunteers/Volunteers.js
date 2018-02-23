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
import Carousel from 'grommet/components/Carousel';
import SocialShare from 'grommet/components/SocialShare';

export default class Volunteers extends React.PureComponent {
  render() {
    return (
      <App>
        <HeaderCC />
        <Helmet>
          <title>Volunteers - Clean Clothes</title>
        </Helmet>
        <Box size={{height: 'large', width: {max: 'full'}}}>
          <Carousel>
            <Image src='/slide-1.jpg' />
            <Image src='/slide-2.jpg' />
            <Image src='/slide-3.jpg' />
          </Carousel>
        </Box>
        <Section pad='large'>
          <Box direction='row' separator='top' pad={{ vertical: 'large' }}>
            <Card thumbnail='/mary-square.jpg' pad='large'
              heading='Mary Sevier'
              description='Founder' />
            <Box textAlign='left' pad='large'>
              <Paragraph size='large'>Clean Clothes for Dignity provides funds and soap for the homeless to do laundry. More than that, they restore the dignity of the homeless. Homeless people often lack clean clothing, which can make them feel ashamed and cut off from society.</Paragraph>
            </Box>
          </Box>
          <Box direction='row' separator='top' pad={{ vertical: 'large' }}>
            <Card pad='large'
              heading='Robert'
              description='Volunteer' />
            <Box textAlign='left' pad='large'>
              <Paragraph size='large'>Clean Clothes helps those unable to have clean clothes due to homelessness or lack of funds. Having clean clothes helps them with finding jobs and in turn going from homelessness to an employed and contributing citizen. As a volunteer I have been blessed to meet some of the most giving and selfless individuals ever. I have learned to understand people better and I have seen some of the most selfless acts from these individuals who have nothing. We should all take time and help our spiritual siblings.</Paragraph>
            </Box>
          </Box>
        </Section>
        <FooterCC />
      </App>
    )
  }
}
