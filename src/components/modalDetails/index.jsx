import React from "react";

import { Button, Stack, List, Dialog } from "@material-ui/core";

export default function ModalDetails(props) {
  const { item, handleClose, handleOpen, open } = props;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Stack sx={{}}>
        <Button
          variant='contained'
          color='error'
          sx={{
            color: "#ffffff",
            position: "absolute",
            zIndex: "90",
            backgroundColor: "#9F0013",
          }}
          onClick={handleOpen}
        >
          Details
        </Button>
      </Stack>

      <Dialog
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <List sx={{ width: "90%" }}>
          {/* details */}

          <div
            style={{
              color: "black",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "#9F0013", padding: "2rem" }}>
                {item.name} Biography{" "}
              </h1>

              <div
                style={{
                  textAlign: "start",
                  marginBottom: "2rem",
                  padding: "2rem",
                }}
              >
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
                <p>
                  <b>Group Affiliation:</b> {item.connections.groupAffiliation}
                </p>
                <p>
                  <b>Relatives:</b> {item.connections.relatives}
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant='contained'
                  color='error'
                  sx={{
                    color: "#ffffff",
                    bottom: "1rem",
                    zIndex: "90",
                    backgroundColor: "#9F0013",
                  }}
                  onClick={handleClose}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </List>
      </Dialog>
    </div>
  );
}
