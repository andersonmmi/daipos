import STYLE from 'constants/style'

export default {
  base: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },

  title: {
    display: 'flex',
    flex: 0.25,
    width: '80%',
  },

  title__text: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    fontWeight: 'bold',

    fontSize: 32,
    color: STYLE.COLOR.BLUE,
  },

  inputForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    flex: 0.25,
  },

  inputForm_firstRow: {
    width: '100%',
    flex: 0.5,
  },

  inputForm_secondRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.5,
  },

  inputForm_secondRow_firstColumn: {
    flex: 0.4,
  },

  inputForm_secondRow_secondColumn: {
    flex: 0.4,
    width: '20%',
  },

  photo: {
    width: '80%',
    flex: 0.25,
  },

  footer: {
    width: '80%',
    flex: 0.25,
  },
}
