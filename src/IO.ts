/**
 * The Input Output Interface
 */
export interface IO {
 render: () => void,
 getInput: () => any,
 outputSound: () => void,
 quit: () => void
}