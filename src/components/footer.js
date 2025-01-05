
import React from 'react';

import { Row } from 'simple-flexbox';







import { Heading, Subheading } from './homeStyle';

import { useRouter } from 'next/router';
import { Image } from './styled';
import styled from 'styled-components';
import { Box, Grid2 } from '@mui/material';
import Link from 'next/link';



const FooterContainer = styled(Box)`
      background:  ${props => props.background || "rgba(3, 24, 50, 1)"} ;

      color: #ffffff;
      padding:  ${props => props.padding || "40px 8% "} ;
      @media (max-width:500px) {
        padding: 40px 3.5%;
  };
      `;
export const FooterText = styled.div`
      font-size: ${props => props.size || "18px"};
      color: ${props => props.color || "#FFFFFF"};
      font-weight: ${props => props.weight || "400"};
      padding: ${props => props.padding || "0px 0px 15px 0px"};
      line-height :${props => props.line};
text-align:  ${props => props.textalign || "left"};
      margin-left: ${props => props.marginleft || "0px"};
      @media (max-width:1050px) {
        font - size:20px;
  };
      @media (max-width:1200px) {
        font - size:14px;
  };
      @media (max-width:600px) {
        font - size:${props => props.smfont};
      line-height: normal;
  };
      @media (max-width:375px) {
        font - size:${props => props.xsfont};
      margin-right: 5px;
  };
      `

const Column = styled(Box)`
      display: flex;
      flex-direction: column;
      gap: 8px;
      `;



const HorizontalDivider = styled(Box)`
      background-color: #ffffff;
      width: 100%;
      height: 2px;
      margin: 20px 0;


      `;


const VerticalDivider = styled(Box)`
      background-color: rgba(59, 82, 112, 1);
      width: 1px;
      height: 100%; /* Set height to 100% to span the full height of the container */

      @media (max-width: 600px) {
        display: none; /* Hide vertical divider on mobile */
  }
      `;

export const VerticalLine = styled.div`

      border-left: 1px solid; /* Set the border side for the vertical line */
      border-image-source: rgba(59, 82, 112, 1);
      border-image-slice: 1;
   margin: 0px 7px;
color:rgba(59, 82, 112, 1);
      height:${props => props.height || "25px"};



      @media(max-width: 506px){

        height:${props => props.xsheight};
  };

      `
export const FooterRow = styled.div`
      background: rgba(13, 40, 73, 1);


      `
export const SocialMediaIcon = styled.img`
      width:${props => props.width || "70px"};
      cursor:${props => props.cursor};
      // margin-right:7px;
      
      @media (max-width:1200px) {
      width:${props => props.mdwidth};
      
        };
      
      @media (max-width:600px) {
      width:${props => props.xswidth};
      
        };
      
      `
function Footer() {








  return (
    <>
      <FooterContainer>
        <Grid2 container spacing={0}>
          <Grid2 size={2.5} >
            <FooterText xsfont={"14px"}><Link href="/faq"  >My Account  </Link></FooterText>
            <FooterText xsfont={"14px"}><Link href="/faq"  >Track Order</Link></FooterText>
            <FooterText xsfont={"14px"}><Link href="/faq"  >Privacy Policy </Link></FooterText>
            <FooterText xsfont={"14px"}><Link href="/faq"  >Refunds & Cancellation </Link></FooterText>
          
          </Grid2>

          <Grid2 size={2.5}>

        




            <FooterText xsfont={"14px"}><Link href="/faq"  >About Us </Link></FooterText>
            <FooterText xsfont={"14px"}><Link href="/faq"  >Contact Us </Link></FooterText>
            <FooterText xsfont={"14px"}><Link href="/faq"  >  Shipping Policy</Link></FooterText>
            <FooterText xsfont={"14px"}><Link href="/faq"  >Terms & Conditions </Link></FooterText>
       
          </Grid2>

          <Grid2 size={2.5}>
            <FooterText xsfont={"14px"}><Link href="/faq"  >Media</Link></FooterText>
            <FooterText xsfont={"14px"}><Link href="/faq"  >FAQ
   </Link></FooterText>
            <FooterText xsfont={"14px"}><Link href="/faq"  >          Reviews </Link></FooterText>
            <FooterText xsfont={"14px"}><Link href="/faq"  >Blog </Link></FooterText>
            {/* <FooterText xsfont={"14px"}><Link href="/faq"  >{t('footer.refer')} </Link></FooterText> */}

          </Grid2>

          <Grid2 size={1.8}>

            <VerticalDivider />

          </Grid2>

          <Grid2 size={2}>

            <FooterText xsfont={"14px"}>Contact Us </FooterText>
            <FooterText xsfont={"14px"}><Link href="/faq"  >Mail Us : emailinfo@mcawatersoluation.in </Link></FooterText>
            <FooterText xsfont={"14px"}><Link href="/faq"  > Helpline Number : +91 9301773314 </Link></FooterText>

          </Grid2>



        </Grid2>





      </FooterContainer>


      <FooterContainer background=' rgba(13, 40, 73, 1)' padding='10px 8%'
      >
        <Grid2 container spacing={7} alignItems='center'>
          {/* First Two Columns in One Row */}
          <Grid2 item size={3}>
            <Image src='/assets/icons/black-new.png' width='25%'  />
          </Grid2>
          <Grid2 size={6}>
      
          <FooterText xsfont={"14px"} size='16px ' textalign='center' >       Copyright © - M.C.A Water Solutions  | All rights reserved</FooterText>
          </Grid2>
          <Grid2 size={3}>



            <FooterText xsfont={"14px"} color='rgba(165, 174, 184, 1)' padding='0' >                Address</FooterText>


            <FooterText xsfont={"14px"} size='20px' padding='0' >                Sindhi Camp, Satna - 485001 (Near Bandhagadh Colony)
            </FooterText>



          </Grid2>
        </Grid2>
      </FooterContainer>

     
    </>
  );
}

export default Footer;
