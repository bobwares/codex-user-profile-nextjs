/**
 * App: Codex User Profile Next.js
 * Package: store
 * File: AppContext.tsx
 * Version: 0.1.0
 * Turns: 1
 * Author: Bobwares (bobwares@outlook.com)
 * Date: 2025-10-04T01:34:07Z
 * Exports: AppProvider, useApp
 * Description: React context providing global application state and actions.
 */

import type { Dispatch, ReactNode } from 'react';
import { createContext, useContext, useReducer } from 'react';

type Theme = 'light' | 'dark';

interface AppState {
  readonly theme: Theme;
}

interface ToggleThemeAction {
  readonly type: 'toggleTheme';
}

type Action = ToggleThemeAction;

interface AppContextValue {
  readonly state: AppState;
  readonly dispatch: Dispatch<Action>;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

function reducer(state: AppState, action: Action): AppState {
  if (action.type === 'toggleTheme') {
    return {
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light'
    };
  }

  return state;
}

const initialState: AppState = { theme: 'light' };

export function AppProvider({ children }: { readonly children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }

  return context;
}
