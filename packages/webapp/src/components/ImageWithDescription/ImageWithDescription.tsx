import { css } from '@emotion/react'
import { undrawAuthentication } from '../../assets/images'
import palette from '../../lib/palette'
import media from '../../lib/styles/media'
import GoogleLoginButton from '../GoogleLoginButton'

export type ImageWithDescriptionProps = {
  image: string
  description: string
}

function ImageWithDescription({
  image,
  description,
}: ImageWithDescriptionProps) {
  return (
    <div css={fullScreen}>
      <img src={image} alt={description} />
      <h2>{description}</h2>
    </div>
  )
}

const fullScreen = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 25rem;
    height: auto;
    ${media.xlarge} {
      width: 10rem;
    }
  }
  h2 {
    margin-top: 3rem;
    color: ${palette.blueGrey[700]};
    font-weight: 200;
    font-size: 1.85rem;
    ${media.xlarge} {
      font-size: 1.25rem;
      font-weight: 300;
    }
  }
`

export default ImageWithDescription
