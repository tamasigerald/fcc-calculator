import { useState } from "react";

import { dark, light } from '../styles/theme';

export function useThemeToggler() {
    const [ theme, setTheme ] = useState(dark);

    const themeToggler = () => {
        if (theme === dark) {
            setTheme(light);
        }
        else {
            setTheme(dark);
        }
    }

    return { theme, themeToggler };
}