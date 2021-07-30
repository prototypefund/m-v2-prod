import React from 'react';
import image3 from "./image3/image3.png";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Popover from "@material-ui/core/Popover";
import Avatar from '@material-ui/core/Avatar';
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
        backgroundColor: 'transparent',
    },
}));

export default function Image3() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const showPopover = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const closePopover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div
            style={{
                borderRadius: "3px",
                height: "110px",
                width: "110px",
                boxShadow: "3px 3px 3px #b4beb7"
            }}
        >
            <img src={image3}
                width="110px" alt=""
                style={{ borderRadius: "3px" }}
                onMouseEnter={showPopover}
                onMouseLeave={closePopover}
            />
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                elevation={0}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={closePopover}
                disableRestoreFocus
            >
                <Typography fontweight='fontWeightLight' variant='h6'>
                    <Chip avatar={<Avatar>#</Avatar>} label="healing">

                    </Chip>
                </Typography>
            </Popover>

            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                elevation={0}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                onClose={closePopover}
                disableRestoreFocus
            >
                <Typography fontweight='fontWeightLight' variant='h6'>
                    <Chip avatar={<Avatar>#</Avatar>} label="nature" />
                </Typography>
            </Popover>

            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                elevation={0}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                onClose={closePopover}
                disableRestoreFocus
            >
                <Typography fontweight='fontWeightLight' variant='h6'>
                    <Chip avatar={<Avatar>#</Avatar>} label="cool_air" />
                </Typography>
            </Popover>
        </div>
    )
}