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

const ProjectOverview = ({
  addNewSitemap,
  projectDataReady,
  projectName,
  PROJECT_UID,
  sitemaps,
}) => {
  return (
    <>
      <StyledAppWrapper>
        <Container fluid>
          {projectDataReady && sitemaps && (
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
                  <StyledContentBox className="pl-4 pr-4 pt-4 mt-2 theme__viewport-padding theme__height-100 theme__canvas-background">
                    <StyledContentBox className="mb-3">
                      <StyledTag themeStyle="uppercase">Sitemaps</StyledTag>
                    </StyledContentBox>
                    <Row>
                      {sitemaps.map((elem, index) => (
                        <Col lg="3" key={elem.id} className="mb-4">
                          <SitemapCard
                            key={index}
                            title={elem.title}
                            destination={`/project/${PROJECT_UID}/sitemap/${elem.UID}`}
                            cloneHandler={() => addNewSitemap(elem.id)}
                          />
                        </Col>
                      ))}
                      <Col lg="3" className="mb-4">
                        <SitemapCard
                          title="Add a New Sitemap"
                          addNew
                          clickHandler={() => addNewSitemap()}
                        />
                      </Col>
                    </Row>
                  </StyledContentBox>
                </StyledViewPort>
              </StyledViewPortWrapper>
            </StyledAppContent>
          )}
        </Container>
      </StyledAppWrapper>
    </>
  );
};

export default ProjectOverview;
