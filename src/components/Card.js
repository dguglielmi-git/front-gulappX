import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
        </Card>
    );
}

export default ImgCard;