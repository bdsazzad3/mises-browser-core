// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.

import styled from 'styled-components/native'
import InfoLogo from '../../../../assets/svg-icons/info-icon.svg'

export const StyledWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0px 15px 15px 15px;
  min-height: 320px;
`

// export const Input = styled.input`
//   width: 250px;
//   background-image: none;
//   background-color: ${(p) => p.theme.color.background02};
//   border: ${(p) => `1px solid ${p.theme.color.interactive08}`};
//   border-radius: 4px;
//   font-family: Poppins;
//   font-style: normal;
//   font-size: 13px;
//   line-height: 20px;
//   letter-spacing: 0.01em;
//   padding: 10px;
//   margin-bottom: 15px;
//   color: ${(p) => p.theme.color.text01};
//   ::placeholder {
//     font-family: Poppins;
//     font-style: normal;
//     font-size: 12px;
//     letter-spacing: 0.01em;
//     color: ${(p) => p.theme.color.text03};
//     font-weight: normal;
//   }
//   ::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
//   ::-webkit-outer-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
// `

export const SelectWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  margin-bottom: 15px;
`

export const DisclaimerWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(p) => p.theme.color.warningBackground};
  border-radius: 16px;
  padding: 10px;
`

export const DisclaimerText = styled.Text`
  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: center;
  color: ${(p) => p.theme.color.text02};
`

export const InfoIcon = styled.View`
  width: 12px;
  height: 12px;
  margin-top: 4px;
  background-color: ${(p) => p.theme.color.interactive07};
  -webkit-mask-image: url(${InfoLogo});
  mask-image: url(${InfoLogo});
`

export const ImportRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
  width: 250px;
`

export const ImportButton = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 4px 6px;
  background-color: transparent;
  border: ${(p) => `1px solid ${p.theme.color.interactive08}`};
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.01em;
  margin-right: 10px;
  color: ${(p) => p.theme.color.interactive07};
`

export const ErrorText = styled.Text`
  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  color: ${(p) => p.theme.color.errorText};
  margin-bottom: 10px;
`

export const ImportDisclaimer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${(p) => p.theme.color.warningBackground};
  border-radius: 16px;
  padding: 10px;
  margin: 15px 0px 15px 0px;
`
