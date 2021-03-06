import React from 'react'
import styled from "styled-components"

import Newsletter from '../NetlifyForm/NetlifyForm'

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

export default class HeaderCC extends React.PureComponent {
  render() {
    return (
      <Header pad='small'>
        <Title>
          <Anchor href='/'>Clean Clothes for Dignity</Anchor>
        </Title>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
          <Menu direction='row'>
            <Anchor href='/customers'
              className='active'>
              Customers
            </Anchor>
            <Anchor href='/volunteers'>
              Volunteers
            </Anchor>
            <Anchor href='#' disabled>
              Sponsors
            </Anchor>
            <Anchor href='/contact'>
              Contact
            </Anchor>
          </Menu>
        </Box>
      </Header>
    )
  }
}
