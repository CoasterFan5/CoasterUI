import { writable } from "svelte/store";

export type ButtonStyle = {
    outline: {
        text: string,
        textHover: string,
    },
    regular: {
        text: string,
        textHover: string,
    }
}

export type StyleGuide = {
    text: string,
    background: string,
    primary: string,
    secondary: string,
    accent: string,
    borders?: string,
    button?: ButtonStyle
}

export const styleSheet = writable<StyleGuide>();

export const createStyleGuide = (styleGuide: StyleGuide) => {
    styleSheet.set(styleGuide)
    if(styleGuide.button) {
        buttonStyle.set(styleGuide.button)
    } else {
        buttonStyle.set({
            outline: {
                text: styleGuide.text,
                textHover: styleGuide.background
            },
            regular: {
                text: styleGuide.background,
                textHover: styleGuide.background
            }
        });
    }
}

export const buttonStyle = writable<ButtonStyle>();
