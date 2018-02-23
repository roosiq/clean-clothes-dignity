import React from 'react'
import styled from "styled-components"
import Helmet from 'react-helmet'

import Newsletter from '../NetlifyForm/NetlifyForm'
import FooterCC from '../FooterCC/FooterCC'

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


export default class Homepage extends React.PureComponent {
  render() {
    return (
      <Article scrollStep id='grad'>
        <Helmet>
          <title>Clean Clothes | Volunteer Laundry Service For The Homeless</title>
        </Helmet>
        <Article texture='./hero.png' className='hero' pad={{ vertical: 'small' }} margin={{ top: 'large'}}>
          <Section justify='center' align='center' textAlign='center' pad={{ vertical: 'xlarge', horizontal: 'small' }}>
            <Heading tag='h1' align='center'><strong>Clean Clothes for Dignity</strong></Heading>
            <Heading tag='h3' align='center'>Volunteer Laundry Service For The Homeless</Heading>
            <Paragraph className='small-text'>Clean Clothes is a program set up to unite two communities. It provides the means for the homeless to do their laundry. Volunteers set up in local laundromats with quarters and laundry soap and the homeless bring their clothing to be washed.</Paragraph>
            <Section pad={{ vertical: 'large' }}>
              <Menu direction='row' size='small' justify='between' responsive={false} pad={{ vertical: 'large'}}>
                <Anchor label='Customers' href="/customers"></Anchor>
                <Anchor label='Volunteers' href="/volunteers"></Anchor>
                <Anchor label="Sponsors" href="#" disabled></Anchor>
                <Anchor label="Contact" href="/contact"></Anchor>
              </Menu>
            </Section>
          </Section>
        </Article>
        <Article full>
          <Box justify='center' align='center' direction='row' flex>
            <Box>
              <Image
                fit='contain'
                src='./2.png' />
            </Box>
            <Card heading='More than laundry'
              textAlign='left'
              link={<Anchor href='/our-story'
              label='Our Story' icon={ <LinkNext />}/>}>
              <Paragraph>Clean Clothes for Dignity provides funds and soap for the homeless to do laundry. More than that, they restore the dignity of the homeless. Homeless people often lack clean clothing, which can make them feel ashamed and cut off from society.</Paragraph>
            </Card>
          </Box>
        </Article>
        <Article full>
          <Box justify='center' align='center' direction='row' flex reverse>
            <Box>
              <Image
                fit='contain'
                src='./1.png' />
            </Box>
            <Card heading='A fresh start'
              textAlign='left'
              link={<Anchor href='/customers'
              label='Customer Stories' icon={ <LinkNext />}/>}>
              <Paragraph>A clean pair of clothes is a fresh start. Clean clothes makes it possible for a homeless person to find a job, participate in society, feel like a person again, and helps remove the outward signs of homelessness that so often stigmatizes them.</Paragraph>
            </Card>
          </Box>
        </Article>
        <Article full>
          <Box justify='center' align='center' direction='row' flex>
            <Box>
              <Image
                fit='contain'
                src='./3.png' />
            </Box>
            <Card heading='Building a bridge'
              textAlign='left'
              link={<Anchor href='/contact'
              label='Get Involved' icon={ <LinkNext />}/>}>
              <Paragraph>Clean Clothes for Dignity allows volunteers and members of the homeless community to share in the most basic and precious of human goods: sharing a piece of one’s life with another human being.</Paragraph>
            </Card>
          </Box>
        </Article>
        <Article texture='./sign.png' full>
          <Box pad='medium' textAlign='left' align='center' justify='center' flex>
            <Heading tag='h2'><strong>Donate</strong></Heading>
            <Paragraph size='medium'>Looking for a simple, practical way to make a big difference? Clean Clothes for Asheville is looking for gifts to help sustain us for the long term. A wash, dry and supplies cost about $5 per customer. Clean Clothes requires about $250 a month to survive. Any gift is appreciated.</Paragraph>
            <Box align='center'>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
                " />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </Box>
          </Box>
        </Article>
        <Article texture='/store.png' full>
          <Box justify='center' align='center' direction='row' flex
            backgroundColorIndex='dark'>
            <Box direction='row'
              justify='center'
              align='center'
              flex>
              <Box basis='xsmall'
                  align='end'
                  pad='medium' />
                <Box basis='full'
                  align='center'
                  justify='center'
                  pad='medium'>
                  <Box colorIndex='grey-2-a'>
                    <Box textAlign='left' pad='medium'>
                      <Heading tag='h2'><strong>Support The Cause</strong></Heading>
                      <Heading tag='h3'><i>Volunteer:</i></Heading>
                      <Paragraph>Come Volunteer Wednesday nights 5 pm – 8 pm at <Anchor href='https://www.google.com/maps/place/Dutch+Girl+Coin+Laundry/@35.5610088,-82.5942075,13z/data=!4m8!1m2!2m1!1sdutch+girl+coin+laundry+asheville+nc!3m4!1s0x0:0xbe6e45b67a0b3599!8m2!3d35.5805465!4d-82.5971031'>Dutch Girl Coin Laundry</Anchor> on Haywood Rd in West Asheville.</Paragraph>
                      <Box pad={{ vertical: 'medium'}}>
                        <Heading tag='h3'><i>Share our story:</i></Heading>
                        <Box direction='row' responsive={false} >
                        <SocialShare link='https://cleanclothesfordignity.com'
                          type='email'
                          title='Check Out Clean Clothes for Dignity'
                          text='Volunteer Laundry Service for the Homeless' />
                        <SocialShare type='facebook'
                          link='https://cleanclothesfordignity.com' />
                        <SocialShare type='twitter'
                          link='https://cleanclothesfordignity.com'
                          text='Check Out Clean Clothes for Dignity' />
                        <SocialShare type='google'
                          link='https://cleanclothesfordignity.com' />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Article>
        <FooterCC />
      </Article>
    )
  }
}
