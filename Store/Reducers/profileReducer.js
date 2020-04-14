const initialState = {
      idObj: 0,
      sexe:"",
      dateN:"",
      txAct:"",
      txCible:"",
      selectForm:0,
      taille:0,
      poids:0}


function updateProfile(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'UPDATE_OBJ':
    {
          nextState =
          {
            ...state,
            idObj: action.value
          }
      return nextState || state
    }

    case 'UPDATE_SEXE':
    {
          nextState =
          {
            ...state,
            sexe: action.value
          }
      return nextState || state
    }

    case 'UPDATE_DATEN':
    {
          nextState =
          {
            ...state,
            dateN: action.value
          }
      return nextState || state
    }

    case 'UPDATE_TXACT':
    {
          nextState =
          {
            ...state,
            txAct: action.value
          }
      return nextState || state
    }

    case 'UPDATE_TXCIBLE':
    {
          nextState =
          {
            ...state,
            txCible: action.value
          }
      return nextState || state
    }

    case 'UPDATE_FORM':
    {
          nextState =
          {
            ...state,
            selectForm: action.value
          }
      return nextState || state
    }

    case 'UPDATE_TAILLE':
    {
          nextState =
          {
            ...state,
            taille: action.value
          }
      return nextState || state
    }

    case 'UPDATE_POIDS':
    {
          nextState =
          {
            ...state,
            poids: action.value
          }
      return nextState || state
    }
  default:
    return state
  }
}

export default updateProfile
