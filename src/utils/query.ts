import ValidatorContract from "./validator";

class Query {
  static validator: ValidatorContract = new ValidatorContract();

  static parseBoolean(value: string) {
    let boolValue: boolean;

    switch (typeof value) {
      case 'boolean':
        boolValue = value;

      case 'string':
        boolValue = value.length === 0 ? true : 'true' === value;

      default:
        boolValue = null;
    }

    return boolValue;
  }

  static parseDate(value: string | number | Date) {
    let dateValue: Date;

    dateValue = Query.validator.ObjectIsNull(value) ? null : new Date(value);

    return dateValue;
  }
}

export default Query;
