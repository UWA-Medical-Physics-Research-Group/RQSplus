import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>First author</th>
            <th>Year</th>
            <th className="expand">Image protocol quality</th>
            <th>Multiple segmentations</th>
            <th>Phantom study</th>
            <th>Imaging at multiple time points</th>
            <th>Feature reduction or adjustment for multiple testing</th>
            <th>Multivariable analysis</th>
            <th>Biological correlates</th>
            <th>Cut-off analysis</th>
            <th>Discrimination statistics</th>
            <th>Calibration statistics</th>
            <th>Prospective study</th>
            <th>Validation</th>
            <th>Comparison to 'gold standard'</th>
            <th>Potential clinical applications</th>
            <th>Cost-effectiveness analysis</th>
            <th>Open science and data</th>
            <th>Total score</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            let totalScorePercentage = ((row.totalScore / 36) * 100).toFixed(2);
            // Calculate totalScore as a percentage out of 36
            if (totalScorePercentage < 0) {
              totalScorePercentage = 0;
            }

            return (
              <tr key={idx}>
                <td>{row.name}</td>
                <td>{row.year}</td>
                <td className="expand">
                  {row.imageProtocolQuality.map((protocol, index) => (
                    <React.Fragment key={index}>
                      {protocol}
                      <br />
                    </React.Fragment>
                  ))}
                </td>
                <td>{row.multipleSegmentations}</td>
                <td>{row.phantomStudy}</td>
                <td>{row.multipleTimePoints}</td>
                <td>{row.featureReduction}</td>
                <td>{row.multivariable}</td>
                <td>{row.biological}</td>
                <td>{row.cutOff}</td>
                <td className="expand">
                  {row.discrimination.map((disc, index) => (
                    <React.Fragment key={index}>
                      {disc}
                      <br />
                    </React.Fragment>
                  ))}
                </td>
                <td className="expand">
                  {row.calibration.map((cal, index) => (
                    <React.Fragment key={index}>
                      {cal}
                      <br />
                    </React.Fragment>
                  ))}
                </td>
                <td>{row.prospective}</td>
                <td>{row.validation}</td>
                <td>{row.gold}</td>
                <td>{row.clinicalUtility}</td>
                <td>{row.cost}</td>
                {/* <td>{row.open}</td> */}
                <td className="expand">
                  {row.open.map((openSource, index) => (
                    <React.Fragment key={index}>
                      {openSource}
                      <br />
                    </React.Fragment>
                  ))}
                </td>

                <td>{`${row.totalScore} (${totalScorePercentage}%)`}</td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill onClick={() => editRow(idx)} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
