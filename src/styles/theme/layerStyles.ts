export const layerStyles = {
  'input-primary': {
    backgroundColor: 'base.input',
    borderWidth: '1px',
    ':hover': {
      borderColor: 'blue.500',
    },
    ':focus': {
      borderColor: 'blue.500',
      boxShadow: 'none',
    },
    '::placeholder': {
      color: 'base.label',
    },
    textStyle: 'text-m',
  },
  'base-large-card': {
    padding: '2rem',
    gap: '2rem',
    bg: 'base.profile',
    w: '100%',
    borderRadius: '10px',
    boxShadow: '0px 2px 28px rgba(0,0,0,0.2)',
  },
}
