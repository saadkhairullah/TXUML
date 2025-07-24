import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import styles from "./Faq.module.css"; // Assuming you have some CSS for styling the FAQ section
type QuestionsProps = {
  questions: string;
  answers: React.ReactNode;
};

const Questions = ({ questions, answers }: QuestionsProps) => {
  return (
    <div>
      <div className={styles.questionContainer}>
        <article className={styles.question}>
          <h3>{questions}</h3>
          <button>
            <FaPlus />
          </button>
          <button>
            <FaMinus />
          </button>
        </article>
        <article className={styles.answer}>
          <p>{answers}</p>
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
          answers=<text>
            The map displays:
            <br />
            &#8226; Locations of abandoned and active underground coal mines
            <br />
            &#8226; Mine status (active, inactive, sealed, unknown)
            <br />
            &#8226; Mining eras (with historical overlays)
            <br />
            &#8226; Strata layers, mining regions, and field boundaries
            Site-level metadata (e.g., coordinates, known operator)
          </text>
        />
        <Questions
          questions="Who should use TXUML?"
          answers=<text>
            &#8226; Developers and Landowners: Use it for evaluating land before
            construction or development.
            <br />
            &#8226; City Planners & Engineers: Use it for urban planning and
            zoning decisions.
            <br />
            &#8226; Homebuyers & Real Estate Agents: Use it for checking
            property history and ground safety <br />
            &#8226; Government & Regulatory Agencies: Use it for mine safety
            &#8194; &#8194;&#8194;inspection coordination <br />
            &#8226; Researchers & Historians: Use it for studying historical
            coal &#8194; &#8194;&#8194;mining trends and regions
          </text>
        />
        <Questions
          questions="Can I download the data?"
          answers=<text>
            &#8226; Export reports for documentation and environmental due
            diligence.
            <br />
            &#8226; Access historical mine maps where available.
          </text>
        />
        <Questions
          questions=" What risks are associated with underground mines?"
          answers=<text>
            Abandoned underground mines can pose risks such as: ground
            subsidence, gas emissions or water seepage
          </text>
        />
    </div>
  );
};

export default Faq;
