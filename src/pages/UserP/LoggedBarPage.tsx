import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useMemo, useState } from 'react';
import { USERS_TYPS, firebaseAuth, firebaseDatabase } from '../../services/Firebase/FirebaseService';
import './User.css';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { UserModel } from '../../services/UserModel/UserModel';
import { collection, doc, getDoc } from 'firebase/firestore';

function LoggedBarPage() {
    const defaultusername = "'Persona Misteriosa'";
    const settingsTooltip = "Espacio personal";
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [avatarDialog, setAvatarDialog] = useState(false);
    const [closeSessionDialog, setCloseSessionDialog] = useState(false);
    const [dataUserExist, setDataUserExist] = useState<UserModel>();
    //const [userLogged, setUserLogged] = useState<User | null>(null);

    // 🔹 Determina si el usuario está logeado
    //const isGuest = !userLogged;

    function loadUserData(uid: string) {
        const usersCollection = collection(firebaseDatabase, 'users');
        getDoc(doc(usersCollection, uid))
            .then((document) => {
                if (document.exists()) {
                    setDataUserExist(
                        new UserModel(
                            document.get('name'),
                            document.get('email'),
                            document.get('role'),
                            document.get('gender'),
                            document.get('urlAvatarProfile'),
                            document.get('uuid')
                        )
                    );
                }
            })
            .catch((error) => {
                console.error(error);
                alert(error);
            });
    }

    // 🔹 Control del estado de autenticación
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                //setUserLogged(user);
                loadUserData(user.uid);
            } else {
                //setUserLogged(null);
                setDataUserExist(undefined);
            }
        });
        return () => unsubscribe();
    }, []);

    const userLoggedTrim = (username: string) => {
        let result = username;
        const userloggedLength = defaultusername.length;
        let diff = userloggedLength - result.length;
        if (diff > 0) result = result + ' '.repeat(diff);
        else if (diff < 0) result = result.substring(0, userloggedLength + diff) + '...';
        return result;
    };

    const userlogged = dataUserExist?.name ? userLoggedTrim(dataUserExist.name) : 'Invitado';
    const urlProfile = dataUserExist?.urlAvatarProfile || '';
    const userArt = dataUserExist?.role || '';

    const pages = useMemo(
        () => [
            { typeuser: USERS_TYPS.ALL, name: 'Inicio', site: '/Home/', tooltip: 'Bienvenida' },
            { typeuser: USERS_TYPS.ALL, name: 'Competiciones', site: '/Main/Competiciones/', tooltip: 'Página de competiciones' },
        ],
        []
    );

    const settings = useMemo<Pages[]>(() => [
        { typeuser: USERS_TYPS.ALL, name: `${userlogged}`, site: '/User/', tooltip: `Datos del ${userArt}, ${userlogged}` },
        { typeuser: USERS_TYPS.ALL, name: 'Mis Competiciones', site: '/User/Competiciones/', tooltip: "Página de competiciones (jugador)" },
        { typeuser: USERS_TYPS.EQU, name: 'Mis Jugadores', site: '/User/setplayers/', tooltip: "Página de jugadores" },
        { typeuser: USERS_TYPS.JUG, name: 'Mis Equipos', site: '/User/setteams/', tooltip: "Página de equipos" },
        { typeuser: USERS_TYPS.ADM, name: 'Jugadores y equipos', site: '/User/setadmdata/', tooltip: "Página de administración de usuarios" },
        { typeuser: USERS_TYPS.ADM, name: 'Nuevo usuario', site: '/Register', tooltip: "Página de creación de nuevo usuario" },
        { typeuser: USERS_TYPS.ALL, name: 'Cerrar sesión', site: '/User/setlogout/', tooltip: "Cerras sesión" }
    ], [userlogged]);

    function logoutsession() {
        signOut(firebaseAuth)
            .then(() => (window.location.href = '/Home/'))
            .catch((error) => console.error(error));
    }

    const handleChangePage = (site: string) => {
        if (site === '/User/setlogout/') showCloseSessionDialog();
        else handlePage(site);
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleCloseUserMenu = () => setAnchorElUser(null);
    const handlePage = (site: string) => (window.location.href = site);
    function selectedPage(param: string): boolean {
        const fullPath = window.location.pathname;
        return fullPath === param;
    }
    const showAvatar = () => setAvatarDialog(true);
    const hideAvatar = () => setAvatarDialog(false);
    const showCloseSessionDialog = () => setCloseSessionDialog(true);
    const hideCloseSessionDialog = () => setCloseSessionDialog(false);

    function generateMenuItem(setting: Pages): JSX.Element {

        if (USERS_TYPS.ALL === setting.typeuser || userArt === setting.typeuser.value) {

            return (
                <Tooltip key={setting.tooltip} title={setting.tooltip} >
                    <MenuItem key={setting.name} onClick={(event) => { event.target; handleChangePage(setting.site); }} sx={{
                        ":hover": { color: "#224335" }, p: 2
                    }} selected={selectedPage(setting.site)}>
                        <Typography textAlign="center">{setting.name}</Typography>
                    </MenuItem>
                </Tooltip>
            );
        } else {
            return (<i></i>);
        }
    }

    function generatePageItem(page: Pages): JSX.Element {

        if (USERS_TYPS.ALL === page.typeuser || userArt === page.typeuser.value) {
            return (
                <Tooltip title={page.tooltip} key={page.tooltip}>
                    <MenuItem key={page.name} onClick={(e) => { e.target; handlePage(page.site) }} selected={selectedPage(page.site)}
                        sx={{ border: 'solid transparent 0.2rem', ":hover": { border: 'solid 0.2rem ', borderRadius: 20 } }}
                    >
                        <Typography textAlign="inherit"
                            sx={{ my: 0, color: 'white', fontSize: 22 }}
                        >{page.name}</Typography>
                    </MenuItem>
                </Tooltip>
            );
        } else {
            return (<i></i>);
        }
    }

    function generatePageSmallItem(page: Pages): JSX.Element {

        if (USERS_TYPS.ALL === page.typeuser || userArt === page.typeuser.value) {
            return (
                <MenuItem key={page.name} onClick={(e) => { e.target; handlePage(page.site) }} selected={selectedPage(page.site)}>
                    <Typography textAlign="inherit" sx={{
                        ":hover": { color: '#224335' }
                    }} >{page.name}</Typography>
                </MenuItem>
            );
        } else {
            return (<i></i>);
        }
    }

    return (
        <AppBar position="static" sx={{ bgcolor: "#224335", borderRadius: "40px" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => generatePageSmallItem(page))}
                        </Menu>
                    </Box>

                    <Box id="mainnavbar" sx={{ flexGrow: 1, display: { xs: 'none', md: 'inline-flex' } }} >
                        {pages.map((page) => generatePageItem(page))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title={settingsTooltip} >
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={userlogged} src={urlProfile} />
                            </IconButton>
                        </Tooltip>

                        <Dialog
                            open={avatarDialog}
                            onClose={hideAvatar}
                        >
                            <DialogTitle id="avatar-dialog-title">
                                {userlogged}
                            </DialogTitle>
                            <DialogContent id="avatar-dialog-content">
                                <Avatar alt={userlogged} src={urlProfile} variant="rounded" sx={{ width: 550, height: 550 }} />
                            </DialogContent>
                        </Dialog>

                        <Dialog
                            open={closeSessionDialog}
                            onClose={hideCloseSessionDialog}
                        >
                            <DialogTitle id="avatar-dialog-title">
                                Cerrando sesión...
                            </DialogTitle>
                            <DialogContent id="avatar-dialog-content">
                                Se va a cerrar la sesión.
                            </DialogContent>
                            <DialogActions>
                                <Button sx={{ color: "red" }} onClick={hideCloseSessionDialog} autoFocus>Mejor no, cancelar</Button>
                                <Button sx={{ color: "#224335" }} onClick={logoutsession}>Si, cerrar sesión</Button>
                            </DialogActions>
                        </Dialog>

                        <Menu
                            sx={{ mt: '45px', marginTop: -2 }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem key={userlogged} onClick={showAvatar}>
                                <Avatar alt={userlogged} src={urlProfile} variant="circular" sx={{ width: 111, height: 111 }} />
                            </MenuItem>
                            {settings.map((setting) => generateMenuItem(setting))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export interface Pages {
    typeuser: { value: string };
    name: string;
    site: string;
    tooltip: string;
}

export default LoggedBarPage;
