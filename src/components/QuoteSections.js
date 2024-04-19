import React from "react";
import styled from "styled-components";

const QuoteContainer = styled.section`
padding: 20px
background-coloer:#fff;
text-align:center;
font-size:1.3em;
font-weight: bold;
`

function QuoteSection(){
    return (
        <QuoteContainer>
            <blockquote>
                "Isso é oque ela disse! - Michael Scott"
            </blockquote>
        </QuoteContainer>
    );
}

export default QuoteSection;