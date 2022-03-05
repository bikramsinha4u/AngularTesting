export class MathOps {
  static add(...params: number[] | string[]): number | string {
    if (!params.length) {
      return "no input provided.";
    }
    else if (params.length && typeof (params[0]) === 'number') {
      let result: number = 0;
      params.forEach(element => {
        result += +element;
      });

      return result;
    }
    else{
      let result: string = '';
      params.forEach(element => {
        result += element;
      });

      return result;
    }
  }

  static subtract(param1: number | string, param2: number | string): number {
    return +param1 - +param2;
  }

  static multiply(...params: number[] | string[]): number {
    let result: number = 1;
    params.forEach(element => {
      result *= +element;
    });

    return result;
  }

  static divide(param1: number, param2: number): number {
    return param1 / param2;
  }
  
  static throwDivideByZeroException() {
    throw new Error('Divide by Zero');
  }

}
