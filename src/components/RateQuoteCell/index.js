import React from "react";
import { tableCellFormatters } from "./../../utils/formatters";
import "./styles.css";

export default ({ label, value }) => (
  <td className={`cell ${label}`}>{tableCellFormatters[label].cell(value)}</td>
);
