/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { css } from 'styled-components';

const curtain = css`
  .search {
    position: fixed;
    z-index: 1050;
    top: 0;
    left: 100%;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    padding: 3rem;
    pointer-events: none;
    transition: transform 0.3s;
    transition-delay: 0.4s;
    transition-timing-function: ease-out;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: transform 0.3s;
      transition-timing-function: ease-out;
    }

    button {
      font-size: 2.5rem;
      position: absolute;
      top: 3rem;
      transition: opacity 0.1s;
      transition-delay: 0.3s;
      ${({ theme }) => (theme.dir === 'rtl' ? 'left' : 'right')}: 3rem;
    }

    .form {
      width: 50%;
      opacity: 0;
      transform: scale3d(0.8, 0.8, 1);
      transition: opacity 0.5s, transform 0.5s;
    }

    input {
      width: 100%;
      font-size: 6vw;
    }
  }

  &.show {
    .search {
      width: 100%;
      pointer-events: auto;
      transform: translate3d(-100%, 0, 0);
      transition-delay: 0s;

      &::after {
        transform: translate3d(100%, 0, 0);
        transition-delay: 0.4s;
      }

      button {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }

      .form {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
  }

  @media screen and (max-width: 40em) {
    span {
      width: 90%;
    }

    input {
      font-size: 2em;
      width: 90%;
    }
  }
`;
export default curtain;
