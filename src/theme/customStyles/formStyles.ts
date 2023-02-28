export const formContainerBoxStyle = {
    width: '400px', height: '431px', display: 'flex', flexDirection: 'column',
    gap:'10px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0 120px",
    color: 'black',
    background: 'rgba(255,255,255,0.8)'
}

export const inputFieldLabelDesign = {
    fontWeight: 500,
    fontSize: '20px',
    marginTop: '10px',
    color: '#06283D'
}

export const inputFieldDesign = {
    '& .MuiOutlinedInput-root': {
        marginTop: '4px',
        padding: '5px',
        borderRadius: '2px',
        borderColor: '#06283D',
        height: '40px',
        '& fieldset': {
        },
        '&:hover fieldset': {
            borderColor: 'gray',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'gray',
        },
    },
}
