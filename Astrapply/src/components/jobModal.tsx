import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_JOB } from "../utils/mutations";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const JobModal = () => {
  const navigate = useNavigate();
  const [addJob, { data, loading, error }] = useMutation(CREATE_JOB);
  const { user } = useAuth0();

  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [formReady, setFormReady] = useState(false);
  const [formState, setFormState] = useState({
    title: "",
    company: "",
    applyMethod: "",
    description: "",
    contact: "",
    resume: "",
    coverLetter: "",
    portfolio: "",
    status: "Waiting...",
    notes: "",
  });

  const toggleOptionalFields = () => {
    setShowOptionalFields(!showOptionalFields);
  };
  const resetFormState = () => {
    setFormState({
      title: "",
      company: "",
      applyMethod: "",
      description: "",
      contact: "",
      resume: "",
      coverLetter: "",
      portfolio: "",
      status: "Waiting...",
      notes: "",
    });
    setFormReady(false);
  };

  const closeModal = (e: any) => {
    e.preventDefault();
    const dialog: HTMLElement | any = document.getElementById("addJobModal");
    dialog.close();
    resetFormState();
    setShowOptionalFields(false);
  };

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    if (id === "title" || id === "company" || id === "applyMethod") {
      setFormReady(
        formState.title.trim() !== "" &&
          formState.company.trim() !== "" &&
          formState.applyMethod.trim() !== ""
      );
    }
  };

  const jobSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const sub = user?.sub;
      const job = await addJob({ variables: { ...formState, authSub: sub } });
      navigate("/dash");
    } catch (err) {
      console.log(err);
      console.log(formState);
      resetFormState();
      const dialog: HTMLElement | any = document.getElementById("addJobModal");
      dialog.close();
    }
  };
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <>
      <form>
        <header>
          <div className="closeModal" onClick={closeModal}>
            x
          </div>
          <h1>New job!</h1>
          <div className="hide" onClick={closeModal}>
            X
          </div>
        </header>
        <h3>* required</h3>
        <section className="requiredJobInput">
          <p>* Job Title:</p>
          <input
            required
            type="text"
            id="title"
            placeholder="ex:Senior Developer"
            value={formState.title}
            onChange={handleInputChange}
          />
          <p>* Company:</p>
          <input
            required
            type="text"
            id="company"
            placeholder="ex:Google"
            value={formState.company}
            onChange={handleInputChange}
          />
          <p>* Apply Method:</p>
          <input
            required
            type="text"
            id="applyMethod"
            placeholder="ex:LinkedIn"
            value={formState.applyMethod}
            onChange={handleInputChange}
          />
        </section>

        {showOptionalFields && (
          <>
            <div className="showLessFields" onClick={toggleOptionalFields}>
              Show less info ⬆️
            </div>
            <p>Job Description:</p>
            <input
              type="text"
              id="description"
              value={formState.description}
              onChange={handleInputChange}
            />
            <p>Contact:</p>
            <input
              type="text"
              id="contact"
              value={formState.contact}
              onChange={handleInputChange}
            />
            <p>Resume:</p>
            <input
              type="text"
              id="resume"
              value={formState.resume}
              onChange={handleInputChange}
            />
            <p>Cover Letter:</p>
            <input
              type="text"
              id="coverLetter"
              value={formState.coverLetter}
              onChange={handleInputChange}
            />
            <p>Portfolio:</p>
            <input
              type="text"
              id="portfolio"
              value={formState.portfolio}
              onChange={handleInputChange}
            />
            <p>Status:</p>
            <input type="text" id="status" value={formState.status} disabled />
            <p>Notes:</p>
            <textarea
              id="notes"
              value={formState.notes}
              onChange={handleInputChange}
            ></textarea>
          </>
        )}

        {!showOptionalFields && (
          <div className="showOptionalFields" onClick={toggleOptionalFields}>
            Add More Info ⬇️
          </div>
        )}

        <button
          disabled={!formReady}
          className="addJobModalSubmit"
          onClick={jobSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default JobModal;
