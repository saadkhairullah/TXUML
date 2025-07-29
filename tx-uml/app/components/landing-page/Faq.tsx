'use client';
import MineLink from './MineLink';
import mine from "../../../public/mine.png";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import styles from "./Faq.module.css"; // Assuming you have some CSS for styling the FAQ section

type QuestionsProps = {
  questions: string;
  answers: React.ReactNode;
};

const Questions = ({ questions, answers }: QuestionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} className={styles.questionContainer}>
        <article className={styles.question}>
          <h3>{questions}</h3>
          <div>
          {!isOpen && (
            <button className={styles.button} onClick={() => setIsOpen(true)}>
              <FaPlus />
            </button>
          )}
          {isOpen && (
            <button className={styles.button}  onClick={() => setIsOpen(false)}>
              <FaMinus />
            </button>
          )}
          </div>
        </article>
        <article className={`${isOpen && styles.answer}`}>
          {isOpen && <p>{answers}</p>}
        </article>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <Questions
        questions="What kind of data is available on the map?"
        answers={
          <span>
            The map displays:
            <br />
            • Locations of abandoned and active underground coal mines
            <br />
            • Mine status (active, inactive, sealed, unknown)
            <br />
            • Mining eras (with historical overlays)
            <br />
            • Strata layers, mining regions, and field boundaries Site-level
            &emsp;metadata (e.g., coordinates, known operator)
          </span>
        }
      />
      <Questions
        questions="Who should use TXUML?"
        answers={
          <span>
            • Developers and Landowners: Use it for evaluating land before
            &emsp;construction or development.
            <br />
            • City Planners & Engineers: Use it for urban planning and
            &emsp;zoning decisions.
            <br />
            • Homebuyers & Real Estate Agents: Use it for checking property
            &emsp;history and ground safety <br />
            • Government & Regulatory Agencies: Use it for mine safety
            &emsp;inspection coordination <br />
            • Researchers & Historians: Use it for studying historical coal
            &emsp;mining trends and regions
          </span>
        }
      />
      <Questions
        questions="Can I download the data?"
        answers={
          <>
            <span>
              • Export reports for documentation and environmental due
              diligence.
              <br />
              • Access historical mine maps where available.
            </span>
            <MineLink
              imageSrc={mine}
              linkUrl="https://www.rrc.texas.gov/surface-mining/historical-coal-mining/mining-regions-fields-and-sites/"
              altText="Link to mine data source"
              description="Mine Data source"
            />
          </>
        }
      />
      <Questions
        questions=" What risks are associated with underground mines?"
        answers={
          <span>
            Abandoned underground mines can pose risks such as: ground subsidence,
            gas emissions or water seepage
          </span>
        }
      />
    </div>
  );
};

export default Faq;