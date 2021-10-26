import axios from "axios";
import React, { useState, useEffect } from "react";
import ProjectLayout from "/components/app/base/ProjectLayout";
import { sleeper } from "/lib/Helpers";
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
  const [projectData, setProjectData] = useState({});
  const [misc, setMisc] = useState({
    displayPrimaryColorPicker: false,
    displayBorderColorPicker: false,
    displayTextColorPicker: false,
    activeColorPicker: null,
    loading: true,
    editingTitle: false,
  });
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const fetchSitemapData = async () => {
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
        setMisc({
          ...misc,
          loading: false,
        });
      });
  };

  const fetchProjectData = async () => {
    const { id } = router.query;
    if (!id) {
      return null;
    }
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/projects?UID=${id}`)
      .then((res) => {
        const project_name = res.data[0].name;
        const projectDBID = res.data[0].id;
        const projectUID = res.data[0].UID;
        const industry = res.data[0].industry;
        const sitemaps = res.data[0].sitemaps;
        setProjectData({
          ...projectData,
          projectName: project_name,
          projectDBID,
          projectUID,
          industry,
          sitemaps,
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

  const updateData = async () => {
    setSaving(true);
    const sitemapDBID = data.sitemapDBID;
    const { title, treeData, primaryColor, borderColor, textColor } = data;
    const sitemapData = {
      title,
      menu_schema: treeData,
      primary_color: primaryColor,
      border_color: borderColor,
      text_color: textColor,
    };
    await axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/sitemaps/${sitemapDBID}`, sitemapData)
      .then(sleeper(500))
      .then((res) => {
        console.log(data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Please try again.");
      })
      .finally(() => {
        setSaving(false);
      });
  };

  useEffect(() => {
    fetchSitemapData();
    fetchProjectData();
  }, [router]);

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
      setData({
        ...data,
        [active]: color.rgb,
      });
      // setTimeout(() => {
      //   updateData();
      // }, 1000);
    },
  };

  const handleTitleEditor = (event) => {
    setMisc({
      ...misc,
      editingTitle: true,
    });
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const saveTitle = () => {
    if (misc.editingTitle) {
      setMisc({
        ...misc,
        editingTitle: false,
      });
      setData({
        ...data,
        title: data.title.length > 0 ? data.title : "Untitled Sitemap",
      });
      updateData();
    }
  };

  const handleSave = () => {
    updateData();
  };

  return (
    <ProjectLayout loading={misc.loading}>
      <Component
        handleTitleEditor={handleTitleEditor}
        saveTitle={saveTitle}
        handleSave={handleSave}
        handleTree={handleTree}
        handleColorPicker={handleColorPicker}
        saving={saving}
        {...projectData}
        {...data}
        {...misc}
        {...pageProps}
      />
    </ProjectLayout>
  );
};

export default ProjectProvider;
