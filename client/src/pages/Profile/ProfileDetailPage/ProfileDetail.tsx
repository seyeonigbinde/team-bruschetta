import * as React from 'react';
import 'date-fns';
import Paper from '@material-ui/core/Paper';
import { Button, Grid, Box, Typography, Container, Avatar, InputLabel } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Rating from '@material-ui/lab/Rating';
import avatar from '../../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';
import { ProfileDetail } from '../../../interface/Profile';

import useStyles from './useStyles';

const initialValues = {
  firstName: 'Andela',
  lastname: 'Morales',
  status: 'Lovely pet sitter',
  location: 'Toronto Ontario',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit Minima esse maxime voluptatibus veniam offici laboriosam asperiores repellendus quasi Corporis molestias dignissimos Ipsa aut et Debitis aut recusandae exercitationem quia voluptas Provident porro expedita aperiam aspernatur non enim eius ipsum',
  price: 14,
  dogs: [
    {
      img: 'https://images.unsplash.com/photo-1596797882870-8c33deeac224',
      title: 'Puppy Welsh Corgi',
    },
    {
      img: 'https://images.unsplash.com/photo-1563497425252-36b755215241',
      title: 'Dog 2',
    },
    {
      img: 'https://images.unsplash.com/photo-1549308423-a9b1b61cd4b1',
      title: 'Dog 3',
    },
  ],
};

export default function ProfileDetail(): JSX.Element {
  const [profileDetails, setProfileDetails] = React.useState<ProfileDetail[]>([]);
  const [value, setValue] = React.useState(3);
  const [dropIn, handleDropIn] = React.useState<any>(new Date());
  const [dropOff, handleDropOff] = React.useState<any>(new Date());
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg" className={classes.root}>
      <Grid item xs={12} sm={8} elevation={6} component={Paper} spacing={3} square className={classes.profile}>
        <Box className={classes.profileBgImage}>
          <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar} />
        </Box>
        <Box className={classes.details}>
          <Typography className={classes.name}>
            {initialValues.firstName} {initialValues.lastname}
          </Typography>
          <Typography className={classes.status}>{initialValues.status}</Typography>
          <Typography className={classes.location}>
            <LocationOnIcon className={classes.locationLogo} />
            {initialValues.location}
          </Typography>
        </Box>
        <Box className={classes.description}>
          <Typography className={classes.aboutTitle}>About Me</Typography>
          <Typography className={classes.about}>{initialValues.description}</Typography>
        </Box>
        <Box className={classes.petName}>
          {initialValues.dogs.map((item) => (
            <img key={item.img} alt={item.title} src={item.img} className={classes.petItems} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} sm={3} elevation={6} component={Paper} spacing={3} className={classes.request}>
        <Typography className={classes.price}>${initialValues.price}/hr</Typography>
        <Box component="fieldset" mb={1} className={classes.rating}>
          <Rating name="read-only" value={value} readOnly />
        </Box>
        <InputLabel className={classes.label}>Drop In</InputLabel>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            name="availability"
            inputVariant="outlined"
            value={dropIn}
            onChange={handleDropIn}
            className={classes.datePicker}
          />
        </MuiPickersUtilsProvider>
        <InputLabel className={classes.label}>Drop Off</InputLabel>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            inputVariant="outlined"
            name="availability"
            value={dropOff}
            onChange={handleDropOff}
            className={classes.datePicker}
          />
        </MuiPickersUtilsProvider>
        <Button type="submit" size="large" variant="contained" color="secondary" className={classes.button}>
          Send Request
        </Button>
      </Grid>
    </Container>
  );
}
