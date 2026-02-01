import { ValidationArguments } from 'class-validator';

export const MessagesValidators = {
    isNotEmpty: (args: ValidationArguments) => `O campo ${args.property} é obrigatório.`,
    isEmail: (args: ValidationArguments) => `O campo ${args.property} deve estar no formato válido.`,
    minLength: (args: ValidationArguments) => `O campo ${args.property} deve ter pelo menos ${args.constraints[0]} caracteres.`,
    isString: (args: ValidationArguments) => `O campo ${args.property} deve ser uma string.`,
    isNumber: (args: ValidationArguments) => `O campo ${args.property} deve ser um número.`,
    isDate: (args: ValidationArguments) => `O campo ${args.property} deve ser uma data válida.`,
}