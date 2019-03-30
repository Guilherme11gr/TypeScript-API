abstract class ValidatorContract {

  private errors: Array<ContractError> = [];

  isRequired = (value: any, message: string) => !value || value.length === 0 ? this.errors.push({ message }) : null;

  hasMinLen = (value: string | [], min: number, message: string) => !value || value.length < min ? this.errors.push({ message }) : null;

  hasMaxLen = (value: string | [], max: number, message: string) => !value || value.length > max ? this.errors.push({ message }) : null;

  isFixedLen = (value: string | [], len: number, message: string) => !value || value.length != len ? this.errors.push({ message }) : null;

  hasMinValue = (value: any, min: number, message: string) => value < min ? this.errors.push({ message }) : null

  isEmail = (value: string, message: string) => {
    const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    !reg.test(value) ? this.errors.push({ message }) : null
  }

  isEqualToOption = (options: Array<any>, valueToMatch: Array<any>, message: string) => {
    const isEqual = options.some(value => value === valueToMatch);
    !isEqual ? this.errors.push({ message }) : null;
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