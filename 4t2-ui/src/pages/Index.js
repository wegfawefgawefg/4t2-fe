import React from 'react';
// import Typography from '@mui/material/Typography';
import { 
    Box, Grid, CardContent, CardActions, Button,
    Typography, ButtonGroup, Paper, 
    Container,
    AppBar, Toolbar, IconButton, Card
    } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "./logo.jpeg";

const cardStyle ={
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
        maxWidth: '25%',
        maxHeight: '25%',
    },
}

const rowCardStyle = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
        maxWidth: '50%',
        maxHeight: '50%',
    },
}

const sepCardStyle = {
    height: '100%',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    img: {
        maxWidth: '50%',
        maxHeight: '50%',
    },
}


export default function Index() {
  return (
    <div>
      <Container>
        <br />
        <Card>
            <CardContent sx={cardStyle}>
                <Container>
                    <Typography variant="h2" gutterBottom>4T2</Typography>
                    <Typography variant="h6" gutterBottom>4T2 is THE Convex fork on EVMOS.</Typography>
                    <Button variant="contained" color="primary"> Stake </Button>
                </Container>

                <img src={logo} alt="logo" />
            </CardContent>
        </Card>
        </Container>
        <br />
        <Container>
            {/* grid of three cards */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                A Generic KPI
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {Math.sin(new Date().getTime() / 1000).toFixed(4)}%
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                A Generic KPI
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {Math.sin(new Date().getTime() / 10).toFixed(4)}%
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                A Generic KPI
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {Math.sin(new Date().getTime() / 100).toFixed(4)}%
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>                
        </Container>
        <br />
        <Container>
            {/* this time a 2 colums and 4 rows grid*/}
            <Card>
                <CardContent 
                    align="center"
                >
                    <Grid 
                        sx={rowCardStyle}
                        container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Typography align="center" variant="h5" gutterBottom>
                                I Hate Bees
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img src={logo} alt="logo" />
                        </Grid>
                    </Grid>
                    <Grid 
                        sx={rowCardStyle}
                        container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <img src={logo} alt="logo" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography align="center" variant="h5" gutterBottom>
                                You Hate Bees
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid 
                        sx={rowCardStyle}
                        container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Typography 
                                align="center"
                                variant="h5" gutterBottom>
                                We All Hate Bees
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img src={logo} alt="logo" />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
        <br />
        {/* this one is a bar that says "STEPS" */}
        <Container>
            <Card>
                <CardContent>
                    <Typography 
                        align="center"
                        variant="h2" gutterBottom>
                        STEPS
                    </Typography>
                    {/* two buttons, one says providers, one says stakers */}
                    {/* centered card */}
                    <Paper align="center">
                        <CardContent>
                            <ButtonGroup 
                            variant="contained" color="primary" aria-label="contained primary button group">
                                <Button>Providers</Button>
                                <Button>Stakers</Button>
                            </ButtonGroup>
                        </CardContent>
                    {/* 4 cards next to eachother
                    each card has a title, an image, and a description */}
                    <Grid
                        container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={sepCardStyle}
                                >
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Step 1
                                    </Typography>
                                    <img src={logo} alt="logo" />
                                    <Typography variant="body2" gutterBottom>
                                        Description
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={sepCardStyle}
                                >
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Step 2
                                    </Typography>
                                    <img src={logo} alt="logo" />
                                    <Typography variant="body2" gutterBottom>
                                        Description
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid><Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={sepCardStyle}
                                >
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Step 3
                                    </Typography>
                                    <img src={logo} alt="logo" />
                                    <Typography variant="body2" gutterBottom>
                                        Description
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={sepCardStyle}
                                >
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Step 4
                                    </Typography>
                                    <img src={logo} alt="logo" />
                                    <Typography variant="body2" gutterBottom>
                                        Description
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    </Paper>
                </CardContent>
            </Card>
        </Container>
        <br />
        {/* 3 cards in paralel, 
            one for telegram
            one for twitter
            one for github */}
        <Container>
            <Card>
                <CardContent>
                    <Grid
                        container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={sepCardStyle}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Telegram
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={sepCardStyle}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Twitter
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={sepCardStyle}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Github
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
        <br />
        {/* footer has bullshit text in it */}
        <Container>
            <Card>
                <CardContent>
                    <Typography
                        align="center"
                        variant="h5" gutterBottom>
                        FOOTER
                    </Typography>
                    <Typography
                        align="center"
                        variant="body2" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    </div>
    );
}