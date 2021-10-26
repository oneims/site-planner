import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  StyledContentBox,
  StyledPannel,
  StyledAppWrapper,
  StyledAppContent,
  StyledViewPort,
  StyledViewPortWrapper,
} from "@/components/styledComponents/StyledWrappers";
import { StyledAppHeadingLabel, StyledTag } from "@/components/styledComponents/StyledTypography";
import SitemapCard from "@/components/app/views/SitemapCard";

const ProjectOverview = ({ projectName, projectUID, sitemaps }) => {
  console.log(projectName);
  return (
    <>
      <StyledAppWrapper>
        <Container fluid>
          <StyledAppContent>
            <StyledViewPortWrapper themeStyle="fullWidth">
              <StyledViewPort>
                <StyledPannel className="theme__viewport-padding theme__solids-bg-white pt-2 pb-2 theme__border-bottom theme__position-sticky theme__top-0 theme__z-index-1">
                  <StyledContentBox className="pt-2 pb-2">
                    <StyledAppHeadingLabel className="mb-0" style={{ lineHeight: "1" }}>
                      {projectName && projectName}
                    </StyledAppHeadingLabel>
                  </StyledContentBox>
                </StyledPannel>
                <StyledContentBox className="pl-4 pr-4 pt-4 mt-2 theme__viewport-padding theme__height-100 theme__overflow-y theme__overflow-x theme__canvas-background">
                  <StyledContentBox className="mb-3">
                    <StyledTag themeStyle="uppercase">Sitemaps</StyledTag>
                  </StyledContentBox>
                  <Row>
                    {sitemaps.map((elem) => (
                      <Col lg="3" className="mb-4">
                        <SitemapCard
                          key={elem.id}
                          title={elem.title}
                          destination={`/project/${projectUID}/sitemap/${elem.UID}`}
                        />
                      </Col>
                    ))}
                    <Col lg="3" className="mb-4">
                      <SitemapCard key="Add New" title="Create a New Sitemap" addNew />
                    </Col>
                  </Row>
                </StyledContentBox>
              </StyledViewPort>
            </StyledViewPortWrapper>
          </StyledAppContent>
        </Container>
      </StyledAppWrapper>
    </>
  );
};

export default ProjectOverview;
