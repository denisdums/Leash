import {colors} from "./colors";

const gap = 16;
const fieldStyles = {
    input: {
        backgroundColor: colors.white,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.grey,
        padding: 16,
    },
    textarea: {
        backgroundColor: colors.white,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.grey,
        padding: 16,
        paddingTop: 16,
        height: 100,
    },
    label: {
        color: colors.black,
        fontWeight: '600',
        marginBottom: 8,
    },
    field: {
        paddingVertical: gap / 2,
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 64 + -(gap / 2)
    },
    datePicker: {
        wrapper: {
            width: '100%',
            padding: 0,
            margin: 0
        },
        field: {
            dateTouchBody: {
                height: "auto",
            },
            dateIcon: {
                display: 'none',
            },
            dateInput: {
                backgroundColor: colors.white,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: colors.grey,
                padding: 16,
                height: 'auto',
                alignItems: 'start',
                justifyContent: 'start'
            },
            dateTouch: {
                width: '100%',
            },
            btnTextConfirm: {
                color: colors.purple,
            }
        }
    },
    gallery: {
        wrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        image: {
            width: '32%',
            height: 150,
            borderRadius: 8,
            backgroundColor: colors.grey,
            marginRight: "1%",
        },
        add: {
            width: '32%',
            height: 150,
            borderRadius: 8,
            backgroundColor: colors.purpleTone,
            marginBottom: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: "1%",
        },
        addIcon: {
            width: 24,
            height: 24,
        }
    },
    errorLabel: {
        color: colors.orange,
        backgroundColor: colors.orangeTone,
        padding: 8,
        marginTop: 8,
    }
}

export {fieldStyles};