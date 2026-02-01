import { ValidationArguments } from 'class-validator';

export const MessagesValidators = {
    isNotEmpty: (args: ValidationArguments) => `O campo ${args.property} é obrigatório.`,
    isEmail: (args: ValidationArguments) => `O campo ${args.property} deve estar no formato válido.`,
    minLength: (args: ValidationArguments) => `O campo ${args.property} deve ter pelo menos ${args.constraints[0]} caracteres.`,
}