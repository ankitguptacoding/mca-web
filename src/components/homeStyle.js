import styled from "styled-components";
import { Accordion } from 'react-bootstrap';

export const Heading = styled.div`
font-weight: ${props => props.fontWeight || "600"};
font-size:  ${props => props.fontSize || "14px"};
text-align:  ${props => props.textalign || "left"};
color: ${props => props.color};
line-height :${props => props.line};
margin:${props => props.margin};
padding-bottom:${props => props.paddingbottom || "0px"};
margin-left:${props => props.marginleft || "0px"};
margin-right:${props => props.marginRight || "0px"};
width:${props => props.width};
margin-top: ${props => props.margintop};


@media (max-width:1200px) {
  font-size:  ${props => props.mdfont};
}

@media (max-width:950px) {
  font-size:  ${props => props.smfont || "16px"};
}

  @media (max-width:750px) {
  font-size:  ${props => props.msFont};
    line-height : ${props => props.smLine} ;

}
  @media (max-width:500px) {
  font-size:  ${props => props.xsfont};
  line-height : ${props => props.xsline || " normal"} ;
margin-top: ${props => props.xsmargintop};
}


`
export const GameImage = styled.img`
width:${props => props.width || "30px"};
margin:${props => props.margin || "0px"};
object-fit: ${props => props.objectFit || 'cover'};
height:${props => props.height || "auto"};
 object-position: ${props => props.objectPosition || "center"};
cursor:pointer;

margin-right:${props => props.marginright || "0px"};
@media (max-width:1000px) {
  width:  ${props => props.smwidth};
  height:${props => props.mdheight};
}

  @media (max-width:700px) {

    height:  ${props => props.smHeight};
};

  @media (max-width:500px) {
  width:  ${props => props.xswidth};
    height:  ${props => props.xsheight};
};

  @media (max-width:375px) {
  width:  ${props => props.xxswidth};
};

`


export const VerticalLine = styled.div`
  height: 100px; /* Adjust height as needed */
  border-left: 1px solid; /* Set the border side for the vertical line */
  border-image-source: linear-gradient(180deg, #21242A 0%, #727A90 52.55%, #21242A 100%);
  border-image-slice: 1; 
  
height:${props => props.height || "100px"};



 @media(max-width: 506px){

    height:${props => props.xsheight};
  };

`

export const ColumnDiv = styled.div`
background: white;


   overflow-x: auto; /* Allow horizontal scrolling */
    -webkit-overflow-scrolling: touch; /

width: 100%;

padding : 15px 4rem;
@media (max-width:1123px) {
  padding : 15px 1rem;
};
@media (max-width:500px) {
  padding : 5px 0px;
};
}
`;

export const Subheading = styled.p`
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "600"};
    line-height: ${(props) => props.line || "normal"};
  text-align: ${(props) => props.textalign || "center"};
margin:${props => props.margin || "0px"};
  color: ${(props) => props.color || props.theme.greyColor}; 
`;
export const StyledImage = styled.img`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};

`;
export const BodyContainer = styled.div`
  padding: ${props => props.padding || "1rem 7rem"};

width: 100%;
height: 100%;
background:${props => props.background || "rgba(244, 247, 251, 1)"};


@media (max-width:1200px) {
   padding: ${props => props.xspadding || "1rem 3rem "};
 };


 @media (max-width:600px) {
   padding: ${props => props.xspadding || "1rem 1rem "};
 };


`


export const Button = styled.button`
background: ${props => props.background || "rgba(37, 172, 248, 1)"};
border: none;
color: white;
padding: 10px 50px;
border-radius: 30px;
box-shadow: 0px 4px 13px 0px rgba(196, 221, 235, 1);

margin:${props => props.margin};
// margin :  0px auto;
`;


export const ButtonContainer = styled.div`
display:flex;
align-items:center;
justify-content: center;
margin:${props => props.margin || "0px"};
`;

export const CarouselItems = styled.div`

// padding:${props => props.padding};

`;


export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
padding:  ${props => props.padding || "30px 0px 0px"}; 
  column-gap: 15px;
  
  /* Space between arrows */
  margin-top: 10px; /* Space between the carousel and arrows */
  @media(max-width:500px){
    margin-top: 20px; 
 padding: 0px 0px 0px;
};
`;





// export const Slide = styled.article`
//  display: flex;
//     justify-content: space-between; 

// `;



