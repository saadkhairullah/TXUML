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
          <>
            The map displays:
            <br />
            &#8226; Locations of abandoned and active underground coal mines
            <br />
            &#8226; Mine status (active, inactive, sealed, unknown)
            <br />
            &#8226; Mining eras (with historical overlays)
            <br />
            &#8226; Strata layers, mining regions, and field boundaries Site-level metadata (e.g., coordinates, known operator)
          </>
        }
      />
      <Questions
        questions="Who should use TXUML?"
        answers={
          <>
            &#8226; Developers and Landowners: Use it for evaluating land before construction or development.
            <br />
            &#8226; City Planners & Engineers: Use it for urban planning and zoning decisions.
            <br />
            &#8226; Homebuyers & Real Estate Agents: Use it for checking property history and ground safety
            <br />
            &#8226; Government & Regulatory Agencies: Use it for mine safety inspection coordination
            <br />
            &#8226; Researchers & Historians: Use it for studying historical coal mining trends and regions
          </>
        }
      />
      <Questions
        questions="Can I download the data?"
        answers={
          <>
            &#8226; Export reports for documentation and environmental due diligence.
            <br />
            &#8226; Access historical mine maps where available.
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
        questions="What risks are associated with underground mines?"
        answers={
          <>
            Abandoned underground mines can pose risks such as: ground subsidence, gas emissions or water seepage
          </>
        }
      />
    </div>
  );
};

export default Faq;
