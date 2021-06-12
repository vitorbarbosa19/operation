import { fontTitle, fontBody, primaryColor, fontSizeNormal, fontWeightBody, fontSizeSmall } from '@ziro/theme'

export const wrapper = {
    display: 'flex',
    flexFlow: 'row wrap',
    fontWeight: fontWeightBody,
    textAlign: 'center',
    flex: '1 100%',
    justifyContent: 'center',
    color: primaryColor,
  },
  item = { width: '140px', fontFamily: fontBody },
  text = {
    fontFamily: fontBody,
    fontSize: fontSizeSmall,
  },
  title = {
    fontFamily: fontTitle,
    fontSize: fontSizeNormal,
  },
  container = {
    justifyItems: 'center',
    fontColor: primaryColor,
    fontSize: fontSizeNormal,
    fontFamily: fontBody,
    display: 'grid',
    gridRowGap: '15px',
    padding: '0 20px',
    margin: '10px 0',
  }
