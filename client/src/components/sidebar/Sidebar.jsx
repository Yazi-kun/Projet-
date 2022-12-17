import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarItem">
          <div className="sidebarItemTitle">ABOUT ME</div>
          <div className="ab">
          <img
            src="assets/self.jpg"
            alt=""
            className="sidebarImg"
          />
          <p className="sidebarAbout">
            Latamene Yasmine, electronic student passionate about travelling and cooking.
          </p>
          </div>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">CATEGORIES</div>
          <ul className="sidebarCategoryList">
            {categories.map((cat) => (
              <Link
                to={`/?category=${cat.name}`}
                className="link sidebarCategoryListItem"
                key={cat._id}
              >
                <li>{cat.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">FOLLOW US</div>
          <div className="sidebarIcons">
            <a
              href="https://www.instagram.com/yasmine.latamene/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram-square sidebarIcon"></i>
            </a>
            <a
              href="https://www.facebook.com/yasmine.ninette.58"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook-square sidebarIcon"></i>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
