import styled from "styled-components";
import BuildingImage from "../assets/building.png"

const BannerContainer = styled.div`
     background-image: url(${BuildingImage});
     height:300px;
     background-size:cover;
     display:flex;
     justify-content:center;
     align-items:center;
     font-size:2em;
     color:0047ba;
`;

const TextBanner = styled.div`
     display:flex;
     justify-content:center;
     align-items:center;
     font-size:2em;
     color:0047ba;
`

function Banner() {
    return (
        <BannerContainer>
            <p> Doofenshmirtz </p>
        </BannerContainer>
    );

}

export default Banner;