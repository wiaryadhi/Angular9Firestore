export const PLAN = "PLAN"
export const TODO = "TODO"
export const DONE = "DONE"

export interface IAryalo {
  readonly id: string;
  title: string;
  description: string;
  status: string;
}
