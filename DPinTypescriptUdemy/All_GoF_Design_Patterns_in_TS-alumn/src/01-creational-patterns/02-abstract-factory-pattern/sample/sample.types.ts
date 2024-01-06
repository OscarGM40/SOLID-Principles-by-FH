//los types tampoco compilan a Javascript
export type Dimension = {
    height: number
    width: number
    depth: number
}
// enums vs obj? sé neutral
export const af_chair_types = {
  large:'Large Chair',
  medium: 'Medium Chair',
  small: 'Small Chair',
} as const

export type AF_CHAIR_TYPE = (typeof af_chair_types)[keyof typeof af_chair_types];

export const enum Table_Types {
  large= 'Large Table',
  medium= 'Medium Table',
  small = 'Small Table'
}

// I can use the values of an enum as types with template literals
// ojo que si tengo una enum con strings y numeros juntos creo que tengo que usar otro approach,esto solo vale para valores del mismo tipo de primitivo
//https://stackoverflow.com/questions/55142177/how-to-build-a-type-from-enum-values-in-typescript
export type AF_TABLE_TYPES = `${Table_Types}`;
