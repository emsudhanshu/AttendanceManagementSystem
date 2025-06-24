import { Grid, Link } from '@mui/material';
import languageData from '../../strings/en.json';
import { useSelector } from 'react-redux';
import { getUserTypes } from '../Login/utils';

const Header = () => {
    const { loginAPIStatus, formData } = useSelector(state => state?.login)
    return (
        <Grid>
            <Grid sx={{ background: '#133273', color: 'white' }}>
                <h1 style={{ padding: '20px', margin: '0px', textAlign: 'center' }}>{languageData.components.header.title}</h1>
            </Grid>
            {loginAPIStatus == 1 &&
                <Grid>
                    <h4 style={{ padding: '20px', margin: '0px', textAlign: 'center' }}>{`${languageData.pages.login.welcome} ${getUserTypes(true)[formData?.userType]} - ${formData?.id}`} <Link sx={{paddingLeft: '20px', cursor: 'pointer'}} onClick={()=>window.location.reload()}>Logout</Link></h4>
                </Grid>
            }

        </Grid>
    )
}

export default Header;