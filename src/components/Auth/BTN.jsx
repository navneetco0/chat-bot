export const BTN = ({loading, title}) => {
  return (
    <input
      disabled={loading}
      type={'submit'}
      value={loading ? 'loading...' : title}
      style={{
        display: 'block',
        margin: 'auto',
        backgroundColor: '#2424ff',
        color: 'white',
        borderRadius: '6px',
        padding: '5px 20px',
      }}
    />
  )
}
