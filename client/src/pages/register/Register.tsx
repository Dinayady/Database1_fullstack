import { Layout } from '../../components/layout';
import { Card, Form, Row, Space, Typography } from 'antd';
import { CustomInput } from '../../components/customInput/CustomInput';
import { PasInput } from '../../components/passwordInput/pasInput';
import { CustomBtn } from '../../components/customButton/CustomBtn';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

export const Register = () => {
  return (
    <Layout>
      <Row align='middle' justify='center'>
        <Card title='Sign Up' style={{ width: '30rem' }}>
          <Form onFinish={() => null}>
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
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
