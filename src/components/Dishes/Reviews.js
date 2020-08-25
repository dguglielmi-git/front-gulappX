import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
import Stars from "@material-ui/icons/Stars";
import Modal from "../Modal";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "70%",
    marginLeft: "412px",
    marginTop: "300px",
  },
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  marcoMain: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",

    width: "100vw",
    marginTop: "40px",
    paddingBottom: "40px",
    backgroundColor: "#F0F2FC",
    backgroundImage: "linear-gradient(to bottom, white, #DFE1EB)",
  },
  marcoReviews: {
    display: "flex",
    width: "900px",
    flexDirection: "column",
    borderRadius: "0px 3px 3px 0px",
    boxShadow: "0 3px 5px 2px #D8D9DE",
    backgroundColor: "white",
    marginTop: "20px",
  },
  review: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    padding: "5px",
  },
}));

export default function Reviews({
  reviews,
  dishId,
  fetchComments,
  fetchAverage,
}) {
  const classes = useStyles();
  const [comment, setComment] = React.useState("");
  const [ratings, setRatings] = React.useState({
    priceStar: 0,
    locationStar: 0,
    sizeStar: 0,
    attentionStar: 0,
    presentationStar: 0,
  });
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [modalState, setModalState] = React.useState(false);

  const handleClose = () => {
    setError(false);
  };

  const loggedUser = JSON.parse(localStorage.getItem("user"));

  const insertComment = async (comment, ratings) => {
    const payload = {
      dishId: dishId,
      fullName: loggedUser.fullName,
      title: "",
      body: comment,
      priceStar: ratings.priceStar,
      locationStar: ratings.locationStar,
      sizeStar: ratings.sizeStar,
      attentionStar: ratings.attentionStar,
      presentationStar: ratings.presentationStar,
    };
    try {
      const rutaBackend =
        localStorage.getItem("rutaBackend") + "apiGulappX/insertComment";
      await fetch(rutaBackend, {
        method: "POST",
        credential: "include",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then(() => {
          fetchComments();
          setComment("");
          setRatings(0);
          fetchAverage();
        });
    } catch (e) {
      console.log("Error al insertar el plato: ", e);
      alert(
        "Hubo en error al insertar un nuevo comentario. Por favor intente más tarde."
      );
    }
  };

  const validateReviews = () => {
    const found = Object.values(ratings).find((value) => value === 0);
    if (found === 0) {
      setError(true);
      setErrorMsg(
        "Por favor califica todas las categorias. Ésto ayuda a los usuarios a encontrar el mejor plato."
      );
    } else {
      insertComment(comment, ratings);
      setModalState(false);
    }
  };

  let html = "";

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleNewRating = (input, e) => {
    setRatings({
      ...ratings,
      [input]: e.target.value,
    });
  };

  const validateComment = () => {
    if (comment === "" || comment === " ") {
      setError(true);
      setErrorMsg("Por favor ingresa algún comentario antes de calificar.");
    } else {
      setModalState(true);
    }
  };

  if (Object.keys(reviews).length > 0) {
    html = (
      <List className={classes.root}>
        {reviews.map((rv, index) => (
          <React.Fragment>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>
                  {rv.fullName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={rv.fullName}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {rv.body}
                    </Typography>
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <Rating
                  value={
                    (rv.attentionStar +
                      rv.priceStar +
                      rv.locationStar +
                      rv.presentationStar +
                      rv.sizeStar) /
                    5
                  }
                  readOnly
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    );
  } else {
    html = (
      <p>
        Aún no existen comentarios para este plato. Animate a ser el primero en
        dejarlo!
      </p>
    );
  }
  return (
    <div className={classes.container}>
      <Divider />
      <h2 style={{ margin: "0px" }}>Comentarios:</h2>
      {html}
      {loggedUser && !loggedUser.isRestaurant && (
        <React.Fragment>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>
                  {loggedUser.fullName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </Avatar>
              </ListItemAvatar>
              <TextField
                placeholder="Escribí tu comentario..."
                style={{ width: "70%", paddingTop: "40" }}
                onChange={handleChange}
                value={comment}
                multiline
                rowsMax="4"
              />
              <ListItemSecondaryAction
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Fab title="Calificar" onClick={() => validateComment()}>
                  <Stars />
                </Fab>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Modal
            state={modalState}
            onClose={() => setModalState(false)}
            content={
              <div
                style={{
                  padding: "10px",
                  width: "300px",
                  fontFamily: "Oswald",
                  textAlign: "center",
                }}
              >
                <h3>Califica cada categoria:</h3>
                <span className={classes.review}>
                  Atención{" "}
                  <Rating
                    name="simple-controlled"
                    value={ratings.attentionStar}
                    onChange={(e) => handleNewRating("attentionStar", e)}
                  />
                </span>
                <span className={classes.review}>
                  Ubicación{" "}
                  <Rating
                    name="simple-controlled2"
                    value={ratings.locationStar}
                    onChange={(e) => handleNewRating("locationStar", e)}
                  />
                </span>
                <span className={classes.review}>
                  Presentación{" "}
                  <Rating
                    name="simple-controlled3"
                    value={ratings.presentationStar}
                    onChange={(e) => handleNewRating("presentationStar", e)}
                  />
                </span>
                <span className={classes.review}>
                  Precio{" "}
                  <Rating
                    name="simple-controlled4"
                    value={ratings.priceStar}
                    onChange={(e) => handleNewRating("priceStar", e)}
                  />
                </span>
                <span className={classes.review}>
                  Tamaño{" "}
                  <Rating
                    name="simple-controlled5"
                    value={ratings.sizeStar}
                    onChange={(e) => handleNewRating("sizeStar", e)}
                  />
                </span>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ marginTop: "34px" }}
                  onClick={validateReviews}
                >
                  Publicar comentario
                </Button>
              </div>
            }
          />
        </React.Fragment>
      )}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={error}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{errorMsg}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
}
