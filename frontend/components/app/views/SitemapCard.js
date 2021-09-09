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
      <Link href="/project/ajo0s08zkl/sitemap/il0jsMko">
        <StyledSitemapCard className="theme__border-radius-15">
          <StyledSitemapTop className="theme__border-radius-top-15" />
          <StyledContentBox className="pt-4 pb-3 px-3 d-flex flex-column theme__height-100">
            <StyledSitemapCardContent>
              <StyledAppHeadingLabel className="mb-0">{props.title}</StyledAppHeadingLabel>
            </StyledSitemapCardContent>
            <StyledContentBox className="mt-auto">
              <StyledPrivateButton className="mb-2 mt-2 show-on-hover">Edit</StyledPrivateButton>
            </StyledContentBox>
          </StyledContentBox>
        </StyledSitemapCard>
      </Link>
    </>
  );
};

export default SitemapCard;
