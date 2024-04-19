import { createGlobalStyle } from "styled-components";
import BgImage from '../assets/BG.png'

const GloblalStyles = createGlobalStyle`
bod{
    font-family:Arial,Helvetica,sans-serif;
    margin:0;
    color: #333;
    background: url('${BgImage}')
}
`;

export default GloblalStyles;