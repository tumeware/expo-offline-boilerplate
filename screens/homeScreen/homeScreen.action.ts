
export const REDUX_TEST = 'REDUX_TEST'

export function ReduxTestAction(reduxTest) {
  return {
    type: REDUX_TEST,
    reduxTest
  }
}
