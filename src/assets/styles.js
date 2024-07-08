import { colors } from "./colors";

export const styles = {
    text: {
        color: colors.text,
        fontSize: '20px'
    },
    button: {
        backgroundColor: colors.primary,
        color: colors.white,
        width: 'fit-content',
        padding: '.8rem 2rem .8rem 2rem',
        border: `3px solid ${colors.primary}`,
        borderRadius: '10px',
        fontWeight: 800,
        cursor: 'pointer'
    }
}