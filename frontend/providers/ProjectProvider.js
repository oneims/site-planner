import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import ProjectLayout from "/components/app/base/ProjectLayout";
import { generateUID, sleeper, findNodeByNodeId } from "/lib/Helpers";
import { useRouter } from "next/router";
import { Schema__001 } from "/lib/SitemapSchema";
import { changeNodeAtPath } from "react-sortable-tree";

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
  const [project, setProject] = useState({
    projectName: null,
    projectDBID: null,
    number_of_pages: null,
    PROJECT_UID: null,
    industry: null,
    sitemaps: null,
  });
  const [misc, setMisc] = useState({
    displayPrimaryColorPicker: false,
    displayBorderColorPicker: false,
    displayTextColorPicker: false,
    activeColorPicker: null,
    loading: true,
    editingTitle: false,
  });
  const [saving, setSaving] = useState(false);
  const [projectDataReady, setProjectDataReady] = useState(false);
  const router = useRouter();

  const fetchSitemapData = async () => {
    const { sitemapParams } = router.query;
    if (!sitemapParams) {
      return null;
    }
    setMisc({
      ...misc,
      loading: true,
    });
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
        const sitemapUID = res.data[0].UID;
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
        console.log("Sitemap Data: ", res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setMisc({
          ...misc,
          loading: false,
        });
        setProjectDataReady(false);
      });
  };

  const fetchProjectData = async () => {
    const { id } = router.query;
    if (!id) {
      return null;
    }
    setProjectDataReady(false);
    setMisc({
      ...misc,
      loading: true,
    });
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/projects?UID=${id}`)
      .then(sleeper(500))
      .then((res) => {
        const project_name = res.data[0].name;
        const projectDBID = res.data[0].id;
        const PROJECT_UID = res.data[0].UID;
        const industry = res.data[0].industry;
        const sitemaps = res.data[0].sitemaps.sort((a, b) => b.id - a.id);
        const number_of_pages = res.data[0].number_of_pages;
        setProject({
          ...project,
          projectName: project_name,
          projectDBID,
          number_of_pages,
          PROJECT_UID,
          industry,
          sitemaps,
        });
        console.log("Project Data: ", res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setMisc({
          ...misc,
          loading: false,
        });
        setProjectDataReady(true);
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
    updateNodeColor: (nodeId) => {
      console.log(nodeId ? `${nodeId} clicked` : `Node without an ID clicked`);
      // ******** Below snippet helps update the color of a singular node
      // let updatedTreeData;
      // let itemToUpdate;
      // if (nodeId) {
      //   console.log(nodeId);
      //   updatedTreeData = [...data.treeData];
      //   itemToUpdate = findNodeByNodeId(updatedTreeData, nodeId);
      //   itemToUpdate.name = "New Name";
      //   setData({
      //     ...data,
      //     treeData: [...updatedTreeData],
      //   });
      // }
      // ******** Above snippet helps update the color of a singular node
      // const item
      // itemToUpdate = { ...updatedTreeData[index] };
      // itemToUpdate.name = "New Name";
      // updatedTreeData[index] = itemToUpdate;
      // if (updatedTreeData[parentIndex].children) {
      //   // itemToUpdate = { ...updatedTreeData[parentIndex].children[index] };
      //   // itemToUpdate.name = "New Name";
      //   // updatedTreeData[parentIndex].children[parentIndex] = itemToUpdate;
      // } else {
      //   itemToUpdate = { ...updatedTreeData[index] };
      //   itemToUpdate.name = "New Name";
      //   updatedTreeData[index] = itemToUpdate;
      // }
      // setData({
      //   ...data,
      //   treeData: [...updatedTreeData],
      // });
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
            nodeId: generateUID(process.env.NEXT_PUBLIC_UID_THRESHOLD),
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
          nodeId: generateUID(process.env.NEXT_PUBLIC_UID_THRESHOLD),
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

  const addNewSitemap = (sitemapIdToClone) => {
    const { projectName, projectDBID, PROJECT_UID, sitemaps } = project;
    const sitemapsArr = sitemaps.map((elem) => elem.id);
    const SITEMAP_UID = generateUID(process.env.NEXT_PUBLIC_UID_THRESHOLD);
    const NEW_URL = `/project/${PROJECT_UID}/sitemap/${SITEMAP_UID}`;
    setMisc({
      ...misc,
      loading: true,
    });
    let sitemapData;
    if (sitemapIdToClone) {
      const sitemapToClone = sitemaps.filter((elem) => elem.id === sitemapIdToClone)[0];
      sitemapData = {
        UID: SITEMAP_UID,
        title: `${sitemapToClone.title} (Clone)`,
        menu_schema: sitemapToClone.menu_schema,
        primary_color: sitemapToClone.primary_color,
        border_color: sitemapToClone.border_color,
        text_color: sitemapToClone.text_color,
        project_name: projectName,
      };
    } else {
      sitemapData = {
        UID: SITEMAP_UID,
        title: "Untitled Sitemap",
        menu_schema: Schema__001,
        primary_color: {
          r: "234",
          g: "240",
          b: "246",
          a: "1",
        },
        border_color: {
          r: "203",
          g: "214",
          b: "226",
          a: "1",
        },
        text_color: {
          r: "80",
          g: "110",
          b: "145",
          a: "1",
        },
        project_name: projectName,
      };
    }
    axios;
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/sitemaps`, sitemapData)
      .then(sleeper(900))
      .then((res) => {
        console.log(res);
        const sitemapDBID = res.data.id;
        sitemapsArr.push(sitemapDBID);
        axios
          .put(`${process.env.NEXT_PUBLIC_API_URL}/projects/${projectDBID}`, {
            sitemaps: sitemapsArr,
          })
          .then((res) => {
            console.log(res);
            Router.push(NEW_URL);
            setMisc({
              ...misc,
              loading: false,
            });
          })
          .catch((err) => {
            alert("Oops, something went wrong! Please try again later.");
            console.log(err);
          });
      })
      .catch((err) => {
        setMisc({
          ...misc,
          loading: false,
        });
        alert("Oops, something went wrong! Please try again later.");
        console.log(err);
      });
  };

  return (
    <ProjectLayout loading={misc.loading}>
      <Component
        handleTitleEditor={handleTitleEditor}
        saveTitle={saveTitle}
        handleSave={handleSave}
        addNewSitemap={addNewSitemap}
        handleTree={handleTree}
        handleColorPicker={handleColorPicker}
        saving={saving}
        projectDataReady={projectDataReady}
        {...project}
        {...data}
        {...misc}
        {...pageProps}
      />
    </ProjectLayout>
  );
};

export default ProjectProvider;
