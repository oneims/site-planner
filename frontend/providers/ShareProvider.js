import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { sleeper } from "/lib/Helpers";
import ShareLayout from "/components/app/base/ShareLayout";

const ShareProvider = (props) => {
  const { Component, pageProps } = props;
  const [data, setData] = useState({
    treeData: [],
    addAsFirstChild: false,
    primaryColor: {
      r: "",
      g: "",
      b: "",
      a: "",
    },
    borderColor: {
      r: "",
      g: "",
      b: "",
      a: "",
    },
    textColor: {
      r: "",
      g: "",
      b: "",
      a: "",
    },
  });
  const [misc, setMisc] = useState({
    displayPrimaryColorPicker: false,
    displayBorderColorPicker: false,
    displayTextColorPicker: false,
    activeColorPicker: null,
    loading: true,
    iframeLoading: false,
    editingTitle: false,
  });

  const router = useRouter();

  const fetchData = async (iframeLoading) => {
    if (iframeLoading) {
      setMisc({
        ...misc,
        iframeLoading: true,
      });
    } else {
      setMisc({
        ...misc,
        loading: true,
      });
    }
    const { sitemapParams } = router.query;
    if (!sitemapParams) {
      return null;
    }
    // const projectUID = sitemapParams[0];
    const sitemapUID = sitemapParams[sitemapParams.length - 1];
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/sitemaps?UID=${sitemapUID}`)
      .then(sleeper(500))
      .then((res) => {
        const menu_schema = res.data[0].menu_schema;
        const primary_color = res.data[0].primary_color;
        const text_color = res.data[0].text_color;
        const border_color = res.data[0].border_color;
        const title = res.data[0].title;
        const project_name = res.data[0].project_name;
        const sitemapDBID = res.data[0].id;
        const sitemapUID = res.data[0].uid;
        setData({
          ...data,
          treeData: menu_schema,
          primaryColor: primary_color,
          textColor: text_color,
          borderColor: border_color,
          title,
          project_name,
          sitemapDBID,
          sitemapUID,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        if (iframeLoading) {
          setMisc({
            ...misc,
            iframeLoading: false,
          });
        } else {
          setMisc({
            ...misc,
            loading: false,
          });
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, [router.isReady]);

  return (
    <ShareLayout loading={misc.loading}>
      <Component
        fetchData={fetchData}
        iframeLoading={misc.iframeLoading}
        {...data}
        {...misc}
        {...pageProps}
      />
    </ShareLayout>
  );
};

export default ShareProvider;
