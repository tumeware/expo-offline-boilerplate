
export const DARKMODE = 'DARKMODE'

export function DarkModeAction(darkMode) {
  return {
    type: DARKMODE,
    darkMode
  }
}
