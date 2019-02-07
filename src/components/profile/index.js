// @flow

/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import Flex from 'components/common/flex'
import InputField from 'components/common/input-field'

import style from './index.style.js'

export type ProfilePropsType = {
  authError?: Object,
  css?: Object,
  children?: React.Node,
  history: ?ReactRouter.ContextRouter,
  email?: string,
  password?: string,
  signUp: ({}) => boolean,
  handleChange: {},
}

type StateType = {
  email?: string,
  password?: string,
}

export default class Profile extends React.Component<
  ProfilePropsType,
  StateType
> {
  state = {
    email: 'test@test.com',
    password: 'password',
  }

  render() {
    const { authError } = this.props
    return (
      <div css={style.base}>
        <p>{authError}</p>
        {this.renderTitle()}
        {this.renderCollection()}
      </div>
    )
  }

  renderTitle = () => {
    return (
      <div css={style.title}>
        <div css={style.title__text}>Profile</div>
      </div>
    )
  }

  renderCollection = () => {
    return (
      <Flex column spaceBetween css={style.collection} key="renderFlex">
        {this.renderUsernameField()}
        {this.renderPasswordField()}
        {this.renderWalletAddressField()}
      </Flex>
    )
  }

  renderUsernameField = () => {
    return (
      <InputField
        onChange={this.handleChange}
        id="email"
        placeholder="Enter your e-mail"
        labelText="E-mail"
      />
    )
  }

  renderPasswordField = () => {
    return (
      <InputField
        onChange={this.handleChange}
        id="password"
        placeholder="Type in your password"
        labelText="Password"
        type="password"
      />
    )
  }

  renderWalletAddressField = () => {
    return (
      <InputField
        onChange={this.handleChange}
        id="walletAddress"
        placeholder="0x 1234 4444 4444 ... 4444"
        labelText="Ethereum address"
      />
    )
  }

  handleChange = (e: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }
}
