import {FormControlLabel, Switch, SwitchProps} from "@mui/material";
import styled from "@emotion/styled";
import theme, {ThemeType} from "../../theme";
import {CommonInputProps} from "../../interfaces/inputPropTypes";

function CustomSwitchInput({label, stateName, setData, value}: CommonInputProps) {
    const handleChange = () => {
            setData(stateName, !value ? 1 : 0)
    }
    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch checked={!!value} onClick={handleChange} focusVisibleClassName=".Mui-focusVisible"
                disableRipple {...props} />
    ))(({theme}: { theme: ThemeType }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    return (
        <FormControlLabel
            control={<IOSSwitch theme={theme} sx={{m: 1}}/>}
            label={label}
        />
    );
}

export default CustomSwitchInput;
