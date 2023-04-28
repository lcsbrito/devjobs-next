"use client";

import React, { useState, useEffect } from "react";
import createJob from "@/requests/createJob";
import { useRouter } from "next/navigation";

export default function CreateJob() {
  const { push } = useRouter();
  const [job, setJob] = useState({
    company: "",
    position: "",
    location: "",
    contract: "Full-Time",
    description: "",
    website: "",
    apply: "",
    logo: "",
    logoBackground: "",
    requirements: {
      content: "",
      items: [],
    },
    role: {
      content: "",
      items: [],
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJob((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRequirementsContentChange = (event) => {
    const { value } = event.target;
    setJob((prevState) => ({
      ...prevState,
      requirements: {
        ...prevState.requirements,
        content: value,
      },
    }));
  };

  const handleRequirementsChange = (event, index) => {
    const { value } = event.target;
    setJob((prevState) => ({
      ...prevState,
      requirements: {
        ...prevState.requirements,
        items: prevState.requirements.items.map((item, i) =>
          i === index ? value : item
        ),
      },
    }));
  };

  const handleAddRequirement = () => {
    setJob((prevState) => ({
      ...prevState,
      requirements: {
        ...prevState.requirements,
        items: [...prevState.requirements.items, ""],
      },
    }));
  };

  const handleRemoveRequirement = (index) => {
    setJob((prevState) => ({
      ...prevState,
      requirements: {
        ...prevState.requirements,
        items: prevState.requirements.items.filter((item, i) => i !== index),
      },
    }));
  };

  const handleRoleChange = (event, index) => {
    const { value } = event.target;
    setJob((prevState) => ({
      ...prevState,
      role: {
        ...prevState.role,
        items: prevState.role.items.map((item, i) =>
          i === index ? value : item
        ),
      },
    }));
  };

  const handleRoleContentChange = (event) => {
    const { value } = event.target;
    setJob((prevState) => ({
      ...prevState,
      role: {
        ...prevState.role,
        content: value,
      },
    }));
  };
  const handleAddRole = () => {
    setJob((prevState) => ({
      ...prevState,
      role: {
        ...prevState.role,
        items: [...prevState.role.items, ""],
      },
    }));
  };

  const handleRemoveRole = (index) => {
    setJob((prevState) => ({
      ...prevState,
      role: {
        ...prevState.role,
        items: prevState.role.items.filter((item, i) => i !== index),
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createJob(job).then((data) => {
      push(`/jobs/${data._id}`);
    });
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="flexform">
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={job.position}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contract:
          <select
            name="contract"
            value={job.contract}
            onChange={handleInputChange}
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
          </select>
        </label>

        <label>
          Description:
          <textarea
            type="text"
            name="description"
            value={job.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Website:
          <input
            type="URL"
            name="website"
            value={job.website}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Apply:
          <input
            type="URL"
            name="apply"
            value={job.apply}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Logo:
          <input
            type="URL"
            name="logo"
            value={job.logo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Logo Background:
          <input
            type="URL"
            name="logoBackground"
            value={job.logoBackground}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={job.location}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Requirements Content:
          <textarea
            name="content"
            value={job.requirements.content}
            onChange={handleRequirementsContentChange}
          />
        </label>
        <label>
          Requirements:
          <ul>
            {job.requirements.items.map((item, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={item}
                  onChange={(event) => handleRequirementsChange(event, index)}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveRequirement(index)}
                  className="button-secondary"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={handleAddRequirement}
            className="button-primary"
          >
            Add Requirement
          </button>
        </label>
        {/* ROLE */}
        <label>
          Role Content:
          <textarea
            name="content"
            value={job.role.content}
            onChange={handleRoleContentChange}
          />
        </label>
        <label>
          Role:
          <ul>
            {job.role.items.map((item, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={item}
                  onChange={(event) => handleRoleChange(event, index)}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveRole(index)}
                  className="button-secondary"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={handleAddRole}
            className="button-primary"
          >
            Add Role
          </button>
        </label>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
