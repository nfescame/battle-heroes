import React from "react";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";

export default function ModalDetails(props) {
  const { item } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant='contained'
        sx={{ top: "3rem", left: "1rem", zIndex: "100" }}
        onClick={handleOpen}
      >
        Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {/* details */}
          {/* Appearance */}
          <div className='mx-5 row row-cols-1'>
            <h1>{item.name}</h1>
            <div
              className='card text-white bg-danger mb-3 col'
              style={{ maxWidth: "35rem" }}
            >
              <h1>Appearance</h1>
              <div className='card-body'>
                <p>
                  <b>Gender:</b> {item.appearance.gender}{" "}
                </p>
                <p>
                  <b>Race:</b> {item.appearance.race}
                </p>
                <p>
                  <b>Height:</b> {item.height}
                </p>
                <p>
                  <b>Weight:</b> {item.weight}
                </p>
                <p>
                  <b>Eye Color:</b> {item.appearance.eyeColor}
                </p>
                <p>
                  <b>Hair Color:</b> {item.appearance.hairColor}
                </p>
              </div>
            </div>
            {/* Biography */}
            <div
              className='card text-white bg-primary mb-3 col'
              style={{ maxWidth: "35rem" }}
            >
              <h1>Biography</h1>
              <div className='card-body'>
                <p>
                  <b>Full Name:</b> {item.biography.fullName}{" "}
                </p>
                <p>
                  <b>Alter Egos:</b> {item.biography.alterEgos}
                </p>
                <p>
                  <b>Aliases:</b> {item.biography.aliases}
                </p>
                <p>
                  <b>Place Of Birth:</b> {item.biography.placeOfBirth}
                </p>
                <p>
                  <b>First Appearance:</b>
                  {item.biography.firstAppearance}
                </p>
                <p>
                  <b>Publisher:</b> {item.biography.publisher}
                </p>
              </div>
            </div>
            {/* occupation */}
            <div
              className='card text-white bg-success mb-3 col'
              style={{ maxWidth: "35rem" }}
            >
              <h1>Work</h1>
              <div className='card-body'>
                <p>
                  <b>Occupation:</b> {item.work.occupation}{" "}
                </p>
                <p>
                  <b>Base:</b> {item.work.base}
                </p>
              </div>
            </div>
            {/* connections */}
            <div
              className='card text-white bg-info mb-3 col'
              style={{ maxWidth: "35rem" }}
            >
              <h1>Connections</h1>
              <div className='card-body'>
                <p>
                  <b>Group Affiliation:</b> {item.connections.groupAffiliation}
                </p>
                <p>
                  <b>Relatives:</b> {item.connections.relatives}
                </p>
              </div>
            </div>
          </div>
          {/* <Typography>{item.name}</Typography>
          <ListItem>
            <ListItemText
              primary={item.appearance.eyeColor}
              secondary={item.appearance.eyeColor}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary='Work' secondary='Jan 7, 2014' />
          </ListItem>
          <ListItem>
            <ListItemText primary='Vacation' secondary='July 20, 2014' />
          </ListItem> */}
        </List>
      </Modal>
    </div>
  );
}
