import React from "react";
import { StyledContentBox } from "@/components/styledComponents/StyledWrappers";
import { StyledSitemap } from "@/components/styledComponents/StyledElements";

const SitemapCanvas = () => {
  return (
    <>
      <StyledContentBox>
        <StyledSitemap>
          <ul className="tree">
            <li>
              <span>Header Sitemap</span>
              <ul>
                <li>
                  <span>About us</span>
                  <ul>
                    <li>
                      <span>Our history</span>
                      <ul>
                        <li>
                          <span>Founder</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>Our board</span>
                      <ul>
                        <li>
                          <span>Brad Whiteman</span>
                        </li>
                        <li>
                          <span>Cynthia Tolken</span>
                        </li>
                        <li>
                          <span>Bobby Founderson</span>
                        </li>
                        <li>
                          <span>Anzil</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Our products</span>
                  <ul>
                    <li>
                      <span>The Widget 2000™</span>
                      <ul>
                        <li>
                          <span>Order form</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>The McGuffin V2</span>
                      <ul>
                        <li>
                          <span>Order form</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Contact us</span>
                  <ul>
                    <li>
                      <span>Social media</span>
                      <ul>
                        <li>
                          <span>Facebook</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Contact us</span>
                  <ul>
                    <li>
                      <span>Social media</span>
                      <ul>
                        <li>
                          <span>Facebook</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Contact us</span>
                  <ul>
                    <li>
                      <span>Social media</span>
                      <ul>
                        <li>
                          <span>Facebook</span>
                          <ul>
                            <li>
                              <span>Facebook</span>
                              <ul>
                                <li>
                                  <span>Facebook</span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Contact us</span>
                  <ul>
                    <li>
                      <span>Social media</span>
                      <ul>
                        <li>
                          <span>Facebook</span>
                        </li>
                        <li>
                          <span>Facebook</span>
                        </li>
                        <li>
                          <span>Facebook</span>
                        </li>
                        <li>
                          <span>Facebook</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </StyledSitemap>
      </StyledContentBox>
    </>
  );
};

export default SitemapCanvas;
