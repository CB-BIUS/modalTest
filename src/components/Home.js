import React from 'react'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import data from './data.js'

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Home() {

    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);

    const [open, setOpen] = React.useState(false);
    const [selectedAlbum, setSelectedAlbum] = React.useState(null);

    const handleOpen = (card) => {
      setSelectedAlbum(card);  
      setOpen(true);
    };
  
    const handleClose = () => {
      setSelectedAlbum(null);  
      setOpen(false);
    };

    return (
        <Container maxWidth="md">
            <Grid container spacing={4}>
                {/* Map here */}
                {data.map((card) => (
                <Grid item key={card}  xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia style = {{ height: 0, paddingTop: '56%'}}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {card.first_name} {card.last_name}
                        </Typography>
                        <Typography>
                            {card.email}
                        </Typography>

                            <button type="button" onClick={() => handleOpen(card)}>
                                Open Modal
                            </button>

                            <Modal
                            open={open}
                            onClose={handleClose}
                        >
                            <div style={modalStyle} className={classes.paper}>
                                {/* <h2 id="simple-modal-title">{selectedAlbum && selectedAlbum.last_name}</h2>
                                <img src={selectedAlbum && selectedAlbum.image} alt="..." />
                                <p id="simple-modal-description">
                                {selectedAlbum && selectedAlbum.gender}
                                </p>
                                <p id="simple-modal-description">
                                {selectedAlbum && selectedAlbum.ip_address}
                                </p>
                                <p id="simple-modal-description">
                                {selectedAlbum && selectedAlbum.email}
                                </p> */}
                            <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia style = {{ height: 0, paddingTop: '56%'}}
                            image={selectedAlbum && selectedAlbum.image}
                            title="Image title"
                        />
                        </Card>
                        </Grid>
                        
                            </Grid>

                            </div>
                        </Modal>

                  </CardContent>  
                    </Card>
                </Grid>
                ))}
                {/* End Map */}
                
            </Grid>
        </Container>
    )
}

export default Home
