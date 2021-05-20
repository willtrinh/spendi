import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  radioGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-10px',
  },
  button: {
    marginTop: '20px',
    color: '#3eb489',
    border: '2px solid #3eb489',
    fontWeight: '700',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#3eb489',
      color: '#fff',
      fontWeight: '700',
      border: '2px solid #3eb489',
    }
  },
}));