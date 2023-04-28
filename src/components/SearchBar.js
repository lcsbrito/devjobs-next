import React, { useState, useEffect } from "react";
import Image from "next/image";
import loopIcon from "@/assets/loop.svg";
import pinIcon from "@/assets/pin.svg";
import loopMobile from "@/assets/loopmobile.svg";
import styles from "@/styles/searchbar.module.css";
import searchJobs from "@/requests/searchJobs";

export default function SearchBar({ setJobs, setSearchActive }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 992) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFullTimeChange = () => {
    setFullTimeOnly(!fullTimeOnly);
  };

  const handleSearch = async () => {
    const jobs = await searchJobs(title, location, fullTimeOnly);
    setSearchActive(true);
    setJobs(jobs);
  };

  return (
    <div className={styles.searchcontainer}>
      <div className={styles.inputcontainer}>
        {/* if screenSize is mobile do not display the loop icon */}
        {screenSize !== "mobile" && (
          <Image src={loopIcon} alt="" className={styles.icon} />
        )}
        <input
          type="text"
          placeholder={
            screenSize === "mobile" || screenSize === "tablet"
              ? "Filter by title..."
              : "Filter by title, companies, expertise..."
          }
          value={title}
          onChange={handleTitleChange}
        />
      </div>

      {screenSize !== "mobile" && (
        <div className={styles.inputcontainer}>
          <Image src={pinIcon} alt="" className={styles.icon} />
          <input
            type="text"
            placeholder="Filter by location…"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
      )}

      <div className={styles.checkboxcontainer}>
        {/* if screenSize is mobile do not display the checkbox */}
        {screenSize !== "mobile" && (
          <label>
            <input
              type="checkbox"
              checked={fullTimeOnly}
              onChange={handleFullTimeChange}
            />
            <span>
              {/* is screenSize is tablet only "full time" */}
              {screenSize === "tablet" ? "Full time" : "Full time only"}
            </span>
          </label>
        )}
        <button className={styles.buttonsearch} onClick={handleSearch}>
          {screenSize === "mobile" ? (
            <Image src={loopMobile} alt="" className={styles.icon} />
          ) : (
            "Search"
          )}
        </button>
      </div>
    </div>
  );
}
