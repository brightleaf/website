import React from 'react'

import {
  BaseIcon,
  Box,
  Button,
  Card,
  CardImageContainer,
  CardBody,
  Column,
  Columns,
  Container,
  Content,
  Footer,
  Hero,
  HeroHead,
  HeroBody,
  HeroFooter,
  Image,
  NavBar,
  NavBarEnd,
  NavBarMenu,
  NavBarBrand,
  NavBarItem,
  Icon,
  Tile,
  Title,
  SubTitle,
  Tag,
  Tabs,
  TabItem,
  TabList,
} from '@brightleaf/elements'
import { navigate } from '@reach/router'

export const CoverTemplate = () => {
  return (
    <Hero isFullHeight isDefault isBold>
      <HeroHead>
        <NavBar>
          <Container>
            <NavBarBrand
              src="brightleaf.png"
              href="#"
              width=""
              height=""
            ></NavBarBrand>
            <NavBarMenu id="navbarMenu">
              <NavBarEnd>
                <Tabs isRight>
                  <TabList>
                    <TabItem isActive>
                      <a href="/">Home</a>
                    </TabItem>
                    <TabItem>
                      <a href="/elements/">Elements</a>
                    </TabItem>
                    <TabItem>
                      <a href="/react-hooks/">Hooks</a>
                    </TabItem>
                    <TabItem>
                      <a href="https://brightleaf.github.io/elements">Help</a>
                    </TabItem>
                  </TabList>
                </Tabs>
              </NavBarEnd>
            </NavBarMenu>
          </Container>
        </NavBar>
      </HeroHead>
      <HeroBody>
        <Container className="has-text-centered">
          <Columns className="is-centered">
            <Column size="5">
              <Image is4by3 src="/inside-barn.jpeg" alt="Barn" />
            </Column>
            <Column size="6" className="is-offset-1">
              <Title is="2">
                Brightleaf JS{' '}
                <img className="logo" src="/brightleaf.png" alt="Logo" />
              </Title>
              <SubTitle is="4">Open Source Projects.</SubTitle>
              <br />
              <p className="has-text-centered">
                <Button
                  isAnchor
                  isMedium
                  isOutlined
                  isWarning
                  isInverted
                  onClick={e => {
                    e.preventDefault()
                    navigate('/about')
                  }}
                >
                  Learn more
                </Button>
              </p>
            </Column>
          </Columns>
        </Container>
      </HeroBody>

      <HeroFooter>
        <Container>
          <Tabs isCentered>
            <TabList>
              <TabItem>
                <a>Copyright 2019</a>
              </TabItem>
            </TabList>
          </Tabs>
        </Container>
      </HeroFooter>
    </Hero>
  )
}

export default CoverTemplate
