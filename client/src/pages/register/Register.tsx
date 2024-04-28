import { Layout } from '../../components/layout';
import { Card, Form, Row, Space, Typography } from 'antd';
import { CustomInput } from '../../components/customInput/CustomInput';
import { PasInput } from '../../components/passwordInput/pasInput';
import { CustomBtn } from '../../components/customButton/CustomBtn';
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
import { useState } from 'react';
import { useRegisterMutation } from '../../app/services/auth';
import { User } from '@prisma/client';
import { isErrorMsg } from '../../utils/isErrorMsg';
import { ErrorMessage } from '../../components/errorMessage/errorMessage';

type RegisterData = Omit<User, 'id' & { confirmPassword: string }>;

export const Register = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [error, setError] = useState('');
  const [registerUser] = useRegisterMutation();

  const register = async (data: RegisterData) => {
    try {
      await registerUser(data).unwrap();
      navigate('/');
    } catch (error) {
      const maybeError = isErrorMsg(error);
      if (maybeError) {
        setError(error.data.message);
      } else {
        setError('Unknown error');
      }
    }
  };

  return (
    <Layout>
      <Row align='middle' justify='center'>
        <Card title='Sign Up' style={{ width: '30rem' }}>
          <Form onFinish={register}>
            <CustomInput name='name' placeholder='Name...' />
            <CustomInput type='email' name='email' placeholder='Email...' />
            <PasInput name='password' placeholder='Password...' />
            <PasInput name='confirmPassword' placeholder='Repeat password...' />
            <CustomBtn type='primary' htmlType='submit'>
              Signup
            </CustomBtn>
          </Form>
          <Space direction='vertical' size='large'>
            <Typography.Text>
              Do have an account? <Link to={Paths.login}>Log In</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
