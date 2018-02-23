import React from 'react'
import styled from "styled-components"
import Helmet from 'react-helmet'

import NetlifyContactForm from '../NetlifyContactForm/NetlifyContactForm'
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
          <title>Contact Us - Clean Clothes</title>
        </Helmet>
        <HeaderCC />
        <Hero background={<Image src='/washer-unstyled.jpg'
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
                <Card heading='Get Involved'
                  description='Contact Us'/>
              </Box>
            </Box>
          </Box>
        </Hero>
        <Box pad='large'>
          <Split fixed={false} showOnResponsive='both'>
            <Box colorIndex='light-2'
              justify='center'
              pad='medium'
              textAlign='left'>
              <Heading tag='h3'>Location:</Heading>
              <Anchor href='https://www.google.com/maps/place/Dutch+Girl+Coin+Laundry/@35.5610088,-82.5942075,13z/data=!4m8!1m2!2m1!1sdutch+girl+coin+laundry+asheville+nc!3m4!1s0x0:0xbe6e45b67a0b3599!8m2!3d35.5805465!4d-82.5971031'><Heading tag='h4'>Dutch Girl Coin Laundry</Heading></Anchor>
              <Paragraph>Our volunteers meet Wednesday nights 5 pm – 8 pm at Dutch Girl on Haywood Rd in West Asheville. There, they not only support the homeless, they also get a chance to interact with them, and build a bridge. Do you feel called to help those in need? Join us in this unique opportunity to serve the dignity of those who are often forgotten by volunteering.</Paragraph>
              <Paragraph>Phone: <Anchor href='tel:1-828-367-7538'>(828) 367-7538</Anchor></Paragraph>
            </Box>
            <Box colorIndex='light'
              justify='center'
              align='center'
              pad='medium'>
              <NetlifyContactForm />
            </Box>
          </Split>
        </Box>
        <FooterCC />
      </App>
    )
  }
}
