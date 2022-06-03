/**@jsxImportSource @emotion/react*/
import { css } from "@emotion/react";
import Popup from "../Popup/Popup"
import NoteForm from "./components/NoteForm.js";
import NotesList from "./components/NotesList.js";
import useNotes from "./hooks/useNotes";


function Notes() {
    const { addNote, isClosePopup, notes } = useNotes();

    return (
        <div css={css`
    display:flex;
    flex-direction:column;
    align-items: center;
    `}>

            <h2>Заметки</h2>
            <Popup
                buttonName="Add note"
                isClosePopup={isClosePopup}>

                <div css={css`
                    display: flex;
                    flex-wrap: wrap;
                    max-width: 1000px;
                    justify-content: center;
                    `}>
                    <NoteForm onSubmit={addNote} />
                </div>
            </Popup>

            <NotesList notes={notes} />

        </div>
    );
}

export default Notes;