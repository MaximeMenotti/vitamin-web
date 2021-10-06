/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { VitamixId } from "@vtmn/icons/dist/vitamix/font/vitamix";
export namespace Components {
    interface VtmnBadge {
        /**
          * The target of the badge
          * @default undefined
         */
        "value"?: number;
        /**
          * The variant of the badge.
          * @default 'default'
         */
        "variant"?: 'default' | 'brand' | 'reversed' | 'accent';
    }
    interface VtmnButton {
        /**
          * Icon to display when it is a button with icon only
          * @type {VitamixId}
          * @default undefined and therefore not displayed by default
         */
        "iconAlone": VitamixId;
        /**
          * Icon to display on the left hand side of button
          * @type {VitamixId}
          * @default undefined and therefore not displayed by default
         */
        "iconLeft": VitamixId;
        /**
          * Icon to display on the right hand side of button
          * @type {VitamixId}
          * @default undefined and therefore not displayed by default
         */
        "iconRight": VitamixId;
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size": 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant": | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'ghost-reversed'
    | 'conversion';
    }
    interface VtmnCheckbox {
        /**
          * The checked state of the checkbox.
          * @default false
         */
        "checked": boolean;
        /**
          * The disabled state of the checkbox.
          * @default false
         */
        "disabled": boolean;
        /**
          * The id of the checkbox and its label.
         */
        "identifier": string;
        /**
          * The text of the checkbox.
         */
        "labelText": string;
        /**
          * The name of the checkbox.
         */
        "name": string;
        /**
          * The value of the checkbox.
         */
        "value": string;
    }
    interface VtmnLink {
        /**
          * The hypertext link
          * @default '#'
         */
        "href": string;
        /**
          * Is the link has an icon or not
          * @default null
         */
        "iconAlong": boolean;
        /**
          * The size of the link.
          * @default null
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * Is the link standalone or not
          * @default null
         */
        "standalone": boolean;
        /**
          * The target of the link
          * @default null
         */
        "target": string;
    }
    interface VtmnRadioButton {
        /**
          * The checked state of the radio.
          * @default false
         */
        "checked": boolean;
        /**
          * The disabled state of the radio.
          * @default false
         */
        "disabled": boolean;
        /**
          * The id of the radio and its label.
         */
        "identifier": string;
        /**
          * The text of the radio.
         */
        "labelText": string;
        /**
          * The name of the radio.
         */
        "name": string;
        /**
          * The value of the radio.
         */
        "value": string;
    }
    interface VtmnSelect {
        /**
          * The state of the select when disabled
          * @type {boolean}
          * @default false
         */
        "disabled": boolean;
        /**
          * The state of the select when in error
          * @type {boolean}
          * @default false
         */
        "error": boolean;
        /**
          * The placeholder of the select.
          * @type {string}
          * @default 'Error text goes here'
         */
        "errorText": string;
        /**
          * The id of the select.
          * @type {string}
          * @default 'vtmn-select'
         */
        "identifier": string;
        /**
          * The label text of the select.
          * @type {string}
          * @default 'My label'
         */
        "labelText": string;
        /**
          * The helper text of the select in error.
          * @type {string}
          * @default 'Select an option'
         */
        "placeholder": string;
    }
    interface VtmnTextInput {
        /**
          * The disabled state of the text-input.
         */
        "disabled": boolean;
        /**
          * The error variant state of the text-input.
         */
        "error": boolean;
        /**
          * The helper text of the text input.
         */
        "helperText": string;
        /**
          * The icon to be displayed
         */
        "icon": string;
        /**
          * The id of the text input.
         */
        "identifier": string;
        /**
          * The label text of the text input.
         */
        "labelText": string;
        /**
          * Is the text-input multiline or not.
         */
        "multiline": boolean;
        /**
          * The placeholder of the text input.
         */
        "placeholder": string;
        /**
          * The valid variant state of the text-input.
         */
        "valid": boolean;
    }
    interface VtmnToggle {
        /**
          * The checked state of the toggle.
          * @default false
         */
        "checked": boolean;
        /**
          * The disabled state of the toggle.
          * @default false
         */
        "disabled": boolean;
        /**
          * The id of the toggle and its label.
         */
        "identifier": string;
        /**
          * The text of the toggle.
         */
        "labelText": string;
        /**
          * The size of the toggle.
         */
        "size": 'small' | 'medium';
    }
}
declare global {
    interface HTMLVtmnBadgeElement extends Components.VtmnBadge, HTMLStencilElement {
    }
    var HTMLVtmnBadgeElement: {
        prototype: HTMLVtmnBadgeElement;
        new (): HTMLVtmnBadgeElement;
    };
    interface HTMLVtmnButtonElement extends Components.VtmnButton, HTMLStencilElement {
    }
    var HTMLVtmnButtonElement: {
        prototype: HTMLVtmnButtonElement;
        new (): HTMLVtmnButtonElement;
    };
    interface HTMLVtmnCheckboxElement extends Components.VtmnCheckbox, HTMLStencilElement {
    }
    var HTMLVtmnCheckboxElement: {
        prototype: HTMLVtmnCheckboxElement;
        new (): HTMLVtmnCheckboxElement;
    };
    interface HTMLVtmnLinkElement extends Components.VtmnLink, HTMLStencilElement {
    }
    var HTMLVtmnLinkElement: {
        prototype: HTMLVtmnLinkElement;
        new (): HTMLVtmnLinkElement;
    };
    interface HTMLVtmnRadioButtonElement extends Components.VtmnRadioButton, HTMLStencilElement {
    }
    var HTMLVtmnRadioButtonElement: {
        prototype: HTMLVtmnRadioButtonElement;
        new (): HTMLVtmnRadioButtonElement;
    };
    interface HTMLVtmnSelectElement extends Components.VtmnSelect, HTMLStencilElement {
    }
    var HTMLVtmnSelectElement: {
        prototype: HTMLVtmnSelectElement;
        new (): HTMLVtmnSelectElement;
    };
    interface HTMLVtmnTextInputElement extends Components.VtmnTextInput, HTMLStencilElement {
    }
    var HTMLVtmnTextInputElement: {
        prototype: HTMLVtmnTextInputElement;
        new (): HTMLVtmnTextInputElement;
    };
    interface HTMLVtmnToggleElement extends Components.VtmnToggle, HTMLStencilElement {
    }
    var HTMLVtmnToggleElement: {
        prototype: HTMLVtmnToggleElement;
        new (): HTMLVtmnToggleElement;
    };
    interface HTMLElementTagNameMap {
        "vtmn-badge": HTMLVtmnBadgeElement;
        "vtmn-button": HTMLVtmnButtonElement;
        "vtmn-checkbox": HTMLVtmnCheckboxElement;
        "vtmn-link": HTMLVtmnLinkElement;
        "vtmn-radio-button": HTMLVtmnRadioButtonElement;
        "vtmn-select": HTMLVtmnSelectElement;
        "vtmn-text-input": HTMLVtmnTextInputElement;
        "vtmn-toggle": HTMLVtmnToggleElement;
    }
}
declare namespace LocalJSX {
    interface VtmnBadge {
        /**
          * The target of the badge
          * @default undefined
         */
        "value"?: number;
        /**
          * The variant of the badge.
          * @default 'default'
         */
        "variant"?: 'default' | 'brand' | 'reversed' | 'accent';
    }
    interface VtmnButton {
        /**
          * Icon to display when it is a button with icon only
          * @type {VitamixId}
          * @default undefined and therefore not displayed by default
         */
        "iconAlone"?: VitamixId;
        /**
          * Icon to display on the left hand side of button
          * @type {VitamixId}
          * @default undefined and therefore not displayed by default
         */
        "iconLeft"?: VitamixId;
        /**
          * Icon to display on the right hand side of button
          * @type {VitamixId}
          * @default undefined and therefore not displayed by default
         */
        "iconRight"?: VitamixId;
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size"?: 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant"?: | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'ghost-reversed'
    | 'conversion';
    }
    interface VtmnCheckbox {
        /**
          * The checked state of the checkbox.
          * @default false
         */
        "checked"?: boolean;
        /**
          * The disabled state of the checkbox.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * The id of the checkbox and its label.
         */
        "identifier": string;
        /**
          * The text of the checkbox.
         */
        "labelText"?: string;
        /**
          * The name of the checkbox.
         */
        "name"?: string;
        /**
          * The value of the checkbox.
         */
        "value"?: string;
    }
    interface VtmnLink {
        /**
          * The hypertext link
          * @default '#'
         */
        "href"?: string;
        /**
          * Is the link has an icon or not
          * @default null
         */
        "iconAlong"?: boolean;
        /**
          * The size of the link.
          * @default null
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * Is the link standalone or not
          * @default null
         */
        "standalone"?: boolean;
        /**
          * The target of the link
          * @default null
         */
        "target"?: string;
    }
    interface VtmnRadioButton {
        /**
          * The checked state of the radio.
          * @default false
         */
        "checked"?: boolean;
        /**
          * The disabled state of the radio.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * The id of the radio and its label.
         */
        "identifier": string;
        /**
          * The text of the radio.
         */
        "labelText"?: string;
        /**
          * The name of the radio.
         */
        "name"?: string;
        /**
          * The value of the radio.
         */
        "value"?: string;
    }
    interface VtmnSelect {
        /**
          * The state of the select when disabled
          * @type {boolean}
          * @default false
         */
        "disabled"?: boolean;
        /**
          * The state of the select when in error
          * @type {boolean}
          * @default false
         */
        "error"?: boolean;
        /**
          * The placeholder of the select.
          * @type {string}
          * @default 'Error text goes here'
         */
        "errorText"?: string;
        /**
          * The id of the select.
          * @type {string}
          * @default 'vtmn-select'
         */
        "identifier": string;
        /**
          * The label text of the select.
          * @type {string}
          * @default 'My label'
         */
        "labelText"?: string;
        /**
          * The helper text of the select in error.
          * @type {string}
          * @default 'Select an option'
         */
        "placeholder"?: string;
    }
    interface VtmnTextInput {
        /**
          * The disabled state of the text-input.
         */
        "disabled"?: boolean;
        /**
          * The error variant state of the text-input.
         */
        "error"?: boolean;
        /**
          * The helper text of the text input.
         */
        "helperText": string;
        /**
          * The icon to be displayed
         */
        "icon"?: string;
        /**
          * The id of the text input.
         */
        "identifier": string;
        /**
          * The label text of the text input.
         */
        "labelText": string;
        /**
          * Is the text-input multiline or not.
         */
        "multiline"?: boolean;
        /**
          * The placeholder of the text input.
         */
        "placeholder": string;
        /**
          * The valid variant state of the text-input.
         */
        "valid"?: boolean;
    }
    interface VtmnToggle {
        /**
          * The checked state of the toggle.
          * @default false
         */
        "checked"?: boolean;
        /**
          * The disabled state of the toggle.
          * @default false
         */
        "disabled"?: boolean;
        /**
          * The id of the toggle and its label.
         */
        "identifier": string;
        /**
          * The text of the toggle.
         */
        "labelText"?: string;
        /**
          * The size of the toggle.
         */
        "size"?: 'small' | 'medium';
    }
    interface IntrinsicElements {
        "vtmn-badge": VtmnBadge;
        "vtmn-button": VtmnButton;
        "vtmn-checkbox": VtmnCheckbox;
        "vtmn-link": VtmnLink;
        "vtmn-radio-button": VtmnRadioButton;
        "vtmn-select": VtmnSelect;
        "vtmn-text-input": VtmnTextInput;
        "vtmn-toggle": VtmnToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "vtmn-badge": LocalJSX.VtmnBadge & JSXBase.HTMLAttributes<HTMLVtmnBadgeElement>;
            "vtmn-button": LocalJSX.VtmnButton & JSXBase.HTMLAttributes<HTMLVtmnButtonElement>;
            "vtmn-checkbox": LocalJSX.VtmnCheckbox & JSXBase.HTMLAttributes<HTMLVtmnCheckboxElement>;
            "vtmn-link": LocalJSX.VtmnLink & JSXBase.HTMLAttributes<HTMLVtmnLinkElement>;
            "vtmn-radio-button": LocalJSX.VtmnRadioButton & JSXBase.HTMLAttributes<HTMLVtmnRadioButtonElement>;
            "vtmn-select": LocalJSX.VtmnSelect & JSXBase.HTMLAttributes<HTMLVtmnSelectElement>;
            "vtmn-text-input": LocalJSX.VtmnTextInput & JSXBase.HTMLAttributes<HTMLVtmnTextInputElement>;
            "vtmn-toggle": LocalJSX.VtmnToggle & JSXBase.HTMLAttributes<HTMLVtmnToggleElement>;
        }
    }
}
