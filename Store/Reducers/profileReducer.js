const initialState = {
        pseudo:"",
        idObj: 0,
        sexe:"",
        dateN:"",
        idTxAct:0,
        idTxCible:0,
        idForm:0,
        taille:0,
        poids:0,
    }


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
            idTxAct: action.value
          }
      return nextState || state
    }

    case 'UPDATE_TXCIBLE':
    {
          nextState =
          {
            ...state,
            idTxCible: action.value
          }
      return nextState || state
    }

    case 'UPDATE_FORM':
    {
          nextState =
          {
            ...state,
            idForm: action.value
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
