import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import './Planos.css'
import { Grid } from '@material-ui/core';
import Navbar from '../../components/estaticos/navbar/Navbar';
import Footer from '../../components/estaticos/footer/Footer';

function Planos() {
    return (
        <>
            <Navbar />
            <Grid className='gridPlano'>
                <Typography variant="h6" className='tituloAssinatura'>
                    Planos de Assinatura
                </Typography>
                <Grid item xs={6}>
                    <img src="src/assets/imagens/Environment-amico.png" alt="Ilustração de fazendeiro, vestido de camisa vermelha e com uma ferramenta na mão" style={{width: '53em'}} />
                </Grid>
                <Grid className='cards'>
                    <Box mx={2} display="flex">
                        <Card sx={{ maxWidth: 345 }} variant="outlined">
                            <CardMedia
                                sx={{ height: 140 }}
                                image="src/assets/imagens/coffee-beans-seeds.png"
                                title="Vetor de sementes de café"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    PLANO SEMENTE
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    1 produto ou serviço
                                    por R$ 49,90/mês
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Button variant="contained" size='small' color="primary" >
                                        Adquirir
                                    </Button>
                                </Box>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 345 }} variant="outlined">
                            <CardMedia
                                sx={{ height: 140 }}
                                image="src/assets/imagens/avocado.png"
                                title="Vetor de um abacate"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    PLANO FRUTO
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    2 produtos ou serviços
                                    por R$ 99,90/mês
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Button variant="contained" size='small' color="primary">
                                        Adquirir
                                    </Button>
                                </Box>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 345 }} variant="outlined">
                            <CardMedia
                                sx={{ height: 140 }}
                                image="src/assets/imagens/tree.png"
                                title="Vetor de uma árvore"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    PLANO ARVORE
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    3 produtos ou serviços
                                    por R$ 149,90/mês
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Button variant="contained" size='small' color="primary" >
                                        Adquirir
                                    </Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>                    
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default Planos;