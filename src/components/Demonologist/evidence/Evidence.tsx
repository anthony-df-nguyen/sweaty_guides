import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ghostsData, GhostData, Evidence, evidence } from "./constants";

type Props = {};

const EvidencePicker = (props: Props) => {
  const [selectedEvidence, handleEvidence] = useState<Evidence[]>([]);
  const [possibleGhosts, handlePossibleGhosts] =
    useState<GhostData[]>(ghostsData);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const val = e.currentTarget.value as Evidence;
    handleEvidence((prevSelected) =>
      prevSelected.includes(val)
        ? prevSelected.filter((row) => row !== val)
        : [...prevSelected, val]
    );
  };

  const filterGhostsByEvidence = (selectedEvidence: Evidence[]) => {
    const calc = ghostsData.filter((ghost) =>
      selectedEvidence.every((evidence) => ghost.evidence.includes(evidence))
    );
    handlePossibleGhosts(calc);
  };

  useEffect(() => {
    filterGhostsByEvidence(selectedEvidence);
  }, [selectedEvidence]);

  return (
    <div>
      {/* Selector */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: ".5rem",
        }}
      >
        {evidence.map((ev) => (
          <button
            onClick={handleClick}
            value={ev}
            style={{
              backgroundColor: selectedEvidence.includes(ev)
                ? "var(--ifm-color-primary-dark)"
                : "gray",
              padding: ".5rem",
              flex: "1",
              maxWidth: "300px",
              color: "white",
              border: "none",
            }}
            key={ev}
          >
            {ev}
          </button>
        ))}
      </div>
      {/* Possible Ghosts */}
      <br />
      <h2>Possible Ghosts and Remaining Evidence</h2>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
        }}
      >
        {possibleGhosts.map((row) => {
          // ✅ Get remaining evidence for this ghost that has NOT been selected yet
          const remainingEvidence = row.evidence.filter(
            (ev) => !selectedEvidence.includes(ev)
          );

          return (
            <div
              key={row.ghost}
            >
              <Accordion
                style={{
                  backgroundColor: "gray",
                  color: "white"
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "1rem" }}>
                      {row.ghost}
                    </div>
                    <div
                      style={{
                        display: "block",
                        gap: ".5rem",
                        fontSize: "1rem",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "14px",
                          display: "flex",
                          gap: ".5rem",
                        }}
                      >
                        {remainingEvidence.length > 0 ? (
                          remainingEvidence.map((ev) => (
                            <div key={ev}>{ev}</div>
                          ))
                        ) : (
                          <span style={{ color: "green" }}>
                            All evidence found
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails style={{ fontSize: "14px" }}>
                  <div>
                    <b>Description</b>
                    <div>{row.description}</div>
                  </div>
                  <br />
                  <div>
                    <b>Strengths</b>
                    <div>{row.strengths}</div>
                  </div>
                  <br />
                  <div>
                    <b>Weaknesses</b>
                    <div>{row.weaknesses}</div>
                  </div>
                  {row.tips && (
                    <div>
                      <br />
                      <b>Tips</b>
                      <ul>
                        {row.tips.map((tip, i) => (
                          <li key={`tip${i}`}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EvidencePicker;
