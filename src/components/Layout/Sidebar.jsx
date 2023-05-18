import { styled } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { BiCameraMovie } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { HiOutlineFilm } from "react-icons/hi";

function Sidebar() {
  const menus = [
    {
      name: "전체",
      path: "/homepage/all",
      icon: <HiOutlineFilm style={{ marginRight: "5px" }} />,
    },
    {
      name: "영화",
      path: "/homepage/movie",
      icon: <HiOutlineFilm style={{ marginRight: "5px" }} />,
    },
    {
      name: "TV",
      path: "/homepage/tv",
      icon: <MdOndemandVideo style={{ marginRight: "5px" }} />,
    },
  ];

  return (
    <>
      <SidebarArea>
        {menus.map((menu, index) => {
          return (
            <MenuArea key={index}>
              <Link
                exact
                style={{ color: "white", textDecoration: "none" }}
                to={menu.path}
                activeStyle={{ color: "black" }}
              >
                {/* {menu.icon} */}
                <SidebarItem menu={menu} />
              </Link>
            </MenuArea>
          );
        })}
      </SidebarArea>
    </>
  );
}

export default Sidebar;

const SidebarArea = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  color: white;
  background: #141517;
  width: 200px;
  height: 100%;
  border-right: 1px #101112 solid;
`;

const MenuArea = styled.div`
  padding: 20px;
  background-color: #141517;
  height: 35px;
  border-radius: 10px;
  margin-bottom: 2px;
  margin-top: 2px;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
`;
