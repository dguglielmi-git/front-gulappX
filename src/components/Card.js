import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        marginTop: 20,
        fontFamily: 'Oswald'
    },
});

function ImgCard({ dish }) {
    const classes = useStyles();
    // console.log("Plato", dish);
    return (
        <Card className={classes.card} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Imagen del plato"
                    height="200"
                    src={dish.imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'Oswald' }}>
                        {dish.dishName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontFamily: 'Oswald' }}>
                        {dish.restaurantName} - {dish.distance}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontFamily: 'Oswald' }}>
                        <Rating
                            value={Math.floor(Math.random() * 5) + 1}
                        />
                    </Typography>

                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Votar
        </Button>
                <Button size="small" color="primary">
                    Mas Informacion
        </Button>
            </CardActions> */}
        </Card>
    );
}

export default ImgCard;