import React, { useState } from "react";
import {
  Card as MUICard,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Box,
} from "@mui/material";

const Card = ({ movie }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <MUICard sx={{ marginBottom: 2 }} onClick={toggleModal}>
        <CardMedia
          component="img"
          height="200"
          width="auto"
          image={movie.posterURL}
          alt={movie.movie}
          style={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.movie}
          </Typography>
        </CardContent>
      </MUICard>
      <Modal
        open={modalOpen}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {movie.movie}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {movie.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Genre: {movie.genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cinema: {movie.cinemaShows[0].cinema}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Showtime: {movie.cinemaShows[0].shows[0].timeToDisplay}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Format: {movie.cinemaShows[0].shows[0].formatLang}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Screen: {movie.cinemaShows[0].shows[0].screenName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {movie.cinemaShows[0].shows[0].rating} -{" "}
            {movie.cinemaShows[0].shows[0].ratingDescription}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Card;
