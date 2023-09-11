import React from 'react'
import {
    AppBar,
    Toolbar,
    Button,
    Menu,
    MenuItem,
    Typography,
    Stack,
    Avatar,
    IconButton
} from '@mui/material'
import {
    CatchingPokemon,
    KeyboardArrowDown,
    Person,
    HomeRounded,
    PeopleAltRounded,
    NotificationAddRounded
} from '@mui/icons-material'
import {useNavigate, NavLink, Link} from 'react-router-dom' 



const Navbar = () => {
    const navigate = useNavigate()

    const navigateToPosts = () =>{
        navigate('/posts')
    }

    const navLinkStyles = ({isActive}) => isActive && 'active'

    return (
        <AppBar>
            <Toolbar 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Button
                    onClick={navigateToPosts}
                    startIcon = {<CatchingPokemon />}
                    color='inherit'
                >
                    OdinBook
                </Button>
                <Stack direction={'row'} spacing={4} component={'nav'}>
                    <NavLink 
                        className={` navigation`}
                        to={'/posts'}
                    >
                        <IconButton size='large' color='inherit'><HomeRounded /></IconButton>
                    </NavLink>
                    <NavLink
                        to={'/people'}
                        className={`navigation`}
                    >
                        <IconButton size='large' color='inherit'><PeopleAltRounded /></IconButton>
                    </NavLink>
                    <NavLink
                        to={'/notifications'}
                        className={` navigation`}
                    >
                        <IconButton size='large' color='inherit'><NotificationAddRounded /></IconButton>
                    </NavLink>
                </Stack>
                <Stack 
                    direction={'row'}
                    justifyContent={'flex-end'}
                    spacing={2}
                >
                    <Avatar>
                        <Link to={'/profile'}>
                            <Person />
                        </Link>
                    </Avatar>
                    <Button 
                        color='inherit'
                        endIcon = {<KeyboardArrowDown />}
                    >Erick Jackson</Button>
                    
                </Stack>
            </Toolbar>
        </AppBar> 
    )
}

export default Navbar