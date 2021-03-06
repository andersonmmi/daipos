// @flow

/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import React from 'react'

import STYLE from 'constants/style'

const bounce = keyframes`
  0%, 80%, 100% {
              -webkit-transform: scale(0);
              transform: scale(0);
              }

      40% {
          -webkit-transform: scale(1);
          transform: scale(1);
          }

        }
`

type PropsType = {
  fill?: string,
}

class Spinner extends React.Component<PropsType> {
  static defaultProps = {
    fill: STYLE.COLOR.WHITE,
  }

  render() {
    const { fill } = this.props
    return (
      <div
        css={css`
          display: flex;
          align-content: center;
          justify-content: center;
        `}
      >
        <div
          css={css`
            display: flex;
            top: 50%;
            left: 50%;
            z-index: 1001;
            align-content: center;
            justify-content: center;
          `}
        >
          <div
            css={css`
              display: 0.3;
              height: 13px;
              width: 13px;
              background-color: ${fill};
              border-radius: 50%;
              margin: 0px 2px;
              -webkit-animation: ${bounce} 1.5s infinite ease-in-out both;
              animation: ${bounce} 1.5s infinite ease-in-out both;
              -webkit-animation-delay: -0.16s;
              animation-delay: -0.16s;
            `}
          />
          <div
            css={css`
              display: 0.3;
              height: 13px;
              width: 13px;
              background-color: ${fill};
              border-radius: 50%;
              margin: 0px 2px;
              -webkit-animation: ${bounce} 1.5s infinite ease-in-out both;
              animation: ${bounce} 1.5s infinite ease-in-out both;
            `}
          />
          <div
            css={css`
              display: 0.3;
              height: 13px;
              width: 13px;
              background-color: ${fill};
              border-radius: 50%;
              margin: 0px 2px;
              -webkit-animation: ${bounce} 1.5s infinite ease-in-out both;
              animation: ${bounce} 1.5s infinite ease-in-out both;
              -webkit-animation-delay: 0.16s;
              animation-delay: 0.16s;
            `}
          />
        </div>
      </div>
    )
  }
}

export default Spinner
