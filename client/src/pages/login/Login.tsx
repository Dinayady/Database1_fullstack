import { Layout } from '../../components/layout';
import { Card, Form, Row, Space, Typography } from 'antd';
import { CustomInput } from '../../components/customInput/CustomInput';
import { PasInput } from '../../components/passwordInput/pasInput';
import { CustomBtn } from '../../components/customButton/CustomBtn';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

export const Login = () => {
  return (
    <Layout>
      <Row align='middle' justify='center'>
        <Card title='Log In' style={{ width: '30rem' }}>
          <Form onFinish={() => null}>
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
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
