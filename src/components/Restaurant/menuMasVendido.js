import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        marginTop: 20,
    },
});

function MasVendido() {

    const dish = {
        dishDescription: "Deliciosa Milanesa con Pure",
        dishDetailedDesc: "La milanesa es un filete fino, normalmente de carne vacuna, pasado por huevo batido y luego por pan rallado, que se cocina frito o (menos comúnmente) al horno. Por extensión, se llama milanesa a cualquier rebanada de un ingrediente rebozado y frito: hay así milanesas de pollo, de pescado, de soja, de berenjena o de mozzarella, entre otros ingredientes. No se conoce el origen de esta receta, aunque hay muchos mitos al respecto. Su nombre español proviene de la ciudad italiana de Milán. Desde fines del siglo xix es una comida típica de la cocina argentina, boliviana, chilena, paraguaya, mexicana y uruguaya.",
        dishName: "Milanesas con Pure",
        imageUrl: "https://i.pinimg.com/originals/18/eb/6d/18eb6d8fe68f9f24dabb6f800b3c891e.jpg",
        restaurantAddress: "San Jose 151, Buenos Aires, Argentina",
        restaurantName: "El Resto de Pipo",
    }
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
                    <Typography gutterBottom variant="h5" component="h2">
                        {dish.dishName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {dish.restaurantName}
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

export default MasVendido;
