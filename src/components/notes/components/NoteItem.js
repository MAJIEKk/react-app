/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const NoteItem = ({ data: { title, date, description } }) => (
    <div
        css={css`
      width: 220px;
      box-shadow: 0px 0px 2px 0px #000;
      margin: 15px;
      text-align: center;
    `}
    >
        <h2 css={css`
          border: 1px solid #00000087;
  padding: 5px;
  margin: 10px 5px;
  `}>{title}</h2>
        <h3 css={css`
          border: 1px solid #00000087;
  padding: 5px;
  margin: 10px 5px;
  `}>{date}</h3>
        <p css={css`
          border: 1px solid #00000087;
  padding: 5px;
  margin: 10px 5px;
  `}>{description}</p>
    </div>
);

export default NoteItem;
