import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Header.module.scss';
import Logo from '../../Image/logo.png';
import Search from '../../Image/search.png';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useState } from 'react';
import Login from './Auth/Login';
Header.propTypes = {};

function Header(props) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={Styles.Wrapper}>
            <div className={Styles.Header}>
                <div className={Styles.Middle}>
                    <div className={Styles.Logo}>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className={Styles.FormSearch}>
                        <div className={Styles.Search}>
                            <input className={Styles.Input} type="text" placeholder="Tìm kiếm sản phẩm"></input>
                            <button className={Styles.Button}>
                                <img src={Search} alt="serach" />
                                Tìm kiếm
                            </button>
                            <div className={Styles.User}>
                                <div className={Styles.Login}>
                                    <Button color="inherit" onClick={handleClickOpen}>
                                        Login
                                    </Button>
                                    <Dialog
                                        open={open}
                                        aria-labelledby="form-dialog-title"
                                        disableBackdropClick
                                        disableEscapeKeyDown
                                    >
                                        <DialogContent>
                                            <Login />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClose}>
                                                Cancel
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
