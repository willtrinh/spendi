import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardContent: {
    paddingTop: 0,

  },
  cardShadow: {
    boxShadow: 'rgba(252, 227, 138, 0.4) 0px 5px, rgba(252, 227, 138, 0.3) 0px 10px, rgba(252, 227, 138, 0.2) 0px 15px, rgba(252, 227, 138, 0.1) 0px 20px, rgba(252, 227, 138, 0.05) 0px 25px',
    transition: 'transform 0.5s',
    "&:hover": {
      transform: 'scale(1.05)'
    }
  },
  divider: {
    margin: '20px 0',
  },

}));