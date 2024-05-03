import { UserModal, UserProps } from '../../user.modal';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'; 

describe('UserModal', () => {
  let props: UserProps;
  let sut: UserModal;
  beforeEach(() => {
      props = UserDataBuilder()
      sut = new UserModal(props);
  });

  it('Contructor method', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('Getter of name field', () => {
    expect(sut.props.name).toBeDefined();
    expect(typeof sut.props.name).toBe('string');
    expect(sut.props.name).toEqual(props.name);
  });

  it('Getter of email field', () => {
    expect(sut.props.email).toBeDefined();
    expect(typeof sut.props.email).toBe('string');
    expect(sut.props.email).toEqual(props.email);
  });

  it('Getter of password field', () => {
    expect(sut.props.password).toBeDefined();
    expect(typeof sut.props.password).toBe('string');
    expect(sut.props.password).toEqual(props.password);
  });

  it('Getter of date field', () => {
    expect(sut.props.createdAt).toBeDefined();
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });
});