export const ArrowDiv = styled.div`
background: #1E2028;
width:45px;
height: 45px;
border-radius: 50%;
 display: flex; /* Use flex to center the image */
    justify-content: center; /* Center horizontally */
    align-items: center; 

`;
export const Arrow = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
  background-image: url('/path/to/your/arrow.png'); /* Set arrow image */
  background-size: contain;
  width: 40px; /* Set width of the arrow */
  height: 40px; /* Set height of the arrow */

`;



export const ContainerDiv = styled.div`
background: ${props => props.background || "rgba(37, 172, 248, 1)"};

`;


export const FeatureDiv = styled.div`
background: ${props => props.background};
margin : 20px 0px ;
  border: 1px solid white; /* Transparent fallback */
padding: 15px;
border-radius : 66px;

`;
export const SlideContainer = styled.div`
  text-align: center;
  padding: 20px;

`;

export const SliderContainer = styled.div`
  text-align: center;
background-color: white;

`;



export const YoutubeContainer = styled.div`
background-color: balck;

border-radius: 25px;

  position: relative;
  width: 100%; /* Full width of the container */
  padding-bottom: 56.25%; /* Aspect ratio: 16:9 (height/width = 9/16 = 56.25%) */
  height: 0; /* Set height to 0 to enable the aspect ratio effect */
  overflow: hidden;
`;

export const StyledIframeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Aspect ratio: 16:9 */
  height: 100%;
  overflow: hidden;
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0; /* Optional: Removes the iframe border */
  border-radius: 25px;
`;
export const StyledContainer = styled.div`
  // margin-top: 3rem;
//   padding: 2rem;
color: black;
  border-radius: 8px;
`;


export const StyledHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: ${props => props.marginbottom || "1.5rem"};

 margin-top :${props => props.margintop || "0px"};
 @media(max-width:450px){
    
      font-size: 1.5rem;       
 
};
`;


export const StyledAccordion = styled(Accordion)`
  --bs-accordion-bg: transparent; /* Override the Bootstrap background color */

  .accordion-header {
    // background-color: #1E2028;
    color: black;
 border: 1px solid rgba(220, 220, 220, 1);
       box-shadow : none;
         margin-bottom: 0;
  }
       .accordion .accordion-item {
  border: none;
  margin: 14px 0px;
         box-shadow : none;
}
.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);
         box-shadow : none;
}

.accordion-header button {
    // background: #1E2028;
  border: none !important;
  border-left: 4px solid #a8a4a4 !important;
  position: relative;
  padding: 15px 40px;
         box-shadow : none;
          @media(max-width:450px){
    
     padding: 15px;
 
};
}
  .accordion-body {
    font-size: 1rem;
    line-height: 1.6;
    background-color: white;
      padding: 20px 40px;
    color:black;
       border : none !important;
           box-shadow : none;
                 @media(max-width:450px){
    
     padding: 15px;
 
};

  }
            .accordion-button:not(.collapsed) {

    color: black; /* Text color when active */
           box-shadow : none;
  }

  .accordion-button{
    // background-color: #1E2028;
      border : none !important;
      color : black;
      font-weight : 700;
          box-shadow : none;
     
  }

    .accordion{
    border : none !important ;
    
    }
    .accordion-item{
     border : none !important ;
    }
   

  .accordion-button::after {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
  content: "";
  background-image: url("/assets/svg/plus-arrow.svg");


         box-shadow : none;
}
  .accordion-header button {
   background: white;
    border: none !important;
    // border-left: 4px solid #a8a4a4 !important;
    position: relative;
    outline : none ;
}

.accordion-item .accordion-button:not(.collapsed)::after{
 background-image: url("https://realrummy.live/assets/icons/minus-arrow.svg");
 flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  margin-left: auto;
}
`;


export const StyledAccordionItem = styled(Accordion.Item)`
  margin-bottom: 1rem; /* Adds space between questions */
`;


export const OrderedList = styled.ol`
  margin: 1em 0;
  padding-left: 20px;
  list-style-type: ${props => props.type || "1"};
   color: white ;
 
`;

export const Anchor = styled.a`

`;

export const ListItem = styled.li`
  margin: 0.5em 0;
  color: ${props => props.color || "#A9AEC2"}   ;
`;

export const Strong = styled.span`
  font-weight: bold;
color : white;
`;
export const Color = styled.span`
  color: #1e90ff; /* Dodger Blue */
`;

export const Highlight = styled.span`
  font-weight: 700;
  color: #32A1EF;
`;
export const List = styled.ul`




   color: white ;
  margin: 1em 0;
  padding-left: 20px;
  list-style-type:   ${props => props.type || "disc"};
   li::before {
    content: ${(props) => (props.showdash ? "'- '" : "''")};

  }
`;