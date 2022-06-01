import React from "react";
import Link from "next/link";
import {
  StyledSitemapCard,
  StyledSitemapTop,
  StyledSitemapCardContent,
  StyledPrivateButton,
} from "@/components/styledComponents/StyledElements";
import { StyledAppHeadingLabel } from "@/components/styledComponents/StyledTypography";
import { StyledContentBox } from "@/components/styledComponents/StyledWrappers";

const SitemapCard = (props) => {
  return (
    <>
      {props.addNew ? (
        <StyledSitemapCard className="theme__border-radius-15">
          <StyledSitemapTop className="theme__border-radius-top-15" />
          <StyledContentBox className="pt-4 pb-3 px-3 d-flex flex-column theme__height-100">
            <StyledSitemapCardContent>
              <StyledAppHeadingLabel className="mb-0">{props.title}</StyledAppHeadingLabel>
            </StyledSitemapCardContent>
            <StyledContentBox className="mt-auto">
              <StyledPrivateButton className="mb-2 mt-2 show-on-hover" onClick={props.clickHandler}>
                Add New
              </StyledPrivateButton>
            </StyledContentBox>
          </StyledContentBox>
        </StyledSitemapCard>
      ) : (
        <StyledSitemapCard className="theme__border-radius-15">
          <StyledSitemapTop className="theme__border-radius-top-15" />
          <StyledContentBox className="pt-4 pb-3 px-3 d-flex flex-column theme__height-100">
            <StyledSitemapCardContent>
              <StyledAppHeadingLabel className="mb-0">{props.title}</StyledAppHeadingLabel>
            </StyledSitemapCardContent>
            <StyledContentBox className="mt-auto">
              <Link href={props.destination ? props.destination : "#"}>
                <StyledPrivateButton className="mb-2 mt-2 show-on-hover">Edit</StyledPrivateButton>
              </Link>
              <StyledPrivateButton
                onClick={props.cloneHandler}
                className="mb-2 mt-2 ml-2 show-on-hover"
              >
                Clone
              </StyledPrivateButton>
            </StyledContentBox>
          </StyledContentBox>
        </StyledSitemapCard>
      )}
    </>
  );
};

export default SitemapCard;
