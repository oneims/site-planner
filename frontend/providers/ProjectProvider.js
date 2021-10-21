import axios from "axios";
import React, { useState, useEffect } from "react";
import ProjectLayout from "/components/app/base/ProjectLayout";
import { useRouter } from "next/router";

const ProjectProvider = (props) => {
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
  });
  const router = useRouter();

  const fetchData = async () => {
    const { sitemapParams } = router.query;
    if (!sitemapParams) {
      return null;
    }
    // const projectUID = sitemapParams[0];
    const sitemapUID = sitemapParams[sitemapParams.length - 1];
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/sitemaps?UID=${sitemapUID}`)
      .then((res) => {
        const menu_schema = res.data[0].menu_schema;
        const primary_color = res.data[0].primary_color;
        const text_color = res.data[0].text_color;
        const border_color = res.data[0].border_color;
        const title = res.data[0].title;
        // setData({
        //   ...data,
        //   sit
        // })
        setData({
          ...data,
          treeData: menu_schema,
          primaryColor: primary_color,
          textColor: text_color,
          borderColor: border_color,
          title,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setMisc({
          ...misc,
          loading: false,
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [router.isReady]);

  const handleTree = {
    positionChange: (treeData) => {
      setData({
        ...data,
        treeData,
      });
    },
    inputChange: (event, node, path, getNodeKey, changeNodeAtPath) => {
      const name = event.target.value;
      setData({
        ...data,
        treeData: changeNodeAtPath({
          treeData: data.treeData,
          path,
          getNodeKey,
          newNode: { ...node, name },
        }),
      });
    },
    addChildItem: (path, itemName, getNodeKey, addNodeUnderParent) => {
      setData({
        ...data,
        treeData: addNodeUnderParent({
          treeData: data.treeData,
          parentKey: path[path.length - 1],
          expandParent: true,
          getNodeKey,
          newNode: {
            name: itemName,
          },
          addAsFirstChild: data.addAsFirstChild,
        }).treeData,
      });
    },
    addItem: (itemName) => {
      setData({
        ...data,
        treeData: data.treeData.concat({
          name: itemName,
        }),
      });
    },
    removeItem: (path, getNodeKey, removeNodeAtPath) => {
      setData({
        ...data,
        treeData: removeNodeAtPath({
          treeData: data.treeData,
          path,
          getNodeKey,
        }),
      });
    },
  };

  const handleColorPicker = {
    show: (event) => {
      const target = event.target.getAttribute("data-target");
      const handler = event.target.getAttribute("data-handler");
      setMisc({
        ...misc,
        [target]: !misc[target],
        activeColorPicker: handler,
      });
    },
    close: (event) => {
      const target = event.target.getAttribute("data-target");
      setMisc({
        ...misc,
        displayPrimaryColorPicker: false,
        displayBorderColorPicker: false,
        displayTextColorPicker: false,
        activeColorPicker: null,
      });
    },
    change: (color) => {
      const active = misc.activeColorPicker;
      setMisc({
        ...misc,
        [active]: color.rgb,
      });
    },
  };
  return (
    <ProjectLayout loading={misc.loading}>
      <Component
        handleTree={handleTree}
        handleColorPicker={handleColorPicker}
        {...data}
        {...misc}
        {...pageProps}
      />
    </ProjectLayout>
  );
};

export default ProjectProvider;
