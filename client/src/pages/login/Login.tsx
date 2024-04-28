import { Card, Form, Row, Space, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { CustomInput } from '../../components/customInput/CustomInput';
import { UserData, useLoginMutation } from '../../app/services/auth';
import { CustomBtn } from '../../components/customButton/CustomBtn';
import { PasInput } from '../../components/passwordInput/pasInput';
import { isErrorMsg } from '../../utils/isErrorMsg';
import { Layout } from '../../components/layout';
import { Paths } from '../../paths';
import { ErrorMessage } from '../../components/errorMessage/errorMessage';

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loginUser, loginUserResult] = useLoginMutation();

  const onLogin = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();

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
        <Card title='Log In' style={{ width: '30rem' }}>
          <Form onFinish={onLogin}>
            <CustomInput type='email' name='email' placeholder='Email...' />
            <PasInput name='password' placeholder='Password...' />
            <CustomBtn type='primary' htmlType='submit'>
              Login
            </CustomBtn>
          </Form>
          <Space direction='vertical' size='large'>
            <Typography.Text>
              Don't have an account? <Link to={Paths.register}>Sign Up</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
