export function commonFunction() {
  console.log('This is a shared function.');
}

export const sayHi = (name: string) => console.log(`Hi ${name}`);

export const not = (value: boolean) => !value;
export const not2 = (value: boolean) => !value;

export const name = 'shared002'