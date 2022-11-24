/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { css } from 'styled-components';

const columnCurtain = css`
  display: block;
  position: fixed;
  z-index: 1050;
  top: 0;
  left: 50%;
  overflow: hidden;
  width: 50%;
  height: 100vh;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale3d(0, 1, 1);
    transform-origin: 0 50%;
    transition: transform 0.3s;
    transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  }

  .search {
    position: relative;
    padding: 2.5rem 1.5rem 0;
    background: transparent;

    button {
      position: absolute;
      top: 2rem;
      font-size: 2.5rem;
      opacity: 0;
      transition: opacity 0.5s;
      ${({ theme }) => (theme.dir === 'rtl' ? 'left' : 'right')}: 3rem;
    }

    .form {
      width: 85%;
      transform: translate3d(-150%, 0, 0);
      transition: transform 0.3s;
    }

    input {
      font-size: 2.5rem;
      width: 100%;
    }

    span {
      font-size: 85%;
    }
  }

  &.show {
    pointer-events: auto;

    &::before {
      transform: scale3d(1, 1, 1);
    }

    .search {
      .form {
        transform: translate3d(0, 0, 0);
        transition-delay: 0.15s;
        transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
      }

      button {
        opacity: 1;
        z-index: 100;
      }
    }
  }

  @media screen and (max-width: 40rem) {
    span {
      width: 90%;
    }

    input {
      font-size: 2rem;
      width: 90%;
    }
  }
`;
export default columnCurtain;
