class ValidatorContract {

  private errors: Array<ContractError> = [];

  isRequired(value: any, message?: string): boolean {
    const isValid = !value || value.length === 0;

    isValid && message ? this.errors.push({ message }) : null;

    return isValid;
  }

  hasMinLen(value: string | [], min: number, message?: string): boolean {
    const isValid = !value || value.length < min

    isValid ? this.errors.push({ message }) : null;

    return isValid;
  }

  hasMaxLen(value: string | [], max: number, message?: string): boolean {
    const isValid = !value || value.length > max;

    isValid ? this.errors.push({ message }) : null;

    return isValid;
  }

  isFixedLen(value: string | [], len: number, message?: string): boolean {
    const isValid = !value || value.length != len;

    isValid ? this.errors.push({ message }) : null;

    return isValid;
  }

  hasMinValue(value: any, min: number, message?: string): boolean {
    const isValid = value < min;

    isValid && message ? this.errors.push({ message }) : null;

    return isValid;
  }

  isEmail(value: string, message?: string): boolean {
    const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);

    !reg.test(value) && message ? this.errors.push({ message }) : null;

    return !reg.test(value);
  }

  ObjectIsNull(obj: Object, message?: string): boolean {
    const isValid = obj === 'undefined' || obj === null

    isValid && message ? this.errors.push({ message }) : null;

    return isValid
  }

  getErrors = (): Array<ContractError> => this.errors;

  setErrors = (error: ContractError) => this.errors.concat(error);

  clear = () => this.errors = [];

  isValid = () => this.errors.length === 0;
}

export default ValidatorContract;

interface ContractError {
  message: string
}