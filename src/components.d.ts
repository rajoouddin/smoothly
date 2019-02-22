/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  EventEmitter,
} from '@stencil/core';


export namespace Components {

  interface SmoothlyInput {
    'inputMode': string;
    'mandatory': boolean;
    'maxLength'?: number;
    'name': string;
    'placeholder'?: string;
    'tabIndex': number;
    'type': "text" | "email";
    'valid': boolean;
    'value': string;
  }
  interface SmoothlyInputAttributes extends StencilHTMLAttributes {
    'inputMode'?: string;
    'mandatory'?: boolean;
    'maxLength'?: number;
    'name'?: string;
    'onChanged'?: (event: CustomEvent<SmoothlyInput>) => void;
    'placeholder'?: string;
    'tabIndex'?: number;
    'type'?: "text" | "email";
    'valid'?: boolean;
    'value'?: string;
  }

  interface SmoothlyRadio {
    'checked': boolean;
    'name': string;
    'tabIndex': number;
    'value': string;
  }
  interface SmoothlyRadioAttributes extends StencilHTMLAttributes {
    'checked'?: boolean;
    'name'?: string;
    'tabIndex'?: number;
    'value'?: string;
  }

  interface SmoothlySpinner {
    'active': boolean;
  }
  interface SmoothlySpinnerAttributes extends StencilHTMLAttributes {
    'active'?: boolean;
  }

  interface SmoothlySubmit {
    'processing': boolean;
  }
  interface SmoothlySubmitAttributes extends StencilHTMLAttributes {
    'onSubmit'?: (event: CustomEvent<{ [key: string]: string }>) => void;
    'processing'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'SmoothlyInput': Components.SmoothlyInput;
    'SmoothlyRadio': Components.SmoothlyRadio;
    'SmoothlySpinner': Components.SmoothlySpinner;
    'SmoothlySubmit': Components.SmoothlySubmit;
  }

  interface StencilIntrinsicElements {
    'smoothly-input': Components.SmoothlyInputAttributes;
    'smoothly-radio': Components.SmoothlyRadioAttributes;
    'smoothly-spinner': Components.SmoothlySpinnerAttributes;
    'smoothly-submit': Components.SmoothlySubmitAttributes;
  }


  interface HTMLSmoothlyInputElement extends Components.SmoothlyInput, HTMLStencilElement {}
  var HTMLSmoothlyInputElement: {
    prototype: HTMLSmoothlyInputElement;
    new (): HTMLSmoothlyInputElement;
  };

  interface HTMLSmoothlyRadioElement extends Components.SmoothlyRadio, HTMLStencilElement {}
  var HTMLSmoothlyRadioElement: {
    prototype: HTMLSmoothlyRadioElement;
    new (): HTMLSmoothlyRadioElement;
  };

  interface HTMLSmoothlySpinnerElement extends Components.SmoothlySpinner, HTMLStencilElement {}
  var HTMLSmoothlySpinnerElement: {
    prototype: HTMLSmoothlySpinnerElement;
    new (): HTMLSmoothlySpinnerElement;
  };

  interface HTMLSmoothlySubmitElement extends Components.SmoothlySubmit, HTMLStencilElement {}
  var HTMLSmoothlySubmitElement: {
    prototype: HTMLSmoothlySubmitElement;
    new (): HTMLSmoothlySubmitElement;
  };

  interface HTMLElementTagNameMap {
    'smoothly-input': HTMLSmoothlyInputElement
    'smoothly-radio': HTMLSmoothlyRadioElement
    'smoothly-spinner': HTMLSmoothlySpinnerElement
    'smoothly-submit': HTMLSmoothlySubmitElement
  }

  interface ElementTagNameMap {
    'smoothly-input': HTMLSmoothlyInputElement;
    'smoothly-radio': HTMLSmoothlyRadioElement;
    'smoothly-spinner': HTMLSmoothlySpinnerElement;
    'smoothly-submit': HTMLSmoothlySubmitElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
