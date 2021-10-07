import EditorAside from "@/components/app/views/EditorAside";
import EditorViewport from "@/components/app/views/EditorViewport";
import { StyledAppContent, StyledAppWrapper } from "@/components/styledComponents/StyledWrappers";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

const ShareSitemap = (props) => {
  const [editorExpanded, setEditorExpanded] = useState(false);
  const [editorExpandedButtonText, setEditorExpandedButtonText] = useState("Expand");

  const router = useRouter();
  const { sitemapParams } = router.query;

  if (!sitemapParams) {
    return null;
  }

  const sitemapID = sitemapParams.slice(-1)[0];
  const projectID = sitemapParams[0];

  return (
    <>
      <StyledAppWrapper>
        <Container fluid>
          <StyledAppContent>
            <EditorViewport {...props} shareMode />
          </StyledAppContent>
        </Container>
      </StyledAppWrapper>
    </>
  );
};

export default ShareSitemap;
