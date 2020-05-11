import {
    UserLoaderInterface,
    UserValidatorInterface,
} from '../../domain/interface';

export interface OAuth2Options {
    userLoader: UserLoaderInterface;
    userValidator: UserValidatorInterface;
}
